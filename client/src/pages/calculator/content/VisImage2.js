import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

function VisImage(props) {
  // 0 female 3 male
  const mygender = props.gender
  const mycountry = props.country
  const waist_num = props.waist
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);
  useEffect(() => {

    drawChart();

  }, []);
  //waist to column tag
  function Waist_Circumference_Category_convert(num) {
    if (num == 0) {
      return data[0].Waist_Circumference_Category
    } else if (num == 4) {
      return data[1].Waist_Circumference_Category
    } else if (num == 7) {
      return data[2].Waist_Circumference_Category
    }
  };
  //default  asian boy
  const data = [
    { Waist_Circumference_Category: "< 90", Odd_Ratio: 1 },
    { Waist_Circumference_Category: "90 - 100", Odd_Ratio: 2.8 },
    { Waist_Circumference_Category: "> 100", Odd_Ratio: 5.2 }
  ];

  // re write the tag of column on the input of race and gender
  function Waist_Circumference_Category_data_convert(race, gender) {
    //race == 0  is asian
    if (race == 0) {
          //gender = 1 is female
      if (gender == 1) {
        //asian female
        data[0].Waist_Circumference_Category = " < 80 ";
        data[1].Waist_Circumference_Category = " 80 - 90 ";
        data[2].Waist_Circumference_Category = " > 90 ";
      } else
      //asian male
      {
        data[0].Waist_Circumference_Category = " < 90 ";
        data[1].Waist_Circumference_Category = "90 - 100";
        data[2].Waist_Circumference_Category = "> 100";
      }
    } else 
    if (race == 1) {
        //gender = 1 is female
      if (gender == 0) {
        data[0].Waist_Circumference_Category = " < 102";
        data[1].Waist_Circumference_Category = " 102 - 110 ";
        data[2].Waist_Circumference_Category = " > 110";
      } else if (gender == 1) {
        //gender = 1 is female
        data[0].Waist_Circumference_Category = " < 88";
        data[1].Waist_Circumference_Category = " 88 - 100 ";
        data[2].Waist_Circumference_Category = " > 100";
      }
    }
  }

  const drawChart = () => {

    const highlightClass = 'highlighted-bar';

    let race = 1 //not asian 
    let gender = 0 // means male

    //is female?
    if (mygender == 0) {
      gender = 1
    }
    //is asin
    if (mycountry == 2) {
      race = 0
    }
    // Adjust data categories based on race and gender input
    Waist_Circumference_Category_data_convert(race, gender);


    const waistToHighlight = Waist_Circumference_Category_convert(waist_num);
    d3.select(chartRef.current).selectAll("*").remove();
    // append the svg object to the body of the page

    // set the dimensions and margins of the graph
    const margin = {  top: 130, right: 30, bottom: 90, left: 50 },
      width = 680 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // X axis
    const x = d3.scaleBand()
      .range([0, width])
      .domain(data.map(d => d.Waist_Circumference_Category))
      .padding(0.2);
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("font-size", "20px")
      .style("text-anchor", "middle");

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, 8])
      .range([height, 0]);
    svg.append("g")
      .style("font-size", "20px")
      .call(d3.axisLeft(y));

    // X-axis label
    svg.append("text")
      .attr("class", "x axis-label")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 40)
      .style("font-size", "20px")
      .text("Waist Range");

    // Y-axis label
    svg.append("text")
    .attr("class", "y axis-label")
    .attr("text-anchor", "end") // Align the text to the end to position it nicely on the left side.
    .attr("x", 50) // Start from the very left edge of the SVG area.
    .attr("y", -margin.top + 100) // Adjust this to position the label above the y-axis.
    .style("font-size", "20px")
    .text("Odd Ratio");



    // Bars with mouse event handlers for highlighting
    svg.selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => x(d.Waist_Circumference_Category))
      .attr("width", x.bandwidth())
      .attr("fill", "#69b3a2")
      .attr("height", d => height - y(0)) // initially set to 0
      .attr("y", d => y(0))
      .on("mouseover", function (event, d) {
        d3.select(this).style("fill", "lightsteelblue"); // Change fill to highlight
        // Tooltip
        d3.select("#tooltip1")
          .style("opacity", 1)
          .html(`
        <table>
            <tr><td style="text-align: left; padding-right: 10px;">WAIST:</td><td style="min-width:50px; text-align: left;"><strong>${d.Waist_Circumference_Category}</strong></td></tr>
            <tr><td style="text-align: left; padding-right: 10px;">Odd Ratio:</td><td style="min-width:50px; text-align: left;"><strong>${d.Odd_Ratio}</strong></td></tr>
            <tr><td style="text-align: left; font-size: 20px;">(eg: Odd Ratio = 2 means twice</td></tr>
            <tr><td style="text-align: left; font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the risk as healthy people)</td></tr>
        </table>
    `)
          .style("left", (event.pageX + 20) + "px")
          .style("top", (event.pageY + 20) + "px");
      })
      .on("mousemove", function (event) {
        d3.select("#tooltip1")
          .style("left", (event.pageX + 20) + "px")
          .style("top", (event.pageY + 20) + "px");
      })
      .on("mouseout", function (event, d) {
        // Only reset bars that are not highlighted
        if (!d3.select(this).classed(highlightClass)) {
          d3.select(this).style("fill", "#69b3a2");
        } else {
          d3.select(this).style("fill", "orange");
        }
        // Hide tooltip
        d3.select("#tooltip1").style("opacity", 0);
      });

    // Animate bars
    svg.selectAll("rect")
      .transition()
      .duration(800)
      .attr("y", d => y(d.Odd_Ratio))
      .attr("height", d => height - y(d.Odd_Ratio))
      .delay((d, i) => i * 100);

    // Title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")
      .style("font-size", "30px")
      .style("text-decoration", "underline")
      .style("font-weight", "bold")
      .style("font-family", "Arial, sans-serif")
      .text("Waist Influence in Diabetes");



    // Remove the highlight class from all bars
    svg.selectAll("rect").classed(highlightClass, false).style("fill", "#69b3a2");

    // Add the highlight class to the matching bar and change its fill color
    svg.selectAll("rect")
      .filter(d => d.Waist_Circumference_Category === waistToHighlight)
      .classed(highlightClass, true)
      .style("fill", "orange");
  }

  return (
    <>
    <div>
      <div ref={chartRef}></div>
      <div ref={tooltipRef} id="tooltip1" style={{
        position: "absolute",
        opacity: 0,
        background: "rgba(255, 255, 255, 0.9)",
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        pointerEvents: "none",
        fontSize: "1.2em",
        color: "#333",
        zIndex: 10,
        transform: "translate(-50%, -100%)"
      }}>

      </div>
            <div style={{
        maxWidth: "860px", // Match the SVG width
        marginTop: "10px",
        fontSize: "22px",
        textAlign: "middle"
      }}>
               
      </div>
    </div>
    </>
  );
}




export default VisImage;

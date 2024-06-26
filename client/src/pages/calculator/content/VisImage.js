import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

function VisImage(props) {

  const age = props.age
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);
  useEffect(() => {

    drawChart();

  }, []);

  const drawChart = () => {

    const highlightClass = 'highlighted-bar';
    const ageToHighlight = age

    // set the dimensions and margins of the graph
    const margin = { top: 80, right: 30, bottom: 90, left: 50 },
      width = 700 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
    // Clear any previous SVG
    d3.select(chartRef.current).selectAll("*").remove();
    // append the svg object to the body of the page

    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const data = [

      { Age:" < 35 ",value: 0, Odd_Ratio: 1 },
      { Age:" 35 – 44 ",value: 2, Odd_Ratio: 1.7 },
      { Age:" 45 – 54 ",value: 4, Odd_Ratio: 3.0 },
      { Age:" 55 – 64 ",value: 6, Odd_Ratio: 4.6 },
      { Age:" > 65 ",value: 8, Odd_Ratio: 6.5 }
    ];

    // X axis
    const x = d3.scaleBand()
      .range([0, width])
      .domain(data.map(d => d.Age))
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
    .text("Age Group");

  // Y-axis label
  svg.append("text")
  .attr("class", "y axis-label")
  .attr("text-anchor", "end") // Align the text to the end to position it nicely on the left side.
  .attr("x", 50) // Start from the very left edge of the SVG area.
  .attr("y", -margin.top + 60) // Adjust this to position the label above the y-axis.
  .style("font-size", "20px")
  .text("Odd Ratio");

    // Bars with mouse event handlers for highlighting
    svg.selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", d => x(d.Age))
      .attr("width", x.bandwidth())
      .attr("fill", "#69b3a2")
      .attr("height", d => height - y(0)) // initially set to 0
      .attr("y", d => y(0))
      .on("mouseover", function (event, d) {
        d3.select(this).style("fill", "lightsteelblue"); // Change fill to highlight
        // Tooltip
        d3.select("#tooltip")
          .style("opacity", 1)
          .html(`
          <table>
              <tr><td style="text-align: left; padding-right: 10px;">Age:</td><td style="min-width:50px; text-align: left;"><strong>${d.Age}</strong></td></tr>
              <tr><td style="text-align: left; padding-right: 10px;">Odd Ratio:</td><td style="min-width:50px; text-align: left;"><strong>${d.Odd_Ratio}</strong></td></tr>
              <tr><td style="text-align: left; font-size: 20px;">(eg: Odd Ratio = 2 means twice</td></tr>
              <tr><td style="text-align: left; font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the risk as healthy people)</td></tr>
          </table>
      `)
          .style("left", (event.pageX + 20) + "px")
          .style("top", (event.pageY + 20) + "px");
      })
      .on("mousemove", function (event) {
        d3.select("#tooltip")
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
        d3.select("#tooltip").style("opacity", 0);
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
      .text("Age Influence in Diabetes");

    // Remove the highlight class from all bars
    svg.selectAll("rect").classed(highlightClass, false).style("fill", "#69b3a2");

    // Add the highlight class to the matching bar and change its fill color
    svg.selectAll("rect")
      .filter(d => d.value === ageToHighlight)
      .classed(highlightClass, true)
      .style("fill", "orange");
  };
  return (
    <>
    <div>
      <div ref={chartRef}></div>
      <div ref={tooltipRef} id="tooltip" style={{
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
      <p> <strong>(Odd ratio = 1: means healthy in this factor; Odd ratio = 2 : twice the risk as healthy people)</strong></p>
    </div>
    
    </>
  )
};

export default VisImage;

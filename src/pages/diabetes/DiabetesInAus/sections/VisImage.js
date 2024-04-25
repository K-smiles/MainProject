import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const VisImage = () => {

  const chartRef = useRef(null);

  useEffect(() => {

    drawChart();

  }, []);

  const drawChart = () => {
    const margin = { top: 100, right: 30, bottom: 100, left: 40 },
      width = 960 - margin.left - margin.right,
      height = 650 - margin.top - margin.bottom;

    const data = [
      { Age: "< 35", Odd_Ratio: 1 },
      { Age: "35 – 44", Odd_Ratio: 1.7 },
      { Age: "45 – 54", Odd_Ratio: 3.0 },
      { Age: "55 – 64", Odd_Ratio: 4.6 },
      { Age: "> 65", Odd_Ratio: 6.5 },
    ];

    d3.select(chartRef.current).selectAll("*").remove();

    const svg = d3.select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .range([0, width])
      .domain(data.map(d => d.Age))
      .padding(0.2);

    const tickValues2 = d3.range(0, 8.5, 2);




    const y = d3.scaleLinear()
      .domain([0, 8])
      .range([height, 0]);

    // Correct usage of .tickValues()
    const yAxis = d3.axisLeft(y).tickValues(tickValues2).tickFormat(d3.format("d"));

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("font-size", "20px")
      .style("text-anchor", "middle");

    // Apply the yAxis with tickValues correctly
    svg.append("g")
      .style("font-size", "20px")
      .call(yAxis);


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
    .attr("y", -margin.top + 80) // Adjust this to position the label above the y-axis.
    .style("font-size", "20px")
    .text("Odd Ratio");


      

    // Tooltip container
    const tooltip = d3.select(chartRef.current)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("position", "absolute")
      .style("font-size", "1.2em")
      .style("color", "#333")
      .style("pointer-events", "none")
      .style("transform", "translate(-50%, -100%)")
      .style("z-index", "10");


    // Define a color scale
    const colorScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range(["#8fbc8f", "#006400"]); // light green to dark green

    // Adding bars with dynamic color
    svg.selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.Age))
      .attr("width", x.bandwidth())
      .attr("y", d => y(d.Odd_Ratio))
      .attr("height", d => height - y(d.Odd_Ratio))
      .attr("fill", (d, i) => colorScale(i))
      .on("mouseover", (event, d) => {
        d3.select(event.currentTarget).attr("fill", "#ffff66");
        tooltip.style("opacity", 1);
        tooltip.html(`
        <table>
            <tr><td style="text-align: left; padding-right: 10px;">Age:</td><td style="min-width:50px; text-align: left;"><strong>${d.Age}</strong></td></tr>
            <tr><td style="text-align: left; padding-right: 10px;">Odd Ratio:</td><td style="min-width:50px; text-align: left;"><strong>${d.Odd_Ratio}</strong></td></tr>
            <tr><td style="text-align: left; font-size: 20px;">(eg: Odd Ratio = 2 means twice</td></tr>
            <tr><td style="text-align: left; font-size: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the risk as healthy people)</td></tr>
        </table>
    `)
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY) + "px");
      })
      .on("mousemove", function (event) {
        tooltip.style("left", (event.pageX + 20) + "px")
          .style("top", (event.pageY - 30) + "px");
      })
      .on("mouseout", (event, d, i) => {
        d3.select(event.currentTarget).attr("fill", colorScale(data.indexOf(d)));
        tooltip.style("opacity", 0);
      })


      // Animate the bars growing in height
      .transition()
      .duration(800)
      .attr("y", d => y(d.Odd_Ratio))
      .attr("height", d => height - y(d.Odd_Ratio));

    svg.append("text")
      .attr("x", width / 2)
      .attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")
      .style("font-size", "30px")
      .style("text-decoration", "underline")
      .style("font-weight", "bold")
      .style("font-family", "Arial, sans-serif")
      .text("Age Influence in Diabetes");
  };

  return (
    <>

      <div ref={chartRef} />
      <div style={{
        maxWidth: "1000px", // Match the SVG width
        marginTop: "-20px",
        fontSize: "22px",
        textAlign: "middle"
      }}>
        <p> <strong>(Odd ratio = 1: means healthy in this factor; Odd ratio = 2 : twice the risk as healthy people)</strong></p>
        <p><strong>The graph shows that the older you are, the more likely you are to develop diabetes.</strong></p>
      </div>
    </>
  );
};

export default VisImage;

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const VisImage3 = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    // Load CSV data
    d3.csv("https://raw.githubusercontent.com/firingbrisingr/Some_Data/main/diabetes_incidence_by_year.csv")
      .then((data) => {
        setData(data);
        drawChart(data);
      });
  }, []);






  const drawChart = (data) => {





// set the dimensions and margins of the graph
const margin = {top: 80, right: 100, bottom: 30, left: 80},
    width = 860 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

    // Clear any previous SVG
    d3.select(chartRef.current).selectAll("*").remove();





// append the svg object to the body of the page
const svg = d3.select(chartRef.current)
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",`translate(${margin.left},${margin.top})`);

    // List of groups (here I have one group per column)
    const allGroup = ["Male_Rate", "Female_Rate"]

    // Reformat the data: we need an array of arrays of {x, y} tuples
    const dataReady = allGroup.map( function(grpName) { // .map allows to do something for each element of the list
      return {
        name: grpName,
        values: data.map(function(d) {
          return {Year: d.Year, value: +d[grpName]};
        })
      };
    });
    // I strongly advise to have a look to dataReady with
    console.log(dataReady)

    // A color scale: one color for each group
    const myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(d3.schemeSet2);



    // Generate the ticks manually
    const tickValues = d3.range(2000, 2023, 5);

    // Add X axis --> it is a date format
    const x = d3.scaleLinear()
      .domain([1999,2022])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .style("font-size", "25px")
      .call(d3.axisBottom(x).tickValues(tickValues).tickFormat(d3.format("d")));

    const tickValues2 = d3.range(0, 450, 100);

    // Add Y axis
    const y = d3.scaleLinear()
      .domain( [0,450])
      .range([ height, 0 ]);
    svg.append("g")
      .style("font-size", "25px")
      .call(d3.axisLeft(y).tickValues(tickValues2).tickFormat(d3.format("d")));

    // Add the lines
    const line = d3.line()
      .x(d => x(+d.Year))
      .y(d => y(+d.value))
    svg.selectAll("myLines")
      .data(dataReady)
      .join("path")
        .attr("d", d => line(d.values))
        .attr("stroke", d => myColor(d.name))
        .style("stroke-width", 4)
        .style("fill", "none")

    // Append a new text element as your title
    svg.append("text")
        .attr("x", width / 2) // Position at half the width of the SVG
        .attr("y", 0 - (margin.top / 2)) // Position above the chart
        .attr("text-anchor", "middle") // Center the text
        .style("font-size", "30px") // Set font size
        .style("text-decoration", "underline")
        .style("font-weight", "bold")
        .style("font-family", "Arial, sans-serif") // Optional: set the font family
        .text("Diabetes Incidence Rate By Year and Gender"); // The text content

    // Add the points
    svg
      // First we need to enter in a group
      .selectAll("myDots")
      .data(dataReady)
      .join('g')
        .style("fill", d => myColor(d.name))
      // Second we need to enter in the 'values' part of this group
      .selectAll("myPoints")
      .data(d => d.values)
      .join("circle")
        .attr("cx", d => x(d.Year))
        .attr("cy", d => y(d.value))
        .attr("r", 5)
        .attr("stroke", "white")

    // Legend configuration
    const legendSpace = 35; // Spacing between legend items
    const legendRectSize = 35; // The size of the legend colored square
    const legendPosition = { x: width + margin.left - 130, y: margin.top }; // Position of the legend

    // Add legend
    const legend = svg.selectAll(".legend")
    .data(allGroup)
    .enter()
    .append("g")
    .attr("class", "legend")
    .attr("transform", (d, i) => `translate(0, ${i * legendSpace})`);

    // Add legend squares
    legend.append("rect")
    .attr("x", legendPosition.x-60)
    .attr("y", (d, i) => legendPosition.y + i * (legendRectSize + 5) - 70) // 5 is spacing between squares
    .attr("width", legendRectSize)
    .attr("height", legendRectSize)
    .style("fill", d => myColor(d));

    // Add legend text
    legend.append("text")
    .attr("x", legendPosition.x + legendRectSize -55)
    .attr("y", (d, i) => legendPosition.y + i * (legendRectSize + 5) + (legendRectSize/2) - 70)
    .attr("dy", ".35em") // Vertically center text
    .text(d => d === "Male_Rate" ? "Male" : "Female")
    .style("font-size", "25px")
    .attr("text-anchor", "start")
    .style("text-transform", "capitalize");

    // Add the points
    svg
    .selectAll("myDots")
    .data(dataReady)
    .join('g')
        .style("fill", d => myColor(d.name))
    .selectAll("myPoints")
    .data(d => d.values)
    .join("circle")
    .attr("cx", d => x(d.Year))
    .attr("cy", d => y(d.value))
    .attr("r", 5)
    .attr("stroke", "white")

    // Tooltip events
    .on("mouseover", function(event, d) {
    d3.select("#tooltip")
        .transition()
        .duration(200)
        .style("opacity", 1);
    d3.select(this)
        .attr("stroke", "black")
        .attr("stroke-width", 2);
    })
    .on("mousemove", function(event, d) {
    d3.select("#tooltip")
        .html(`
        <table>
            <tr><td style="text-align: left; padding-right: 10px;">Year:</td><td style="min-width:50px; text-align: left;"><strong>${d.Year}</strong></td></tr>
            <tr><td style="text-align: left; padding-right: 10px;">Incidence Rate:</td><td style="min-width:50px; text-align: left;"><strong>${d.value}</strong></td></tr>
            <tr><td style="text-align: left;">(per 100,000 population)</td></tr>
        </table>
    `)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 15) + "px");
    })
    .on("mouseout", function(d) {
    d3.select("#tooltip")
        .transition()
        .duration(500)
        .style("opacity", 0);
    d3.select(this)
        .attr("stroke", "white")
        .attr("stroke-width", 1);


    });
  };























  return (
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
               This graph shows that people aged 45-80 are the most likely to develop diabetes and that men are more likely to develop diabetes than women.
      </div>
    </div>
    
  );
};

export default VisImage3;

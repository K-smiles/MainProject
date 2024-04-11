import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

function VisImage(props) {

  const age = props.age

  useEffect(() => {

    drawChart();

  }, []);

  const drawChart = () => {

    const highlightClass = 'highlighted-bar';
    const ageToHighlight = age

    // set the dimensions and margins of the graph
    const margin = { top: 50, right: 30, bottom: 90, left: 30 },
      width = 700 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select("#my_dataviz")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const data = [
      { Age: 0, Odd_Ratio: 1 },
      { Age: 2, Odd_Ratio: 1.7 },
      { Age: 4, Odd_Ratio: 3.0 },
      { Age: 6, Odd_Ratio: 4.6 },
      { Age: 8, Odd_Ratio: 6.5 }
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
      .filter(d => d.Age === ageToHighlight)
      .classed(highlightClass, true)
      .style("fill", "orange");
  };
  return (
    <>
      <div id="my_dataviz"></div>
      <div id="tooltip"></div>
    </>
  )

};

export default VisImage;

import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const VisImage = () => {

  const chartRef = useRef(null);

  useEffect(() => {

    drawChart();

  }, []);

  const drawChart = () => {
    const margin = { top: 50, right: 30, bottom: 90, left: 40 },
      width = 860 - margin.left - margin.right,
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

    // Adding animations with .transition()
    svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.Age))
      .attr("width", x.bandwidth())
      .attr("fill", "#69b3a2")
      .attr("y", y(0)) // Start animation from the bottom
      .attr("height", 0) // Start with a height of 0
      .on("mouseover", function (event, d) {
        d3.select(this).attr("fill", "lightsteelblue");
        tooltip.style("opacity", 1);
        tooltip.html(`Age: ${d.Age}<br/>Odd Ratio: ${d.Odd_Ratio}`)
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY) + "px");
      })
      .on("mousemove", function (event) {
        tooltip.style("left", (event.pageX + 20) + "px")
          .style("top", (event.pageY - 30) + "px");
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "#69b3a2");
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
        maxWidth: "860px", // Match the SVG width
        marginTop: "-20px",
        fontSize: "22px",
        textAlign: "middle"
      }}>
        <p>The graph shows that the older you are, the more likely you are to develop diabetes.</p>
        <p> (Odd ratio: 1 means no additional risk, eg: 2 means twice the risk as normal people)</p>
      </div>
    </>
  );
};

export default VisImage;

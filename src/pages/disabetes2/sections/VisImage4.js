import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const VisImage4 = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    // Load CSV data
    d3.csv("https://raw.githubusercontent.com/firingbrisingr/Some_Data/main/diabetes_incidence_by_age.csv")
      .then((data) => {
        setData(data);
        drawChart(data);
      });
  }, []);






  const drawChart = (data) => {





  // Set the dimensions and margins of the graph
  const margin = {top: 110, right: 30, bottom: 40, left: 80},
      width = 800 - margin.left - margin.right,
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

    // Append a new text element as your title
    svg.append("text")
    .attr("x", width / 2) // Position at half the width of the SVG
    .attr("y", 0 - (margin.top / 2) - 20) // Position above the chart
    .attr("text-anchor", "middle") // Center the text
    .style("font-size", "30px") // Set font size
    .style("text-decoration", "underline")
    .style("font-weight", "bold")
    .style("font-family", "Arial, sans-serif") // Optional: set the font family
    .text("Diabetes Incidence Rate By Age and Gender"); // The text content

// Define a padding between bars and y-axis
const bar_padding = 50;

  // Find the maximum data value for the symmetric domain
  const max = 600 + bar_padding;

console.log(max);

  // Create the x scale with domain from negative max to positive max
  const x = d3.scaleLinear()
    .domain([-max, max])
    .range([0, width]);

const zeroPosition = x(0);

const tickValues = d3.range(-max + 50, max - 50, 100); 

  // Add X axis
  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .style("font-size", "20px")
    .call(d3.axisBottom(x)
        .tickValues(tickValues) // Use the calculated tick values
        .tickFormat(d => Math.abs(d)) // Use the absolute value for labels
    );

  // Create a y scale with domain as the group names
  const y = d3.scaleBand()
    .range([0, height])
    .domain(data.map(d => d.Age_Group))
    .padding(.1);

  // Add Y axis
  svg.append("g")
  .style("font-size", "20px")
    .call(d3.axisLeft(y));

    // Add horizontal line at the top to complete the rectangle frame
    svg.append("line")
    .style("stroke", "black")
    .style("shape-rendering", "crispEdges") // This ensures the line is sharp
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", width)
    .attr("y2", 0);

    // Add vertical line on the right to complete the rectangle frame
    svg.append("line")
    .style("stroke", "black")
    .style("shape-rendering", "crispEdges") // This ensures the line is sharp
    .attr("x1", width)
    .attr("y1", 0)
    .attr("x2", width)
    .attr("y2", height);



// Create bars for males
svg.selectAll(".male-bar")
  .data(data)
  .join("rect")
  .attr("x", d => zeroPosition) // Start from the zero position
  .attr("y", d => y(d.Age_Group))
  .attr("width", d => x(d.Male) - zeroPosition) // Calculate width from zero to the value
  .attr("height", y.bandwidth())
  .attr("fill", "#69b3a2");

// Create bars for females
svg.selectAll(".female-bar")
  .data(data)
  .join("rect")
  .attr("x", d => x(-d.Female)) // Start from the scaled negative value
  .attr("y", d => y(d.Age_Group))
  .attr("width", d => Math.abs(x(d.Female) - zeroPosition)) // Calculate width as the absolute difference from value to zero
  .attr("height", y.bandwidth())
  .attr("fill", "#d95f02");

  const tooltip = d3.select("#tooltip");

  // Create bars for males and females with tooltip interaction
svg.selectAll(".male-bar")
  .data(data) // Use the combined data for both males and females
  .join("rect")
  .attr("x", d => zeroPosition)
  .attr("y", d => y(d.Age_Group))
  .attr("width", d => x(d.Male) - zeroPosition)
  .attr("height", y.bandwidth())
  .attr("fill", "#69b3a2")
  .on("mouseover", function(event, d) {
    
    d3.select(this)
      .transition()
      .duration(100)
      .style("fill", "lightsteelblue")
      tooltip.html(`
        <table>
            <tr><td style="text-align: left; padding-right: 10px;">Age:</td><td style="min-width:50px; text-align: left;"><strong>${d.Age_Group}</strong></td></tr>
            <tr><td style="text-align: left; padding-right: 10px;">Gender:</td><td style="min-width:50px; text-align: left;"><strong>Male</strong></td></tr>
            <tr><td style="text-align: left; padding-right: 10px;">Incidence Ratio:</td><td style="min-width:50px; text-align: left;"><strong>${d.Male}</strong></td></tr>
            <tr><td style="text-align: left;">(per 100,000 population)</td></tr>
        </table>
    `)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY + 10) + "px")
      .transition()
      .duration(100)
      .style("opacity", 1);
  })
  .on("mousemove", function(event, d) {
    tooltip
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY + 10) + "px");
  })
  .on("mouseout", function() {
    d3.select(this)
      .transition()
      .duration(100)
      .style("fill", "#69b3a2")
    tooltip.transition()
      .duration(100)
      .style("opacity", 0);
  });


  

  svg.selectAll(".female-bar")
  .data(data) // Use the combined data for both males and females
  .join("rect")
  .attr("x", d => x(-d.Female)) // Start from the scaled negative value
  .attr("y", d => y(d.Age_Group))
  .attr("width", d => Math.abs(x(d.Female) - zeroPosition)) // Calculate width as the absolute difference from value to zero
  .attr("height", y.bandwidth())
  .attr("fill", "#d95f02")
  .on("mouseover", function(event, d) {
    d3.select(this)
      .transition()
      .duration(100)
      .style("fill", "lightsteelblue")
      tooltip.html(`
        <table>
            <tr><td style="text-align: left; padding-right: 10px;">Age:</td><td style="min-width:50px; text-align: left;"><strong>${d.Age_Group}</strong></td></tr>
            <tr><td style="text-align: left; padding-right: 10px;">Gender:</td><td style="min-width:50px; text-align: left;"><strong>Female</strong></td></tr>
            <tr><td style="text-align: left; padding-right: 10px;">Incidence Ratio:</td><td style="min-width:50px; text-align: left;"><strong>${d.Female}</strong></td></tr>
            <tr><td style="text-align: left;">(per 100,000 population)</td></tr>
        </table>
    `)
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY + 10) + "px")
      .transition()
      .duration(100)
      .style("opacity", 1);
  })
  .on("mousemove", function(event, d) {
    tooltip
      .style("left", (event.pageX + 10) + "px")
      .style("top", (event.pageY + 10) + "px");
  })
  .on("mouseout", function() {
    d3.select(this)
      .transition()
      .duration(100)
      .style("fill", "#d95f02")

    tooltip.transition()
      .duration(100)
      .style("opacity", 0);
  });

  const subgroups = data.columns.slice(1)

    // color palette = one color per subgroup
    const color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['#69b3a2','#d95f02'])

// Calculate legend item width dynamically or use a fixed value
const legendItemWidth = 150; // Width of each legend item (rectangle + text)

// Legend setup for a horizontal layout
const legend = svg.selectAll(".legend")
  .data(subgroups)
  .enter()
  .append("g")
    .attr("class", "legend")
    .attr("transform", (d, i) => `translate(${i * legendItemWidth},0)`); // Position legends horizontally

// Draw legend rectangles
legend.append("rect")
  .attr("x", 0) // Start rectangles at the beginning of each group
  .attr("y", 0 - (margin.top / 2)+20)
  .attr("width", 28)
  .attr("height", 28)
  .style("fill", color);

// Draw legend text to the right of the rectangles
legend.append("text")
  .attr("x", 34) // Position text to the right of the rectangles
  .attr("y", 0 - (margin.top / 2)+35)
  .attr("dy", "0.35em") // Fine-tune vertical alignment
  .style("font-size", "30px") // Adjust font size as needed
  .style("text-anchor", "start") // Anchor text at the start (left side)
  .text(d => d);


  };


  const tooltipStyle = {
    fontFamily: "Arial, sans-serif", // Ensure a consistent font
    color: "#333", // Text color for better readability
    fontSize: "1.2em", // Adjust font size as needed
    boxShadow: "0px 4px 8px rgba(0,0,0,0.25)", // Soft shadow for depth
    maxWidth: "320px", // Max width to prevent overly wide tooltips
    opacity: 0,
    position: "absolute",
    backgroundColor: "white",
    border: "solid 1px #ccc",
    borderRadius: "5px",
    padding: "10px",
    textAlign: "left",
  };
  
  const tooltipContentStyle = {
    width: "100%", // Use the full width of the tooltip for the table
    borderSpacing: 0, // Remove space between borders
    tableLayout: "fixed", // Enable fixed table layout for consistent column sizing
  };
  
  const tooltipTdStyle = {
    padding: "4px 6px", // Padding within table cells for spacing
  };
  
  const tooltipTrOddTdStyle = {
    backgroundColor: "#f8f8f8", // Zebra striping for rows
  };
  
  const tooltipTdFirstStyle = {
    fontWeight: "bold", // Make labels bold
    textAlign: "right", // Align labels to the right
    paddingRight: "10px", // Right padding for spacing between label and value
  };
  
  const tooltipTdLastStyle = {
    textAlign: "left", // Ensure values are left-aligned
  };
  
  const tooltipArrowStyle = {
    content: '""',
    position: "absolute",
    bottom: "100%", // At the top of the tooltip
    left: "50%",
    marginLeft: "-5px",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: "transparent transparent white transparent",
  };
  
  const tooltipArrowBeforeStyle = {
    ...tooltipArrowStyle,
    marginLeft: "-6px",
    borderColor: "transparent transparent #ddd transparent",
  };
















  return (
    <div>
      <div ref={chartRef}></div>
      <div ref={tooltipRef} id="tooltip" style={tooltipStyle}>
        {/* You can structure your tooltip content here */}
        <table style={tooltipContentStyle}>
          {/* Example content */}
          <tr style={tooltipTrOddTdStyle}>
            <td style={{ ...tooltipTdStyle, ...tooltipTdFirstStyle }}>Age:</td>
            <td style={{ ...tooltipTdStyle, ...tooltipTdLastStyle }}>35</td>
          </tr>
          {/* Additional rows as needed */}
        </table>
        {/* Arrow styles would need to be applied to :before and :after pseudo-elements, which cannot be directly manipulated via inline styles in React. Consider using a CSS class or styled-components for complex pseudo-elements. */}
      </div>
      <div style={{
        maxWidth: "860px", // Match the SVG width
        marginTop: "10px",
        fontSize: "22px",
        textAlign: "middle"
      }}>
        After 2008, diabetes incidence rates showed a marked decline, with male rates remaining notably higher. 
      </div>
    </div>
  );
};

export default VisImage4;

import * as d3 from "npm:d3";
import {dimColors, dimDict, dimList} from "../data/consts.js";


export function flowerChart(data, selectedCCAA, y, cat, r) {
  
  const dataCCAA = data.filter((o) => o.ccaa === selectedCCAA)
  const numSegments = dataCCAA.length;
  
  const slicePadding = 12;

  const colorScale = d3.scaleOrdinal(dimList, dimColors);
  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map((d) => d[y]))) 
    .range([r / 3, r]); 

  // Define the arc
  const arc = d3
    .arc()
    .innerRadius(r / 20)
    .outerRadius((d) => yScale(d[y])) // Radial length based on value
    .startAngle(
      (d, i) => ((i - 0.5) / numSegments) * 2 * Math.PI + slicePadding / d[y]
    ) // Angle start
    .endAngle(
      (d, i) =>
        ((i - 0.5 + 1) / numSegments) * 2 * Math.PI - slicePadding / d[y]
    ) // Angle end
    .cornerRadius(r);

  const svg = d3
    .create("svg")
    .attr("width", r * 2)
    .attr("height", r * 2 + 20);

  const container = svg
    .append("g")
    .attr("class", "container")
    .attr("transform", `translate(${r},${r})`);

  const petalsGroup = container
    .append("g")
    .attr("class", "petals-group")
    .attr("transform", "rotate(30)"); //rotate because total view is better


  const tooltip = d3.select("body")
    .append("div")
    .attr("class", "card")
    .style("position", "absolute")
    .style("background", "#f2f2f2")
    .style("border", "2px solid #767676")
    .style("padding", "5px 10px")
    .style("border-radius", "2px")
    .style("font-size", "10px")
    .style("letter-spacing", "0.5px")
    .style("drop-shadow", "0 3px 4px rgba(0,0,0,0.2))")
    .style("pointer-events", "none")
    .style("display", "none");


  // Total average as stem
  const averageValue = d3.mean(dataCCAA, (d) => d[y]);
  const averageRadius = yScale(averageValue);
  
  container
    .append("line")
    .attr("x1", 0)
    .attr("y1", r - 5) // r  - averageRadius/2
    .attr("x2", 0)
    .attr("y2", r - averageRadius/2 )
    .attr("stroke", "#B2C25B")
    .attr("stroke-width", r / 15)
    .on("mouseover", function (event, d) {
      tooltip
        .style("display", "block")
        .html(`<strong>categoria</strong> Total <br><strong>valor</strong> ${averageValue.toFixed(2)}`);
    })
    .on("mousemove", function (event) {
      tooltip
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 20) + "px");
    })
    .on("mouseout", function () {
      tooltip.style("display", "none");
    });

  // Create the petals as path elements
  petalsGroup
    .selectAll("path")
    .data(dataCCAA)
    .join("path")
    .attr("d", arc)
    .attr("fill", (d) => colorScale(d[cat]))
    .on("mouseover", function (event, d) {
      tooltip
        .style("display", "block")
        .html(`<strong>categoria</strong> ${dimDict[d[cat]]}<br><strong>valor</strong> ${d[y]}`);
    })
    .on("mousemove", function (event) {
      tooltip
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 20) + "px");
    })
    .on("mouseout", function () {
      tooltip.style("display", "none");
    });

  //Place name at bottom
  container
    .selectAll("text")
    .data(dataCCAA.filter((d) => d.dim === "dim1"))
    .join("text")
    .attr("dy", r + 10 )
    .attr("text-anchor", "middle")
    .text((d) => selectedCCAA)
    .style("letter-spacing", "0.5px")
    .attr("class", "label")
    .style("font-size", "12px");

  return svg.node();
}
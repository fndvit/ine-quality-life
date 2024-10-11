import * as d3 from "npm:d3";
import {dimColors, dimDict, dimList, ccaaNameDict} from "../data/consts.js";

function showTooltip(elem, tooltip, category, value) {
  elem
  .style("stroke", "black")
  .style("stroke-width", 1.5);
  tooltip
  .style("display", "block")
  .html(`${category}<br/><span class="big-number">${value}</span>`);
}

function hideTooltip(elem, tooltip){
  elem.style("stroke", "none");
  tooltip.style("display", "none");
}

function moveTooltip(tooltip, event){
  tooltip
  .style("left", (event.pageX + 10) + "px")
  .style("top", (event.pageY - 20) + "px");
}

export function flowerChart(data, selectedCCAA, year, y, cat, r) {
  const dataCCAA = data.filter((o) => o.ccaa === selectedCCAA && o.dim !== "index" && o.year === year);
  const indexValue = data.filter((o) => o.ccaa === selectedCCAA && o.dim === "index" && o.year === year )[0].val;

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
    .innerRadius(r / 15)
    .outerRadius((d) => yScale(d[y])) // Radial length based on value
    .startAngle(
      (d, i) => ((i - 0.5) / numSegments) * 2 * Math.PI + slicePadding / d[y]
    ) // Angle start
    .endAngle(
      (d, i) =>
        ((i - 0.5 + 1) / numSegments) * 2 * Math.PI - slicePadding / d[y]
    ) // Angle end
    .cornerRadius(r);

  const baseY = r - yScale(indexValue) - 20;

  const svg = d3
    .create("svg")
    .attr("width", r * 2)
    .attr("height", r * 2 + 20);

  const container = svg
    .append("g")
    .attr("class", "container")
    .attr("transform", `translate(${r},${r})`);

  const tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .attr("aria-label","tip")
    .style("position", "absolute")
    .style("padding", "5px 10px")
    .style("pointer-events", "none");

  // Steam
  container
    .append("line")
    .attr("x1", 0)
    .attr("y1", r - 10) 
    .attr("x2", 0)
    .attr("y2", baseY)
    .attr("stroke", "#B2C25B")
    .attr("stroke-width", r / 20)
    .attr("stroke-linecap", "round");

  // Create the petals
  const petalsGroup = container
  .append("g")
  .attr("class", "petals-group")
  .attr("transform", `translate(0, ${baseY})`);

  petalsGroup
    .selectAll("path")
    .data(dataCCAA)
    .join("path")
    .attr("d", arc)
    .attr("fill", (d) => colorScale(d[cat]))
    .on("mouseover", function (event, d) {
      showTooltip(d3.select(this),tooltip,dimDict[d[cat]],d[y])
    })
    .on("mousemove", function (event) {
      moveTooltip(tooltip,event);
    })
    .on("mouseout", function () {
      hideTooltip(d3.select(this),tooltip);
    });


  //Place name and index 
  container
    .append("text")
    .attr("x", 0) 
    .attr("y", baseY + 5) // Position slightly below the line
    .attr("text-anchor", "middle") 
    .attr("class", "notes")
    .style("font-weight","bold")
    .attr("stroke", "#FFF") 
    .attr("stroke-width", 3)
    .text(indexValue); 

  container
    .append("text")
    .attr("x", 0) 
    .attr("y", baseY + 5) // Position slightly below the line
    .attr("text-anchor", "middle") 
    .attr("class", "notes")
    .style("font-weight","bold")
    .text(indexValue); 

  container
    .append("text")
    .attr("x", 0) 
    .attr("y", r + 15) // Position slightly below the line
    .attr("text-anchor", "middle") 
    .text(ccaaNameDict[selectedCCAA]); 

  return svg.node();
}
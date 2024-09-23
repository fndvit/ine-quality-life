import * as d3 from "npm:d3";

export function flowerChart (data, x, y, color, cat, r) {
  // Calculate the total number of segments (dimensions)
  const numSegments = data.length;

  // Define color scale
  const colorScale = d3.scaleOrdinal(color.range, color.domain);

  // Define padding between slices in radians (e.g., 0.02 radians)
  const slicePadding = 12;

  // Create a scale for the angular positioning (dimensions)
  const xScale = d3
    .scaleBand()
    .domain(data.map((d) => d[x])) // Map each category for angular placement
    .range([0, 2 * Math.PI]) // Full circle range
    .align(0); // Align segments correctly

  // Create a scale for the radial positioning (values)
  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map((d) => d[y]))) // Adjust to your data's value range
    .range([r / 3, r]); // Map to radius

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

  // Create the svg
  const svg = d3
    .create("svg")
    .attr("width", r * 2)
    .attr("height", r * 2);

  // Create a group to center the chart
  const container = svg
    .append("g")
    .attr("class", "container")
    .attr("transform", `translate(${r},${r})`);

  // Create the petals as path elements
  container
    .selectAll("path")
    .data(data)
    .join("path")
    .attr("d", arc)
    .attr("fill", (d) => colorScale(d[cat])); // Change color if desired

  return svg.node();
}
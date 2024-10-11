import * as d3 from "npm:d3";
import * as Plot from "npm:@observablehq/plot";
import {resize} from "npm:@observablehq/stdlib";
import {ccaaList, ccaaColors, ccaaNameDict} from "../data/consts.js";

export function lineChart(data, ccaa, dim, width, height, x, y, stroke) {
  const yRange = d3.extent(data, d => d.val);
  return resize((width) => 
    Plot.plot({
      width,
      height,
      color: {
        domain: ccaaList,
        range: ccaaColors,
        label: ""
      },
      y: {domain: yRange, label: "Valor"},
      x: {tickFormat: "", label: "Año"},
      marks: [
        Plot.lineY(
          data.filter(i => i.dim === dim),
          { z: d => d[stroke], stroke: "#ccc", strokeOpacity:.35, curve: "catmull-rom", x: d => d[x], y: d => d[y] }
        ),
        Plot.lineY(
          data.filter(i => ccaa.includes(i.ccaa) && i.dim === dim),
          { stroke: d => d[stroke], strokeWidth: 2.1, curve: "catmull-rom", x: d => d[x], y: d => d[y],
          tip: {
            format: {
              stroke: (d) => `${ccaaNameDict[d]}`,
              x: (d) => `${d}`,
              y: true,
              z: false
            }
          } }
        ),
        Plot.lineY(
          data.filter(i => i[stroke] === "Total" && i.dim === dim ),
          { stroke: d => d[stroke], strokeLinecap: "square", strokeDasharray: [3.6,6], strokeWidth: 3, curve: "catmull-rom", x: d => d[x], y: d => d[y]}
        )
      ]
    })
  )
}
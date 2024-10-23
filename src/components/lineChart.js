import * as d3 from "npm:d3";
import * as Plot from "npm:@observablehq/plot";
import {resize} from "npm:@observablehq/stdlib";
import {ccaaList, ccaaColors, ccaaNameDict, dimColors, dimList} from "../data/consts.js";

export function lineChart(data, ccaa, dim, width, height, x, y, stroke, page) {
  const yRange = d3.extent(data, d => d.val);
  const inPage = page === "page" ? true : false;
  return resize((width) => 
    Plot.plot({
      width,
      height,
      color: {
        domain: inPage ? dimList : ccaaList,
        range: inPage ? dimColors : ccaaColors ,
        label: ""
      },
      y: {domain: yRange, label: "Valor"},
      x: {tickFormat: d => d.toString().replace(",", ""), label: "Año"},
      marks: [
        Plot.lineY(
          data.filter(i => i.dim === dim),
          { z: d => d.ccaa, stroke: "#ccc", strokeOpacity:.35, curve: "catmull-rom", x: d => d[x], y: d => d[y] }
        ),
        Plot.lineY(
          data.filter(i => ccaa.includes(i.ccaa) && i.dim === dim),
          { stroke: d => d[stroke], strokeWidth: 2.1, curve: "catmull-rom", x: d => d[x], y: d => d[y],
          tip: {
            format: {
              stroke: (d) => inPage ? false : ccaaNameDict[d],
              x: (d) => `${d}`,
              y: true,
              z: false
            }
          } }
        ),
        Plot.lineY(
          data.filter(i => i.ccaa === "Total" && i.dim === dim ),
          { stroke: ccaaColors[0], strokeLinecap: "square", strokeDasharray: [3.6,6], strokeWidth: 3, curve: "catmull-rom", x: d => d[x], y: d => d[y]}
        )
      ]
    })
  )
}
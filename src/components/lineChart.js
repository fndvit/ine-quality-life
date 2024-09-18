import * as Plot from "npm:@observablehq/plot";
import {resize} from "npm:@observablehq/stdlib";

export function lineChart(data, ccaa, dim, width, height, x, y, {domain, range}, yRange, stroke) {
  return resize((width) => 
    Plot.plot({
      width,
      height,
      color: {
        domain,
        range,
        label: "CC.AA.:"
      },
      y: {domain: yRange, label: "Valor:"},
      x: {tickFormat: "", label: "Año:"},
      marks: [
        Plot.lineY(
          data.filter(i => i.dim === dim),
          { z: d => d[stroke], stroke: "#ccc", strokeOpacity:.5, curve: "catmull-rom", x: d => d[x], y: d => d[y] }
        ),
        Plot.lineY(
          data.filter(i => ccaa.includes(i.ccaa) && i.dim === dim),
          { stroke: d => d[stroke], strokeWidth: 1.8, curve: "catmull-rom", x: d => d[x], y: d => d[y],
          tip: {
            format: {
              stroke: true,
              x: (d) => `${d}`,
              y: true,
              z: false
            }
          } }
        ),
        Plot.lineY(
          data.filter(i => i[stroke] === "Total" && i.dim === dim ),
          { stroke: d => d[stroke], strokeWidth: 3.6, curve: "catmull-rom", x: d => d[x], y: d => d[y]}
        )
      ]
    })
  )
}
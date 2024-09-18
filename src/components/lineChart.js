import * as Plot from "npm:@observablehq/plot";
import {resize} from "npm:@observablehq/stdlib";

export function lineChart(data, width, height, x, y, {domain, range}, yRange, stroke, strokeHilite) {
  console.log(yRange)
  return resize((width) => 
    Plot.plot({
      width,
      height,
      color: {
        domain,
        range
      },
      y: {domain: yRange},
      marks: [
        Plot.lineY(
          data.filter(d => d[stroke] !== strokeHilite),
          { stroke: d => d[stroke], curve: "catmull-rom", x: d => d[x], y: d => d[y], tip: true }
        ),
        Plot.lineY(
          data.filter(d => d[stroke] === strokeHilite),
          { stroke: d => d[stroke], strokeWidth: 3, curve: "catmull-rom", x: d => d[x], y: d => d[y]}
        )
      ]
    })
  )
}
import * as Plot from "npm:@observablehq/plot";
import {resize} from "npm:@observablehq/stdlib";

export function lineChart(data, width, height, x, y, {domain, range}, stroke) {
  return resize((width) => 
    Plot.plot({
      width,
      height,
      color: {
        domain,
        range
      },
      marks: [
        Plot.lineY(
          data,
          { stroke: d => d[stroke], curve: "catmull-rom", x: d => d[x], y: d => d[y], tip: true }
        )
      ]
    })
  )
}
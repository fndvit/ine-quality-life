import * as d3 from "npm:d3";
import * as Plot from "npm:@observablehq/plot";
import {resize} from "npm:@observablehq/stdlib";
import {ccaaNameDict, dimColors, dimList, darkerDimColors} from "../data/consts.js";

export function sparkbar(data, ccaa, subdim) {

  const stroke = d3.scaleOrdinal([...dimList, "gray"], [...darkerDimColors, "#bfb6b8"]);
  const filteredData = data.filter((d) => d.subdim === subdim);
  const order = filteredData[0].sign === "pos" ? "ascending" : "descending";

  return resize((width) => 
    Plot.plot({
      width,
      height:32,
      x: { tickSize: 0, label: "", tickFormat: d => "" },
      y: { ticks: "", label: "", labelArrow: "none" },
      margin: 0,
      color: {
        domain:[...dimList, "gray"],
        range: [...dimColors, "#e8dee0"]
      },
      marks: [
        Plot.barY(
          filteredData,
          {
            x: "ccaa",
            y: "value",
            sort: {x: "y", order},
            r: 2,
            inset: 1,
            fill: (d) => (d.ccaa === ccaa ? d.dim : "gray"),
            stroke: (d) => (d.ccaa === ccaa ? stroke(d.dim) : stroke("gray")),
            strokeWidth: .6,
            tip: {
              format: {
                x: d=> ccaaNameDict[d],
                y: true,
                fill:false,
              }
            }
          }
        )
      ]
    })
  )
}
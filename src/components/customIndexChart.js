import * as Plot from "npm:@observablehq/plot";
import { resize } from "npm:@observablehq/stdlib";
import { customIndexColors } from "../data/consts.js";
import { ccaaNameDict } from "../data/consts.js";

export function customIndexChart(imcv, customAmpi, dimensionDiffs, clickedSlider, year, height, simple) {
  return resize((width) =>
    Plot.plot({
      width: width,
      height: height,
      marginLeft: 0,
      y: {
        label: "",
        tickSize: 0,
        tickFormat: (d) => ""
      },
      x: {
        domain: [80, 120],
        ticks: [90, 100, 110],
        grid: true,
        axis: "both",
        label: "Avg."
      },
      color: {
        type: "diverging",
        domain: [5, -5],
        range: customIndexColors
      },
      marks: [
        Plot.ruleY(
          customAmpi.map((d) => d.ccaa),
          {
            strokeWidth: 0.2,
            strokeDasharray: "3,6"
          }
        ),
        Plot.barX(customAmpi, {
          x1: 80,
          x2: "val",
          y: "ccaa",
          r: 3,
          fill: simple ? "#3b5fc0" : "#c7c1bf",
          fillOpacity: 0.3,
          insetTop: 6,
          insetBottom: 6,
          sort: {
            y: "x",
            reverse: true
          },
        }),
        ...(!simple
          ? [
              Plot.barX(customAmpi, {
                x1: "val",
                x2: (d) => {
                  const original = imcv.find(
                    (o) => o.ccaa === d.ccaa && o.dim === "index" && o.year === year
                  );
                  return original.val;
                },
                y: "ccaa",
                insetTop: 12,
                insetBottom: 12,
                fill: (d) => {
                  const original = imcv.find(
                    (o) => o.ccaa === d.ccaa && o.dim === "index" && o.year === year
                  );
                  return (original.val - d.val) * 2;
                },
                fillOpacity: 0.3
              })
            ]
          : []),
        ...(clickedSlider != "None" && !simple
          ? [
              Plot.ruleY(
                customAmpi.map((d) => d.ccaa),
                {
                  x1: (d) => dimensionDiffs[d][clickedSlider].avg,
                  x2: (d) => dimensionDiffs[d][clickedSlider].dimVal,
                  stroke: (d) =>
                    dimensionDiffs[d][clickedSlider].avg -
                    dimensionDiffs[d][clickedSlider].dimVal,
                  strokeWidth: 2
                }
              )
            ]
          : []),
        ...(!simple
          ? [
              Plot.dotX(
                imcv.filter((d) => d.year === year),
                {
                  x: "val",
                  y: "ccaa",
                  r: 3,
                  fill: "#797974",
                  fillOpacity: 0.6,
                  stroke: "#ffffff"
                }
              )
            ]
          : []),
        Plot.dotX(
          imcv.filter((d) => d.dim === "index" && d.year === year),
          {
            x: "val",
            y: "ccaa",
            fill: "#efece8",
            stroke: "#382f46",
            strokeWidth: 2,
            strokeOpacity: simple ? 1 : 0.6,
            r: 5,
          }
        ),
        ...(!simple
          ? [
              Plot.dotX(customAmpi, {
                x: "val",
                y: "ccaa",
                stroke: "#382f46",
                fill: (d) => {
                    const original = imcv.find(
                      (o) =>
                        o.ccaa === d.ccaa && o.dim === "index" && o.year === year
                    );
    
                    return (original.val - d.val) * 2;
                },
                sort: {
                  y: "x",
                  reverse: true
                },
                tip: {
                  format: {
                    y: true,
                    x: true,
                    fill: (d) => -(d / 2).toFixed(1)
                  }
                },
                r: 6
              })
            ]
          : []),
        ...(clickedSlider != "None" && !simple
          ? [
              Plot.dotX(
                customAmpi.map((d) => d.ccaa),
                {
                  x: (d) => dimensionDiffs[d][clickedSlider].dimVal,
                  y: Plot.identity,
                  r: 4,
                  fill: (d) =>
                    dimensionDiffs[d][clickedSlider].avg -
                    dimensionDiffs[d][clickedSlider].dimVal,
                  strokeOpacity: 1
                }
              )
            ]
          : []),
        Plot.text(customAmpi, {
          x: 80,
          y: "ccaa",
          text: (d) => ccaaNameDict[d.ccaa],
          textAnchor: "start",
          dx: 4,
          fontSize: 13
        })
      ]
    })
  )
}
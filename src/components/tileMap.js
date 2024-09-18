import * as d3 from "npm:d3";
import {html} from "npm:htl";
import {flowerChart} from "./flowerChart.js";

const coords = [
    { id: "GA", x: 0, y: 0 },
    { id: "AS", x: 1, y: 0 },
    { id: "CB", x: 2, y: 0 },
    { id: "PV", x: 3, y: 0 },
    { id: "RI", x: 3, y: 1 },
    { id: "NC", x: 4, y: 0 },
    { id: "AR", x: 4, y: 1 },
    { id: "CT", x: 5, y: 1 },
    { id: "CL", x: 2, y: 1 },
    { id: "CM", x: 3, y: 2 },
    { id: "MD", x: 2, y: 2 },
    { id: "EX", x: 1, y: 2 },
    { id: "VC", x: 4, y: 2 },
    { id: "MC", x: 3, y: 3 },
    { id: "AN", x: 2, y: 3 },
    { id: "IB", x: 5, y: 3 },
    { id: "CN", x: 0, y: 4 },
    { id: "CE", x: 2, y: 4 },
    { id: "ML", x: 3, y: 4 }
  ]

export function tilemap(ampi, year, ccaaIdDict, dimList, dimColors, __width) {
    // Use d3.max to find the maximum x and y
    const maxX = d3.max(coords, (c) => c.x) + 1;
    const maxY = d3.max(coords, (c) => c.y) + 1;

    console.log(maxX,maxY,dimColors,dimList)

  
    const width = __width;
  
    // Calculate the size of each cell based on the total width
    const cellWidth = width / maxX;
  
    return html`<div class="grid-container" style="
      display: grid;
      width: ${width}px;
      grid-template-columns: repeat(${maxX}, ${cellWidth}px); 
      grid-template-rows: repeat(${maxY}, ${cellWidth}px);">
        ${coords.map(
            (coord) =>
                html`<div class="grid-item" style="
                width: ${cellWidth}px;
                height: ${cellWidth}px;
                grid-column: ${coord.x + 1}; 
                grid-row: ${coord.y + 1};
                display: flex;
                justify-content: center;
                align-items: center;">
                ${flowerChart(
                    ampi.filter(
                    (d) => d.year === year && d.ccaa === ccaaIdDict[coord.id]
                    ),
                    "ccaa",
                    "val",
                    { range: dimList, domain: dimColors },
                        "dim",
                    cellWidth / 2,
                    ccaaIdDict[coord.id]
                )}
                </div>`
        )}
    </div>`;
  }

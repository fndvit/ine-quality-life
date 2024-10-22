import * as Plot from "npm:@observablehq/plot";
import {resize} from "npm:@observablehq/stdlib";



export function slopeChart(data, height) {
  const getCCAADiff = (ccaa) => {
    const ini = data.find(
      (p) => p.ccaa == ccaa && p.stage == "initial"
    );
    const end = data.find((p) => p.ccaa == ccaa && p.stage == "final");

    return ini.position - end.position;
  };

  return resize((width) =>
    Plot.plot({
      width: width,
      height: height,
      marginLeft: 0,
      marginRight: 10,
      marginBottom: 40,
      marginTop: 40,
      x: {
        axis: null,
        domain: ["initial", "final"],
        type: "ordinal",
        inset: 6,
        label: null
      },
      y: {
        axis: null,
        inset: 20,
        reverse: true
      },
      marks: [
        Plot.line(data, {
          x: "stage",
          y: "position",
          z: "ccaa",
          stroke: "#c7c1bf",
          strokeWidth: (d) => {
            return Math.abs(getCCAADiff(d.ccaa) / 2) + 2;
          },
          strokeOpacity: 0.5
        }),
        Plot.dot(data, {
          x: "stage",
          y: "position",
          z: "ccaa",
          r: 4,
          fill: "#c7c1bf"
        })
      ]
    })
  )
}

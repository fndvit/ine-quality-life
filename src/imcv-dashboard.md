---
title: Panel del Índice de Calidad de Vida
toc: false
style: ../dashboard.css
---

```js
import {flowerChart} from "./components/flowerChart.js";
import {lineChart} from "./components/lineChart.js";
import {filterLegend} from "./components/filterLegend.js";
```

```js
const imcv = FileAttachment("data/imcv.json").json();
```

```js
const dimColors = ["#a87c9f","#e49243","#6ba059","#84b5b2","#c67794","#5877a3","#eccf73","#9bcf85","#f1c2d2"];
const dimList = [...new Set(imcv.map((d) => d.dim))].filter((dim) => dim.startsWith("dim"));
const dimDict = ({
  dim1: "Condiciones materiales de vida",
  dim2: "Trabajo",
  dim3: "Salud",
  dim4: "Educación",
  dim5: "Ocio y relaciones sociales",
  dim6: "Seguridad física y personal",
  dim7: "Gobernanza y derechos básicos",
  dim8: "Entorno y medioambiente",
  dim9: "Experiencia general de la vida"
});

const ccaaList = ["Total","Andalucía","Aragón","Asturias, Principado de","Balears, Illes","Canarias","Cantabria","Castilla y León","Castilla - La Mancha","Cataluña","Comunitat Valenciana","Extremadura","Galicia","Madrid, Comunidad de","Murcia, Región de","Navarra, Comunidad Foral de","País Vasco","Rioja, La","Ceuta","Melilla"];
const ccaaColors = [
  "#594e58", "#3b5fc0", "#ffd754", "#c7c1bf", "#a160af", 
  "#ff9c38", "#5ca34b", "#f794b9", "#61b0ff", "#ed393f", 
  "#382f46", "#ae24ba", "#4d0a95", "#8cc8b9", "#c80175",
  "#8d8f89", "#17c124", "#0175b2", "#a67d20", "#831d2b"
];
const ccaaIdDict = {"ES":"Total","AN":"Andalucía","AR":"Aragón","AS":"Asturias, Principado de","IB":"Balears, Illes","CN":"Canarias","CB":"Cantabria","CL":"Castilla y León","CM":"Castilla - La Mancha","CT":"Cataluña","VC":"Comunitat Valenciana","EX":"Extremadura","GA":"Galicia","MD":"Madrid, Comunidad de","MC":"Murcia, Región de","NC":"Navarra, Comunidad Foral de","PV":"País Vasco","RI":"Rioja, La","CE":"Ceuta","ML":"Melilla"};

const lineRange = d3.extent(imcv, d => d.val);

const yearInput = Inputs.range(d3.extent(imcv.map((d) => d.year)), {
    label: "Selecciona el año",
    step: 1,
    value: 2022
  });

const year = Generators.input(yearInput);

const ccaaInput = filterLegend(ccaaList.filter(d => d !== "Total"), ccaaColors.filter(d =>  d !== "#594e58"))
const ccaa = Generators.input(ccaaInput);

```

# TK TK Titular del Índice
## TK TK subtítulo

<div class="grid grid-charts">
  <h2 class="header">TK TK Flores lorem ipsum título</h2> 
  <div class="menu sticky"> ${yearInput} </div>
  
  <div class="card chart"> 
    ${flowerChart(
      imcv.filter((d) => d.year === year && d.ccaa === "Total"),
      "ccaa",
      "val",
      { range: dimList, domain: dimColors },
      "dim",
      width / 12
    )}
  </div>
  
  <div class="card map"> Tile map </div>
</div>

<div class="grid grid-charts">
  <h2 class="header">TK TK Tendencias lorem ipsum título</h2>
  <div class="sticky menu menu-tendencias">
    ${ccaaInput}
    <p class="notes">Para asegurar la legibilidad de las gráficas, el filtro sólo te permite comparar hasta seis CC.AA. a la vez.</p>
  </div>

  <div class="card chart">
     <h3>Evolución del índice</h3>
      ${lineChart(imcv, ccaa, "index", width, 240, "year", "val", {domain: ccaaList, range: ccaaColors}, lineRange, "ccaa")}
  </div>

  <div class="map">
    ${
      dimList.map(d => html`
      <div class="card">
        <h3>${dimDict[d]}</h3>
        ${lineChart(imcv, ccaa, d, width, 240, "year", "val", {domain: ccaaList, range: ccaaColors}, lineRange, "ccaa")}
      </div>
      `)
    }
  </div>

</div>

<div class="grid grid-cols-4">
  <h2 class="grid-colspan-4">TK TK Interactivo lorem ipsum título</h2>
  <div class="sticky grid-colspan-1">Sliders</div>
  <div class="card grid-colspan-3"></div>
</div>

<p class="notes">TK TK Justificación y links a los originales</p>

<style>
  .grid-charts {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 1fr;
    grid-template-areas: 
      "header header header chart"
      "menu map map map";
    gap: 8px;
  }

  .header {
    grid-area: header;
  }

  .menu {
    grid-area: menu;
    background: #f2f2f2; 
    padding: 10px;
  }

  .menu-tendencias {
    overflow-y: auto;
    z-index: 10;
  }

  .chart {
    grid-area: chart;
  }

  .map {
    grid-area: map;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 8px; 
  }

  @media (max-width: 1024px) {
    .grid-charts {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto 1fr;
      grid-template-areas: 
        "header header"
        "menu chart"
        "map map";
    }
    .menu-tendencias {
      height: 300px;
    }
  }
  
  @media (max-width: 640px) {
    .grid-charts {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto 1fr;
      grid-template-areas: 
        "header"
        "menu"
        "chart"
        "map";
    }
    .menu-tendencias {
      height: 200px;
    }
    .map {
      grid-template-columns: 1fr !important;
    }
    .header, .menu, .chart, .map {
      width: auto; 
    }
  }
</style>

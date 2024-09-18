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
const ampi = FileAttachment("data/ampi.json").json();
```

```js
const dimColors = ["#a87c9f","#e49243","#6ba059","#84b5b2","#c67794","#5877a3","#eccf73","#9bcf85","#f1c2d2"];
const dimList = [...new Set(ampi.map((d) => d.dim))];
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
const ccaaColors = ["#909090","#f28e2b","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab","#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"];
const ccaaIdDict = {"ES":"Total","AN":"Andalucía","AR":"Aragón","AS":"Asturias, Principado de","IB":"Balears, Illes","CN":"Canarias","CB":"Cantabria","CL":"Castilla y León","CM":"Castilla - La Mancha","CT":"Cataluña","VC":"Comunitat Valenciana","EX":"Extremadura","GA":"Galicia","MD":"Madrid, Comunidad de","MC":"Murcia, Región de","NC":"Navarra, Comunidad Foral de","PV":"País Vasco","RI":"Rioja, La","CE":"Ceuta","ML":"Melilla"};

const lineRange = d3.extent(ampi, d => d.val);

const yearInput = Inputs.range(d3.extent(ampi.map((d) => d.year)), {
    label: "Selecciona el año",
    step: 1,
    value: 2022
  });

const year = Generators.input(yearInput);

const ccaaInput = filterLegend(ccaaList.filter(d => d !== "Total"), ccaaColors.filter(d =>  d !== "#909090"))
const ccaa = Generators.input(ccaaInput);

```

# TK TK Titular del Índice
## TK TK subtítulo

<div class="grid grid-cols-4">
  <h2 class="grid-colspan-3">TK TK Flores lorem ipsum título</h2>
  <div class="card grid-colspan-1">
  
  ${
    flowerChart(
      ampi.filter((d) => d.year === year && d.ccaa === "Total"),
      "ccaa",
      "val",
      { range: dimList, domain: dimColors },
      "dim",
      width / 12
    )
  }
  
  </div>
  <div class="sticky grid-colspan-1">
  
  ${yearInput}
  
  </div>
  <div class="card grid-colspan-3">Tile map</div>
</div>

<div class="grid grid-cols-4">
  <h2 class="grid-colspan-3">TK TK Tendencias lorem ipsum título</h2>
  <div class="card grid-colspan-1">Total del índice</div>
  <div class="sticky grid-colspan-1 grid-rowspan-3">
    ${ccaaInput}
  </div>
  ${
    dimList.map(d => html`
    <div class="card">
      <h3>${dimDict[d]}</h3>
      ${lineChart(ampi, ccaa, d, width, 240, "year", "val", {domain: ccaaList, range: ccaaColors}, lineRange, "ccaa")}
    </div>
    `)
  }
</div>

<div class="grid grid-cols-4">
  <h2 class="grid-colspan-4">TK TK Interactivo lorem ipsum título</h2>
  <div class="sticky grid-colspan-1">Sliders</div>
  <div class="card grid-colspan-3"></div>
</div>

<p class="notes">TK TK Justificación y links a los originales</p>

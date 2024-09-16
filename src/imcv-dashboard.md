---
title: Panel del Índice de Calidad de Vida
toc: false
style: ../dashboard.css
---

```js
import {flowerChart} from "./components/flowerChart.js";
```

```js
const ampi = FileAttachment("data/ampi.json").json();
```

```js
const dimColors = ["#a87c9f","#e49243","#6ba059","#84b5b2","#c67794","#5877a3","#eccf73","#9bcf85","#f1c2d2"];
const dimList = [...new Set(ampi.map((d) => d.dim))];
```

# TK TK Titular del Índice
## TK TK subtítulo

<div class="grid grid-cols-4">
  <h2 class="grid-colspan-3">TK TK Flores lorem ipsum título</h2>
  <div class="card grid-colspan-1">
  
  ${
    flowerChart(
      ampi.filter((d) => d.year === 2021 && d.ccaa === "Total"),
      "ccaa",
      "val",
      { range: dimList, domain: dimColors },
      "dim",
      width / 12
    )
  }
  
  </div>
  <div class="sticky grid-colspan-1">Slider y leyenda interactiva</div>
  <div class="card grid-colspan-3">Tile map</div>
</div>

<div class="grid grid-cols-4">
  <h2 class="grid-colspan-3">TK TK Tendencias lorem ipsum título</h2>
  <div class="card grid-colspan-1">Total del índice</div>
  <div class="sticky grid-colspan-1 grid-rowspan-3">Leyenda interactiva</div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>

<div class="grid grid-cols-4">
  <h2 class="grid-colspan-4">TK TK Interactivo lorem ipsum título</h2>
  <div class="sticky grid-colspan-1">Sliders</div>
  <div class="card grid-colspan-3"></div>
</div>

<p class="notes">TK TK Justificación y links a los originales</p>

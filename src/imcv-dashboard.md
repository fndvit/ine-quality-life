---
title: Panel del Índice de Calidad de Vida
toc: false
style: ../dashboard.css
---

```js
import {data as imcv, ccaaList, ccaaColors, dimList, dimDict, yearTexts} from "./data/consts.js";
import {filterLegend} from "./components/filterLegend.js";
import {flowerChart} from "./components/flowerChart.js";
import {lineChart} from "./components/lineChart.js";
import {tilemap} from "./components/tileMap.js";

//if not here not working
const data = await FileAttachment("data/imcv.json").json();
const dataDetail = await FileAttachment("data/imcv-detail.json").json();

const yearInput = Inputs.range(d3.extent(imcv.map((d) => d.year)), {
    label: "Selecciona el año",
    step: 1,
    value: 2022
  });
const year = Generators.input(yearInput);

const ccaaInput = filterLegend(ccaaList.filter(d => d !== "Total"), ccaaColors.filter(d =>  d !== "#797974"))
const ccaa = Generators.input(ccaaInput);
```

# La calidad de vida en España

<div class="grid grid-charts">
  <div class="header">
    <h2>¿Cuáles son las comunidades autónomas con mejor calidad de vida?</h2>
    <p>${yearTexts[year]} A continuación puedes explorar los valores de las dimensiones para cada comunidad autónoma para el año seleccionado.</p>
  </div>
  <div class="menu sticky"> ${yearInput} </div>
  
  <div class="card center chart"> 
    ${
      flowerChart(
        imcv,
        "Total",
        year,
        "val", 
        "dim",
        width > 600 ? width / 12 : width / 6)
      }
  </div>
  
  ${yearInput}
  
  </div>
  <div class="card center" style="overflow-x: auto;">
      ${
        tilemap(imcv, year, width > 1200 ? width*.65 : width )
      }
  </div>
</div>

<div class="grid grid-charts">
  <div class="header">
    <h2>¿Cómo han evolucionado las dimensiones del índice?</h2>
    <p>En estos gráficos puedes explorar la tendencia de cada comunidad autónoma y cada dimensión. La única dimensión que crece de manera relativamente consistente es Educación. Las más cambiantes son Trabajo —especialmente en momentos de crisis, Salud —muy variable de año en año, y Condiciones materiales de vida, Seguridad física y personal y Entorno y medioambiente con variaciones significativas entre años y entre comunidades autónomas. En contraste, Gobernanza y derechos básicos, Ocio y relaciones sociales< y Experiencia general de la vida se mantienen con fluctuaciones mínimas.</p>
  </div>
  
  <div class="sticky menu menu-tendencias">
    ${ccaaInput}
    <p class="notes">Para asegurar la legibilidad de las gráficas, el filtro sólo te permite comparar hasta seis CC.AA. a la vez.</p>
  </div>

  <div class="card chart">
     <h3>Evolución del índice</h3>
      ${lineChart(imcv, ccaa, "index", width, 240, "year", "val", "ccaa")}
  </div>

  <div class="map">
    ${
      dimList.map(d => html`
      <div class="card">
        <h3>${dimDict[d]}</h3>
        ${lineChart(imcv, ccaa, d, width, 240, "year", "val", "ccaa")}
      </div>
      `)
    }
  </div>

</div>

<div class="grid grid-cols-4">
  <h2 class="grid-colspan-4">TK TK Customize the index</h2>
  <div class="sticky grid-colspan-1">TK TK Sliders</div>
  <div class="card grid-colspan-3"></div>
</div>

<p class="notes">Este panel de datos reimagina la visualización del <a href="https://www.ine.es/experimental/imcv/experimental_ind_multi_calidad_vida.htm" target="_blank">Indicador Multidimensional de Calidad de Vida en España</a>, una estadística experimental del Instituto Nacional de Estadística, a partir de los datos abiertos disponibles en el INE.</p>

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

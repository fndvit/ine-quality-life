---
title: Los datos, en bruto
toc: true
---

```js
import {data as imcv, ccaaList, ccaaColors, ccaaNameDict, dimList, dimDict, yearTexts} from "./data/consts.js";

const data = await FileAttachment("data/imcv.json").json();

const selectDate = Inputs.select(d3.range(2008, 2023), {multiple: 4, value: d3.range(2008, 2023), label: "Selecciona los años", format: d=> d.toFixed(0)});
const selectCCAA = Inputs.select(ccaaList, {multiple: 4, value:ccaaList, label: "Selecciona las comunidades autónomas", format: d=> ccaaNameDict[d]});
const selectDim = Inputs.select([...dimList, "index"], {multiple: 4, value:[...dimList, "index"], label: "Selecciona las dimensiones", format: d=> dimDict[d]});

function set(input, value) {
  input.value = value;
  input.dispatchEvent(new Event("input", {bubbles: true}));
}

const resetFiltersButton = Inputs.button("Limipar filtros", 
  { 
    value: null, 
    reduce: (value) => {
      set(selectDate, d3.range(2008, 2023));
      set(selectCCAA, ccaaList);             
      set(selectDim, [...dimList, "index"]); 
    } 
  }
);

const filterInput = Inputs.form({
  date: selectDate,
  ccaa: selectCCAA,
  dim: selectDim,
}); 

const filter = Generators.input(filterInput)
```

```js
const dataView = imcv
  .filter(d=> 
    filter.date.includes(d.year)
    && filter.ccaa.includes(d.ccaa)
    && filter.dim.includes(d.dim)
  )
  .map((d) => ({
    fecha: d.year.toFixed(0),
    ccaa: ccaaNameDict[d.ccaa],
    dim: dimDict[d.dim],
    val: d.val
  }))

const table = Inputs.table(
  dataView,{
    maxWidth: 1200,
    select: false
  }
);
```

```js
const downloadJSON = (data) => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "datos-imcv.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}

const downloadBtnJSON = Inputs.button("Descarga JSON", {
  reduce: () => downloadJSON(dataView)});

const downloadOriginal = Inputs.button("Descarga los datos originales", {reduce: () => window.location.href = "https://www.ine.es/experimental/imcv/datos_calidad_vida_multi.xlsx", })

```

# Descarga los datos

En esta sección puedes **filtrar los datos** que visualizamos en el [panel](imcv-dashboard) por si quieres trabajar con ellos de manera independiente. Por defecto, todos los años, comunidades autónomas y dimensiones están seleccionadas.

${filterInput}
${resetFiltersButton}

Estos son **los datos que has seleccionado**. La estructura de la tabla es [*apilada*](https://en.wikipedia.org/wiki/Wide_and_narrow_data), ciertamente menos legible para los humanos, pero más práctica para trabajar programáticamente.

<div class="grid">
${table}
</div>

${downloadBtnJSON}

---

También puedes descargar todos los datos —incluso las estadísticas que componen cada dimensión— tal y como los proporciona el INE.

${downloadOriginal}

<style>
  form {
    margin-bottom: .5rem!important;
  }
</style>
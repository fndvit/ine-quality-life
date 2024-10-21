---
style: ../dashboard.css
---

```js
import {data as imcv, dataDetail as imcvDetail, ccaaIdDict, ccaaNameDict, dimDict, dimList, dimColors, dimDetailDict, darkerDimColors} from "../data/consts.js";
import {lineChart} from "../components/lineChart.js";
import {sparkbar} from "../components/sparkbar.js";
import {flowerChart} from "../components/flowerChart.js";

const data = await FileAttachment("../data/imcv.json").json();
const dataDetail = await FileAttachment("../data/imcv-detail.json").json();

const ccaa = ccaaIdDict[observable.params.ccaa.toUpperCase()];
const ccaaName = ccaaNameDict[ccaa]
const dataCCAA = data.filter(d=> d.ccaa === ccaa);
const dataDetailCCAA = dataDetail.filter(d=> d.ccaa === ccaa);

const filterSub = (dim) => Object.entries(dimDetailDict).filter(([key, value]) => key.startsWith(dim)).map(([key, value]) => key);
const filterValue = (subdim) => dataDetailCCAA.find(d => d.subdim === subdim);

const color = d3.scaleOrdinal(dimList, dimColors)
const stroke = d3.scaleOrdinal(dimList, darkerDimColors)

const line = (dim) => html`<div class="card">
    ${lineChart(imcv, ccaa, dim, width, 240, "year", "val", "dim", "page")}
    </div>
`

const smallCharts = (dim) => html`<div class="grid grid-cols-4">${
        filterSub(dim).map(d => html`<div class="grid card grid-colspan-1 grid-cols-2 small-charts">
          <h3 class="grid-colspan-2">${dimDetailDict[d]}</h3>
          <div class="grid-colspan-1 big-number">
            <h4 class="main-number" style="-webkit-text-stroke-width: .5px;
  -webkit-text-stroke-color: ${stroke(dim)}; color: ${color(dim)}">${filterValue(d).value}<span class="unit">${filterValue(d).unit}</span></h4>
          </div>
          <div class="grid-colspan-1 big-number">${sparkbar(dataDetail, ccaa, d)}</div>
        </div>`)
      }</div>`

const formatList = (list) => {
  if (list.length === 1) return list[0]; // Single element case
  if (list.length === 2) return `${list[0]} y ${list[1]}`; // Two elements case
  // More than 2 elements: comma-separated with 'y' before the last element
  return `${list.slice(0, -1).join(', ')} y ${list[list.length - 1]}`;
};

const compare = (ccaa, year) => {
  // Filter data for the selected year and previous year
  const currentYearData = data.filter((d) => d.year === year);
  const previousYearData = data.filter((d) => d.year === year - 1);

  // Get current and previous data for the selected region and national average
  const regionCurrent = currentYearData.filter((d) => d.ccaa === ccaa);
  const regionPrevious = previousYearData.filter((d) => d.ccaa === ccaa);
  const totalCurrent = currentYearData.find((d) => d.ccaa === "Total" && d.dim === "index");

  if (!regionCurrent.length || !totalCurrent || !regionPrevious.length) {
    return `No data available for ${ccaa} in ${year}.`;
  }

  // Calculate the difference with the national average for the index
  const indexCurrent = regionCurrent.find((d) => d.dim === "index");
  const indexPrevious = regionPrevious.find((d) => d.dim === "index");

  const difference = indexCurrent.val - totalCurrent.val;
  const comparative = difference > 0
    ? `superando la media nacional de ${totalCurrent.val.toFixed(2)}`
    : `por debajo de la media nacional de ${totalCurrent.val.toFixed(2)}`;

  // Sort the regions by index to check top/bottom 3 status
  const sortedRegions = currentYearData.filter((d) => d.dim === "index" && d.ccaa !== "Total").sort((a, b) => b.val - a.val);
  const topRegions = sortedRegions.slice(0, 3).map((d) => ccaaNameDict[d.ccaa]);
  const bottomRegions = sortedRegions.slice(-3).map((d) => ccaaNameDict[d.ccaa]);

  let position = '';
  if (topRegions.includes(ccaaName)) {
    const otherTopRegions = topRegions.filter(r => r !== ccaaName);
    position = otherTopRegions.length
      ? html`<strong>entre las autonomías que encabezan la tabla</strong> con ${formatList(otherTopRegions)}`
      : html`<strong>en cabeza en el ranking de autonomías</strong>`;
  } else if (bottomRegions.includes(ccaaName)) {
    const otherBottomRegions = bottomRegions.filter(r => r !== ccaaName);
    position = otherBottomRegions.length
      ? html`<strong>entre las autonomías más rezagadas</strong>, junto con ${formatList(otherBottomRegions)}`
      : html`<strong>a la cola en el ranking de autonomías</strong>`;
  } else {
    const rank = sortedRegions.findIndex(d => d.ccaa === ccaa) + 1;
    position = html`en la posición <strong>${rank} de las ${sortedRegions.length} autonomías</strong>`;
  }

  // Calculate the largest changes for each dimension (excluding "index")
  const changes = regionCurrent
    .filter((d) => d.dim !== "index") // Exclude "index"
    .map((current) => {
      const previous = regionPrevious.find((prev) => prev.dim === current.dim);
      const change = previous ? current.val - previous.val : 0;
      return { dim: current.dim, change };
    });

  // Find the dimensions with the largest positive and negative changes
  const mostImproved = changes.sort((a, b) => b.change - a.change)[0];
  const mostDeclined = changes.sort((a, b) => a.change - b.change)[0];

  // Find dimensions where the region leads or lags compared to national average, excluding "index"
  const leads = regionCurrent.filter((current) => {
    if (current.dim === "index") return false; // Exclude "index"
    const total = currentYearData.find((d) => d.ccaa === "Total" && d.dim === current.dim);
    return total && current.val > total.val;
  });

  const lags = regionCurrent.filter((current) => {
    if (current.dim === "index") return false; // Exclude "index"
    const total = currentYearData.find((d) => d.ccaa === "Total" && d.dim === current.dim);
    return total && current.val < total.val;
  });

  // Prepare sentences for leading and lagging dimensions, filtering out undefined values
  let leadSentence = '';
  let lagSentence = '';

  if (leads.length) {
    const leadDims = leads
      .map((d) => dimDict[d.dim])
      .filter(Boolean); // Filter out any undefined dimensions
    if (leadDims.length) {
      leadSentence = html`Las dimensiones en las que ${ccaaNameDict[ccaa]} obtiene mejores resultados son: <strong>${formatList(leadDims).toLowerCase()}</strong>.`;
    }
  }

  if (lags.length) {
    const lagDims = lags
      .map((d) => dimDict[d.dim])
      .filter(Boolean); // Filter out any undefined dimensions
    if (lagDims.length) {
      lagSentence = html`Queda rezagada, sin embargo, en <strong>${formatList(lagDims).toLowerCase()}</strong>.`;
    }
  }

  // Construct the final sentence
  return html`En ${year}, la calidad de vida en ${ccaaNameDict[ccaa]} ${indexCurrent.val > indexPrevious.val ? 'mejoró' : 'empeoró'} respecto a ${year - 1}, con un índice de <strong>${indexCurrent.val.toFixed(2)}, ${comparative}</strong>. ${ccaaNameDict[ccaa]} se encuentra ${position}.<br/><br/>${leadSentence} ${lagSentence} La mayor mejora la experimentó en <strong>${dimDict[mostImproved.dim].toLowerCase()}</strong>. Mientras que la mayor caída respecto al año anterior fue en <strong>${dimDict[mostDeclined.dim].toLowerCase()}</strong>.`;
};

```

# La calidad de vida en ${ccaaName}

<div class="grid grid-cols-3">
<p class="grid-colspan-2">${compare(ccaa, 2022)}</p>
<div class="card grid-colspan-1">${
      flowerChart(
        data,
        ccaa,
        2022,
        "val", 
        "dim",
        width > 600 ? width / 7 : width / 3.5)
      }</div>
</div>

<div class="grid grid-cols-3">

  <div class="grid-colspan-2">

  ## Condiciones materiales de vida
  Las condiciones materiales de vida representan un aspecto clave para el bienestar general, ya que determinan el acceso a recursos básicos como la vivienda, la alimentación y otros bienes necesarios para una vida digna. El nivel de renta, la capacidad de cubrir necesidades económicas, y la situación habitacional son factores determinantes en esta dimensión, afectando tanto la estabilidad económica como la percepción subjetiva de calidad de vida.

  </div>
  <div class="grid-colspan-1">${line("dim1")}</div>

</div>
${smallCharts("dim1")}

<div class="grid grid-cols-3">

  <div class="grid-colspan-2">

  ## Trabajo
  El trabajo es uno de los pilares más importantes para la integración social y el bienestar personal, ya que proporciona no solo un medio de sustento, sino también la posibilidad de desarrollar habilidades y aspiraciones. La calidad del empleo, la estabilidad laboral y la satisfacción con el trabajo son componentes que inciden directamente en la calidad de vida.

  </div>
  <div class="grid-colspan-1">${line("dim2")}</div>

</div>
${smallCharts("dim2")}

<div class="grid grid-cols-3">

  <div class="grid-colspan-2">

  ## Salud
  La salud es un factor esencial para el bienestar, ya que determina la capacidad de las personas para disfrutar de una vida plena y activa. Más allá de los indicadores de esperanza de vida, la percepción subjetiva de salud, la presencia de enfermedades crónicas y el acceso a cuidados médicos también son relevantes para evaluar la calidad de vida.

  </div>
  <div class="grid-colspan-1">${line("dim3")}</div>

</div>
${smallCharts("dim3")}

<div class="grid grid-cols-3">

  <div class="grid-colspan-2">

  ## Educación
  La educación es un elemento clave para el desarrollo personal y social, ya que proporciona las competencias necesarias para acceder a mejores oportunidades laborales y participar activamente en la sociedad. Además, la formación continua y la disminución del abandono escolar son factores que influyen en el progreso de los individuos y las comunidades.

  </div>
  <div class="grid-colspan-1">${line("dim4")}</div>

</div>
${smallCharts("dim4")}

<div class="grid grid-cols-3">

  <div class="grid-colspan-2">

  ## Ocio y relaciones sociales
  El tiempo libre y las relaciones sociales juegan un papel fundamental en la calidad de vida, ya que permiten a las personas desconectar de las responsabilidades diarias, fomentar sus aficiones y fortalecer sus lazos personales. La satisfacción con el tiempo libre disponible y las actividades sociales son indicadores importantes para evaluar el bienestar emocional.

  </div>
  <div class="grid-colspan-1">${line("dim5")}</div>

</div>
${smallCharts("dim5")}

<div class="grid grid-cols-3">

  <div class="grid-colspan-2">

  ## Seguridad física y personal
  La seguridad es un elemento crucial para el bienestar, ya que influye en la tranquilidad y la percepción de riesgo en el entorno. La tasa de criminalidad, la percepción de seguridad y la exposición a actos delictivos son indicadores clave para evaluar la calidad de vida en términos de seguridad física y personal.

  </div>
  <div class="grid-colspan-1">${line("dim6")}</div>

</div>
${smallCharts("dim6")}

<div class="grid grid-cols-3">

  <div class="grid-colspan-2">

  ## Gobernanza y derechos básicos
  La confianza en las instituciones y la participación en el sistema político son aspectos importantes de la gobernanza. Un buen funcionamiento del sistema judicial, la protección de los derechos básicos y una participación activa de los ciudadanos son clave para una sociedad justa y cohesionada.

  </div>
  <div class="grid-colspan-1">${line("dim7")}</div>

</div>
${smallCharts("dim7")}

<div class="grid grid-cols-3">

  <div class="grid-colspan-2">

  ## Entorno y medioambiente
  La calidad del entorno donde viven las personas tiene un impacto directo en su salud y bienestar. La contaminación, los problemas ambientales y la satisfacción con las zonas verdes y recreativas son indicadores que ayudan a entender cómo el entorno afecta a la calidad de vida de la población.

  </div>
  <div class="grid-colspan-1">${line("dim8")}</div>

</div>
${smallCharts("dim8")}

<div class="grid grid-cols-3">

  <div class="grid-colspan-2">

  ## Experiencia general de la vida
  La experiencia global de la vida, incluyendo la satisfacción con la vida en general, los sentimientos positivos y la percepción de sentido y propósito, son factores que contribuyen de manera significativa al bienestar subjetivo de las personas. Estos indicadores ayudan a medir el grado en que las personas se sienten realizadas y felices con su vida.

  </div>
  <div class="grid-colspan-1">${line("dim9")}</div>

</div>
${smallCharts("dim9")}

<style>
  h3 {
    font-size: 0.9rem!important;
    font-weight: normal!important;
    color: var(--theme-foreground)!important;
    height: 2.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .no-bg {
    background: none;
    border: none;
    padding: .7rem 0;
    margin: 0;
    border-radius: 0;
    border-bottom: 1px solid var(--theme-background-faint);
    align-items: baseline;
  }
  .main-number {
    font-size: 1.5rem!important;
    max-height: 2rem!important;
    margin-top: .5rem;
  }
  .card {
    padding: 1rem !important;
    margin-bottom: 0!important;
  }
  .small-charts {
    max-height: 6rem;
  }
  .unit {
    font-size: .9rem;
    padding-left: .1rem;
  }

  @media(max-width: 768px) {
    .small-charts {
      max-height: 12rem;
    }
  }
</style>
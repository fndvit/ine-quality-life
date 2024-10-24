---
title: Making-of y otros enredos
toc: true
style: dashboard.css
---

```js
import {data as imcv, ccaaList} from "./data/consts.js";
import {flowerChart} from "./components/flowerChart.js";
import {lineChart} from "./components/lineChart.js";
import {tilemap} from "./components/tileMap.js";

//if not here not working
const data = await FileAttachment("data/imcv.json").json();
const detailData = await FileAttachment("data/imcv-detail.json").json();
```

# Cómo (y por qué) rehicimos el indicador del INE
Como viene siendo habitual cuando reimaginamos [otras aplicaciones de datos públicos abiertos](https://sequera.fndvit.org/), el objetivo de este esfuerzo es **celebrar los datos abiertos**. Ya es emocionante que los datos existan, pero cuando se acompañan de una visualización que nos ayuda a comprenderlos y explorarlos, ¡es aún más emocionante! Y, como siempre, hemos respetado el diseño original al tiempo que intentamos mejorar la claridad y la usabilidad del mismo.

Y al igual que con nuestra iniciativa **[Catalunya en Dades](https://catalunya-en-dades.fndvit.org/)**, utilizamos [Observable, un generador de sitios estáticos gratuito y de código abierto](https://github.com/observablehq/framework) para aplicaciones de datos, en lugar de productos de software comerciales como _Tableau_ (la herramienta utilizada por el INE en este caso) o _Power BI_ (la herramienta utilizada por la administración catalana).

<div class="figure-container">
  <figure>
    <img src="img/mqli_preview.png" alt="Captura de pantalla del IMCV original" />
    <figcaption>Página del MQLI (IMCV en español), un indicador experimental sobre la calidad de vida, desarrollado por el Instituto    Nacional de Estadística (INE).</figcaption>
  </figure>
</div>

Permitidnos insistir: **nosotros no hemos desarrollado este indicador, es del INE**. Sólo hemos reimaginado aspectos de su presentación visual y las tecnologías utilizadas en su diseminación. Para más información:
- Aquí podrás encontrar más [**sobre el proyecto**](https://www.ine.es/ss/Satellite?L=es_ES&c=INEPublicacion_C&cid=1259947308577&p=1254735110672&pagename=ProductosYServicios%2FPYSLayout&param1=PYSDetalleGratuitas) y lo que se calcula en cada dimensión del indicador.
- Muy útil también, el [**informe metodológico estandarizado**](https://www.ine.es/dynt3/metadatos/es/RespuestaDatos.htm?oe=30471).
- Y el [**panel de datos original**](https://www.ine.es/experimental/imcv/experimental_ind_multi_calidad_vida.htm).

Otros trabajos nuestros, como el *Índice de Vulnerabilidad Social* (en desarrollo), sí que son proyectos de análisis estadístico de la sociedad  propios de la Fundació ViT. Pero este no es el caso.

---
## **Nos chiflan** las flores
La **visualización principal del panel de datos del INE** es un puñado de **flores multicolores**, una para cada comunidad autónoma. En cada flor, cada pétalo representa una de las nueve dimensiones del índice y la longitud —y grosor— de cada pétalo representa el valor de esa dimensión en la región.

Está basado en una visualización de 2013 del [Índice de Mejor Vida de la OCDE](https://www.oecdbetterlifeindex.org/), realizada por [Moritz Stefaner en colaboración con Raureif y Dominikus Baur](https://truth-and-beauty.net/projects/oecd-better-life-index). (El concepto del índice en sí está igualmente inspirado en el [índice de la OCDE y otros proyectos similares](https://ine.es/experimental/imcv/exp_calidad_vida_multi.pdf)).

<div class="figure-container">
  <figure>
    <img src="img/oecd.png" alt="Captura de pantalla de la visualización de las flores utilizada en el Better Life Index de la OECD" />
    <figcaption>Visualización del Índice para una Vida Mejor de la OCDE (2013).</figcaption>
  </figure>
</div>

<div class="figure-container">
  <figure>
    <img src="img/imcv.png" alt="Captura de pantalla de la visualización de las flores utilizada en el IMCV original" />
    <figcaption>Visualización del IMCV del INE utilizando Tableau</figcaption>
  </figure>
</div>

No hemos _rediseñado_ la visualización de flor; solo la hemos limpiado, manteniendo la forma básica. Dado que estamos usando D3 en lugar de _Tableau_, lo que usó el INE originalmente, tenemos un control más preciso sobre la estética de las figuras.

<div class="figure-container">
  <figure>
    <div class="card center chart" style="margin: 0; max-width: 640px">
      ${
      flowerChart(
        imcv,
        "Galicia",
        2022,
        "val", 
        "dim",
        width > 600 ? width / 8 : width / 4)
      }
    </div>
    <figcaption>Nuestra propuesta de visualización.</figcaption>
  </figure>
</div>

---
## La estructura
El **producto original del INE** tiene dos partes: 
- el panel donde se muestran los datos por dimensiones y comunidades autónomas en forma de flores y su evolución temporal;
- y otro panel donde puedes modificar cúanto influye de cada dimensión en el índice y así personalizar el indicador.

<div class="figure-container" style="max-width:640px">
  <figure>
    <img src="img/structure.png" alt="Esquema de la estructura de nuestro rediseño" />
    <figcaption>Esquema de la estructura de nuestro rediseño.</figcaption>
  </figure>
</div>

En **nuestra versión** hemos movido el segundo panel —en el que puedes manipular el peso de cada dimensión— a la parte inferior de la aplicación, para que puedas jugar con él en la misma página.

---
## También **nos chiflan** los mosaicos
Nuestra vista general es ligeramente diferente, con la parte superior dispuesta geográficamente en lugar de ordenada por valores como en el panel original. Bueno ... decir *geográficamente* es un poquito impreciso. En realidad lo que hemos diseñado es un mosaico, un dispositivo visual fascinante y una [obsesión nuestra](https://github.com/fndvit/barfi).

Este de aquí abajo es uno de la docena de mosaicos que diseñamos para el [*Air Pollution Note*](https://www.unep.org/interactives/air-pollution-note/) y el *Climate Action Note* durante nuestra colaboración con el Programa de las Naciones Unidas para el Medio Ambiente.

<div class="figure-container">
  <figure>
    <img src="img/mosaico.PNG" alt="Visualizacion mundial mosaico" />
    <figcaption>Mosaico que diseñamos para el Air Pollution Note del Programa de las Naciones Unidas para el Medio Ambiente (UNEP).</figcaption>
  </figure>
</div>

Para este mapa, creamos múltiples iteraciones del mosaico manualmente y de manera programática, y verificamos las fronteras en el mosaico con las fronteras geográficos reales. El mosaico de arriba es el más preciso, es decir, el que tenía más fronteras correctas. Cuatro no aparecen: Castilla y León con Galicia, Aragón y Navarra, y Castilla-La Mancha con Extremadura; y tiene 10 lindes que no existen en realidad.

<div class="figure-container" >
  <figure>
    <div class="card center chart" style="margin: 0" >
      ${
          tilemap(imcv, 2022, width > 600 ? 600 : width )
      }
    </div>
    <figcaption>Nuestra propuesta de mosaico.</figcaption>
  </figure>
</div>

---
## Las tendencias
Los gráficos de línea de la mitad inferior del panel se filtran con un menú que actúa como leyenda. Los gráficos muestran las tendencias de cada dimensión que compone el índice, y puedes comparar esa tendencia en tantas o tan pocas comunidades autónomas como quieras.

Ajustamos [el código de la leyenda interactiva de Toph Tucker](https://observablehq.com/@tophtucker/interactive-plot-legend) para limitar la cantidad de comunidades que puedes seleccionar y evitar así el **[efecto de suéter multicolor](https://www.westknits.com/products/rain-or-shine-sweater)**.

<div class="figure-container">
  <figure>
    <div class="card chart" style="max-width: 320px" >
        ${lineChart(imcv, ccaaList, "dim1", 320, 320, "year", "val", "ccaa")}
    </div>
    <figcaption>Visualización de tendencias que presenta el llamado efecto del suéter multicolor.</figcaption>
  </figure>
</div>

En cuanto a los colores de las comunidades, teníamos dos opciones: utilizar una escala categórica de 20 colores (una locura), o una escala de 6, el límite que marcamos para reducir el número de líneas activas. En este último caso, una comunidad, pongámosle Galicia, puede ser marrón, azul o violeta, dependiendo del orden en que fuese seleccionada. Ya que la consistencia era más importante para nosotros, **elegimos la locura**.

Otra opción hubiera sido un input de tipo `Select` y una `Plot.legend` separada que solo muestre las regiones seleccionadas, pero creemos que la opción anterior es más fácil de usar.

---
## Crea tu propio Indicador de Calidad de Vida
El INE creó también un segundo panel, que trasladamos a la parte inferior de nuestra aplicación de datos en lugar de mantenerlo separado. En él, como hemos explicado, puedes cambiar el peso de las diferentes dimensiones del índice, dando más o menos importancia a los diferentes aspectos.

La visualización original es un gráfico de barras con las barras que reaccionan a los cambios en los pesos, y puntos rojos como recordatorio visual del índice original.

<div class="figure-container">
  <figure>
    <img src="img/custom.png" alt="Interactivo original del INE para personalizar el indicador" />
    <figcaption>Interactivo original del INE para personalizar el indicador.</figcaption>
  </figure>
</div>

Esta es **la única visualización que hemos rediseñado**. En lugar de los gráficos de barras originales, hemos concebido un dispositivo visual más rico:
- Añadimos en pequeño los valores de cada dimensión,
- la diferencia entre el indicador personalizado y el original,
- un gráfico de pendiente con la clasificación original y la de tu personalización,
- y unas "gomas" para que veas cuánto tira cada dimensión del nuevo promedio, de tu indicador personalizado.

---
## La calidad de vida por autonomías
La otra diferencia grande con la presentación del INE, son las páginas por autonomías. Desde la [`v1.11.0`](https://github.com/observablehq/framework/releases/tag/v1.11.0), Observable Framework permite [rutas dinámicas](https://observablehq.com/framework/params) y `page loaders`. Es una de las últimas incorporaciones a nuestro _remake_ y es todavía un prototipo, inspirado en el [índice de la OCDE](https://www.oecdbetterlifeindex.org/countries/poland/). Como véis en el apartado de trabajo futuro, el plan es ampliarlo con más y mejor análisis de las variables estadísticas de detalle. 

---
## Trabajo futuro
Algunas cosas que nos gustaría considerar, por orden de prioridad:

- Añadir **más frases analíticas basadas en datos** (de las subdimensiones) a las páginas de cada comunidad autónoma.
- Probar visualizaciones de **tendencias** alternativas.
- Crear **diferentes formas para los pétalos** basadas en la diferencia positiva o negativa respecto a la media _a la_ [Film Flowers (de Shirley Wu)](https://shirleywu.studio/filmflowers/) para resaltar la diferencia entre flores.
- Mejorar la usabilidad y la **experiencia**.
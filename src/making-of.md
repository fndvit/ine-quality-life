---
title: Making-of y otros enredos
toc: true
---

# Cómo (y por qué) rehicimos el Indicador del INE
Como viene siendo habitual cuando reimaginamos otras aplicaciones de datos públicos abiertos, el objetivo de este esfuerzo es celebrar los datos abiertos. Ya es emocionante que los datos existan, pero cuando se acompañan de una visualización que nos ayude a comprenderlos y explorarlos, ¡es aún más emocionante! Y, como siempre, hemos respetado el diseño original al tiempo que intentamos mejorar la claridad y la usabilidad del mismo.

Y al igual que con nuestra iniciativa **[Catalunya en Dades](https://catalunya-en-dades.fndvit.org/)**, utilizamos [Observable, un generador de sitios estáticos gratuito y de código abierto](https://github.com/observablehq/framework) para aplicaciones de datos, en lugar de productos de software comerciales como _Tableau_ (la herramienta utilizada por el INE en este caso) o _Power BI_ (la herramienta utilizada por la administración catalana).

---
## **Nos chiflan** las flores
La visualización principal es un puñado de **flores multicolores**, una para cada comunidad autónoma. En cada flor, cada pétalo representa una de las nueve dimensiones del índice y la longitud —y grosor— de cada pétalo representa el valor de esa dimensión en la región.

Está basado en una visualización de 2013 del [Índice de Mejor Vida de la OCDE](https://www.oecdbetterlifeindex.org/), realizada por [Moritz Stefaner en colaboración con Raureif y Dominikus Baur](https://truth-and-beauty.net/projects/oecd-better-life-index). (El concepto del índice en sí está igualmente inspirado en el [índice de la OCDE y otros proyectos similares](https://ine.es/experimental/imcv/exp_calidad_vida_multi.pdf)).

No hemos _rediseñado_ la visualización de flor; solo la hemos limpiado, manteniendo los colores y la forma. Dado que estamos usando D3 en lugar de Tableau, lo que usó el INE originalmente, tenemos un control más preciso sobre la estética de las figuras.

---
## También **nos chiflan** los mosaicos
Hemos propuesto una visión general ligeramente diferente, con la parte superior dispuesta geográficamente en lugar de ordenada por valores como en el panel original. Hacemos eso porque hemos movido el segundo panel —en el que puedes manipular el peso de cada dimensión— a la parte inferior de la aplicación y ya puedes jugar con el orden allí.

Los mapas en mosaico son un dispositivo visual fascinante y una [obsesión nuestra](https://github.com/fndvit/barfi).

Para este mapa, creamos múltiples iteraciones del mosaico manualmente y de manera programática, y verificamos los límites en el mosaico con los límites geográficos reales. El mosaico de arriba es el más preciso, es decir, el que tenía más límites correctos. Cuatro no aparecen: Castilla y León con Galicia, Aragón y Navarra, y Castilla-La Mancha con Extremadura; y tiene 10 límites que no existen en realidad.

---
## Las tendencias
Los gráficos de línea de la mitad inferior del panel se filtran con un menú que actúa como leyenda. Los gráficos muestran las tendencias de cada dimensión que compone el índice, y puedes comparar esa tendencia en tantas o tan pocas comunidades autónomas como quieras.

Ajustamos [el código de la leyenda interactiva de Toph Tucker](https://observablehq.com/@tophtucker/interactive-plot-legend) para limitar la cantidad de comunidades que puedes seleccionar y evitar así el **[efecto de suéter multicolor](https://www.westknits.com/products/rain-or-shine-sweater)**.

En cuanto a los colores de las comunidades, teníamos dos opciones: o utilizar una escala categórica de 20 colores (una locura), o una escala de 6, el límite que marcamos para reducir el número de líneas activas. En este último caso, una comunidad, pongámosle Galicia, puede ser marrón, azul o violeta, dependiendo del orden en que fuese seleccionada. Ya que la consistencia era más importante para nosotros, **elegimos la locura**.

Otra opción sería un input de tipo `Select` y una `Plot.legend` separada que solo muestre las regiones seleccionadas, pero creemos que la opción anterior es más fácil de usar.

---
## Crea tu propio Índice de Calidad de Vida
El INE creó también un segundo panel, que trasladamos a la parte inferior de nuestra aplicación de datos en lugar de mantenerlo separado. En él, puedes cambiar el peso de las diferentes dimensiones del índice, dando más o menos importancia a los diferentes aspectos.

Si interactuas con los diferentes deslizadores se modifica el índice y el orden de las regiones.

La visualización original es un gráfico de barras con las barras que reaccionan a los cambios en los pesos, y puntos rojos como recordatorio visual del índice original.

Esta es la única visualización que hemos rediseñado. En lugar de los gráficos de barras originales, hemos concebido un dispositivo visual más rico.

TK TK Una visualización que muestra cada dimensión, el promedio ponderado personalizado y el promedio original. Todavía me pregunto si debería hacer marcas de verificación o puntos u otro tipo de marca...

---
## Trabajo futuro
Algunas cosas que nos gustaría considerar:

- Crear diferentes formas para los pétalos basadas en la diferencia positiva o negativa respecto a la media _a la_ [Film Flowers (de Shirley Wu)](https://shirleywu.studio/filmflowers/) para resaltar la diferencia entre flores.
- Probar visualizaciones de tendencias alternativas.
- Añadir páginas para cada comunidad autónoma, similar al [índice de la OCDE](https://www.oecdbetterlifeindex.org/countries/poland/).
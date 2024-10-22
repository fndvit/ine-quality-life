# Remake del 'Indicador Multidimensional de Calidad de Vida' del INE

![Panel Screenshot](inescreengrab.png)

Este panel de datos reimagina la visualización del [Indicador Multidimensional de Calidad de Vida (IMCV)](https://www.ine.es/experimental/imcv/experimental_ind_multi_calidad_vida.htm). El IMCV es un indicador experimental desarrollado por el Instituto Nacional de Estadística (INE) de España, compuesto por 60 indicadores específicos agrupados en nueve dimensiones, que ofrece una perspectiva amplia sobre la calidad de vida en España.

>**Nota**: nosotros no hemos desarrollado este indicador, pertenece al INE. Solo hemos reimaginado aspectos de su presentación visual y las tecnologías utilizadas en su difusión. Para más información sobre el proyecto original:

- [Detalles y cálculo en cada dimensión del indicador](https://www.ine.es/experimental/imcv/exp_calidad_vida_multi.pdf "Detalles y cálculo en cada dimensión del indicador").
- [Informe de metodología estandarizada](https://www.ine.es/dynt3/metadatos/es/RespuestaDatos.htm?oe=30471 "Informe de metodología estandarizada").
- [El panel de datos original](https://public.tableau.com/views/IMCV_ccaaES/Dashboard2?:showVizHome=no&:embed=true#3 "El panel de datos original").


## Construido con Observable Framework
El objetivo de este proyecto es celebrar los datos abiertos, y al igual que en nuestra iniciativa [Catalunya en Dades](https://catalunya-en-dades.fndvit.org/), utilizamos [Observable Framework](https://github.com/observablehq/framework), un generador de sitios estáticos gratuito y de código abierto para aplicaciones de datos, en lugar de productos de software comerciales como *Tableau* (la herramienta usada por el INE en este caso) o *Power BI* (la herramienta usada por la administración catalana).

## Sitio web
[Indicador Multidimensional de Calidad de Vida (INE)](https://imcv.fndvit.org/)

### Cómo empezar

Esta aplicación es un proyecto de [*Observable Framework*](https://observablehq.com/framework). Para iniciar el servidor local y verla, ejecuta:

```
npm run dev
```

Luego, visita <http://localhost:3000> para previsualizar tu aplicación.

Para más información, consulta <https://observablehq.com/framework/getting-started>.

## Estructura del proyecto

```ini
.
├─ src
│  ├─ components
│  │  └─ filterLegend.js       # la legenda interactiva
│  │  └─ flowerChart.js        # los gráficos de las flores
│  │  └─ lineChart.js          # los gráficos de línea
│  │  └─ tileMap.js            # el mosaico
│  ├─ data
│  │  ├─ consts.js             # funciones auxiliares y diccionarios
│  │  └─ imcv.json             # los datos del indicador
│  ├─ imcv-dashboard.md        # panel de datos del indicador
│  ├─ making-of.md             # post sobre cómo hicimos el panel
│  ├─ data.md                  # descarga los datos
│  └─ index.md                 # la página principal
├─ .gitignore
├─ observablehq.config.js      # el archivo de configuración de la app
├─ package.json
└─ README.md
```

**`src`** - Este es la carpeta principal donde están tus ficheros fuente. Las páginas van aquí. Cada página es un archivo de Markdown. *Observable Framework* usa [enrutamiento basado en archivos](https://observablehq.com/framework/routing), con lo que el nombre del archivo controla dónde se sirve la página. Puedes crear tantas páginas como desees. Usa carpetas para organizar tus páginas.

**`src/index.md`** - Esta es la página principal de la aplicación. Puedes tener tantas páginas adicionales como quieras, pero siempre debes tener también una página de inicio.

**`src/data`** - Puedes poner [cargadores de datos](https://observablehq.com/framework/loaders) o archivos de datos estáticos en cualquier lugar de la carpeta principal, pero recomendamos colocarlos aquí.

**`src/components`** - Puedes poner módulos compartidos de [JavaScript](https://observablehq.com/framework/javascript/imports) en cualquier parte de la carpeta, pero recomendamos colocarlos aquí. Esto te ayuda a separar el código de los archivos Markdown y pasarlo a módulos de JavaScript, lo que facilita la reutilización del código entre páginas, escribir pruebas y ejecutar linters, e incluso compartir código con aplicaciones web estándar.

**`observablehq.config.js`** - Este es el archivo de [configuración de la aplicación](https://observablehq.com/framework/config), donde se definen las páginas y secciones en la navegación lateral, así como el título de la aplicación.

### Referencia de comandos

| Comando              | Descripción                                              |
| -------------------- | -------------------------------------------------------- |
| `npm install`        | Instalar o reinstalar dependencias                       |
| `npm run dev`        | Iniciar el servidor de vista previa local                |
| `npm run build`      | Construir tu sitio estático, generando `./dist`          |
| `npm run deploy`     | Desplegar tu aplicación en Observable                    |
| `npm run clean`      | Limpiar la caché local del cargador de datos             |
| `npm run observable` | Ejecutar comandos como `observable help`                 |

## Trabajo futuro
Algunas cosas que nos gustaría considerar, por orden de prioridad:

- [ ] Añadir **más frases analíticas basadas en datos** (de las subdimensiones) a las páginas de cada comunidad autónoma.
- [ ] Probar visualizaciones de **tendencias** alternativas.
- [ ] Crear **diferentes formas para los pétalos** basadas en la diferencia positiva o negativa respecto a la media *a la* Film Flowers (de Shirley Wu) para resaltar la diferencia entre flores.
- [ ] Mejorar la usabilidad y la experiencia —especialmente en pantallas medianas.

## 🤝 Contribución
**La visualización puede revolucionar la difusión de los datos abiertos y revitalizar la transparencia**. Si queréis colaborar con nosotros, o vuestra empresa u organización quiere patrocinar la iniciativa, o queréis apoyar nuestra misión de otra forma, poneos en contacto con karma@fundaciovit.org.

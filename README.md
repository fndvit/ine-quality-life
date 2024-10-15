# Remake del 'Índice Multidimensional de Calidad de Vida' del INE

TK TK Imágenes

TK TK Explicación

---

## Cómo iniciar el proyecto

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

**`src`** - Este es el “directorio raíz de fuentes” — donde residen tus archivos fuente. Las páginas van aquí. Cada página es un archivo Markdown. *Observable Framework* usa [enrutamiento basado en archivos](https://observablehq.com/framework/routing), con lo que el nombre del archivo controla dónde se sirve la página. Puedes crear tantas páginas como desees. Usa carpetas para organizar tus páginas.

**`src/index.md`** - Esta es la página principal de la aplicación. Puedes tener tantas páginas adicionales como quieras, pero siempre debes tener también una página de inicio.

**`src/data`** - Puedes poner [cargadores de datos](https://observablehq.com/framework/loaders) o archivos de datos estáticos en cualquier lugar del directorio raíz de fuentes, pero recomendamos colocarlos aquí.

**`src/components`** - Puedes poner módulos compartidos de [JavaScript](https://observablehq.com/framework/javascript/imports) en cualquier parte del directorio raíz de fuentes, pero recomendamos colocarlos aquí. Esto te ayuda a separar el código de los archivos Markdown y pasarlo a módulos de JavaScript, lo que facilita la reutilización del código entre páginas, escribir pruebas y ejecutar linters, e incluso compartir código con aplicaciones web estándar.

**`observablehq.config.js`** - Este es el archivo de [configuración de la aplicación](https://observablehq.com/framework/config), donde se definen las páginas y secciones en la navegación lateral, así como el título de la aplicación.

## Referencia de comandos

| Comando              | Descripción                                              |
| -------------------- | -------------------------------------------------------- |
| `npm install`        | Instalar o reinstalar dependencias                       |
| `npm run dev`        | Iniciar el servidor de vista previa local                |
| `npm run build`      | Construir tu sitio estático, generando `./dist`          |
| `npm run deploy`     | Desplegar tu aplicación en Observable                    |
| `npm run clean`      | Limpiar la caché local del cargador de datos             |
| `npm run observable` | Ejecutar comandos como `observable help`                 |
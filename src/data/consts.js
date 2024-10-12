import {FileAttachment} from "observablehq:stdlib";

export const data = await FileAttachment("data/imcv.json").json();

export const dimColors = ["#3b5fc0","#ffd754","#c7c1bf","#a160af","#ff9c38","#5ca34b","#f794b9","#61b0ff","#ed393f"];

export const ccaaColors = ["#797974",
  "#3b5fc0",
  "#ffd754",
  "#c7c1bf",
  "#a160af",
  "#ff9c38",
  "#5ca34b",
  "#f794b9",
  "#61b0ff",
  "#ed393f",
  "#605152",
  "#8cc8b9",
  "#b88c2e",
  "#5f249e",
  "#912734",
  "#69cf77",
  "#af2fba",
  "#01819e",
  "#bf016f",
  "#382f46"
]

export const ccaaList = ["Total","Andalucía","Aragón","Asturias, Principado de","Balears, Illes","Canarias","Cantabria","Castilla y León","Castilla - La Mancha","Cataluña","Comunitat Valenciana","Extremadura","Galicia","Madrid, Comunidad de","Murcia, Región de","Navarra, Comunidad Foral de","País Vasco","Rioja, La","Ceuta","Melilla"];
export const ccaaIdDict = {"ES":"Total","AN":"Andalucía","AR":"Aragón","AS":"Asturias, Principado de","IB":"Balears, Illes","CN":"Canarias","CB":"Cantabria","CL":"Castilla y León","CM":"Castilla - La Mancha","CT":"Cataluña","VC":"Comunitat Valenciana","EX":"Extremadura","GA":"Galicia","MD":"Madrid, Comunidad de","MC":"Murcia, Región de","NC":"Navarra, Comunidad Foral de","PV":"País Vasco","RI":"Rioja, La","CE":"Ceuta","ML":"Melilla"};

export const dimDict = ({
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

  export const yearTexts = ({
    2008: "En 2008, Navarra, La Rioja y Asturias tienen los índices más elevados, todas superando ligeramente la media nacional. En el otro extremo, Ceuta, Galicia y Canarias se encuentran por debajo de la media, especialmente en Ocio y Condiciones materiales de vida.",
    2009: "En 2009, Navarra y La Rioja continúan entre las regiones con mejores resultados, acompañadas por Aragón que sube al top 3. Galicia, Canarias y Ceuta siguen en los últimos lugares, sin cambios significativos en sus índices.",
    2010: "Navarra, La Rioja y Aragón mantienen su liderazgo en 2010, con buenos resultados en Salud y Seguridad. Galicia sigue entre las regiones más rezagadas, acompañada de Ceuta y Andalucía, sin grandes mejoras en sus índices.",
    2011: "En 2011, Navarra y Aragón vuelven a estar en el top junto a La Rioja, con buenos resultados en Gobernanza y Derechos básicos. Galicia y Ceuta se mantienen entre las regiones con los índices más bajos, mientras que Andalucía sigue mostrando resultados por debajo de la media.",
    2012: "Navarra y Asturias encabezan el ranking en 2012, junto a La Rioja. En el lado contrario, Ceuta, Galicia y Canarias permanecen en los últimos lugares, afectadas principalmente por bajas en Condiciones materiales de vida.",
    2013: "Navarra y La Rioja siguen con los índices más elevados en 2013, destacando en Seguridad y Entorno. Galicia y Ceuta continúan en la parte baja del ranking, sin avances significativos en Gobernanza y Vida social.",
    2014: "La Rioja y Navarra vuelven a liderar en 2014, con buenos resultados en Ocio y Derechos básicos. Galicia sigue en los últimos lugares junto a Ceuta, afectada principalmente en Condiciones materiales y Seguridad física.",
    2015: "En 2015, Navarra, La Rioja y Aragón mantienen los mejores resultados, destacando especialmente en Salud y Gobernanza. En cambio, Ceuta, Galicia y Canarias continúan en los últimos lugares, sin grandes mejoras en sus índices.",
    2016: "En 2016, Navarra, La Rioja y País Vasco encabezan el ranking, con buenos resultados en Seguridad y Entorno. Ceuta, Galicia y Canarias permanecen entre los más rezagados, con índices bajos en Condiciones materiales de vida y Trabajo.",
    2017: "Navarra y La Rioja mantienen su liderazgo en 2017, con buenos resultados en Educación y Seguridad. Ceuta mejora ligeramente pero sigue en la parte baja, acompañada por Galicia, ambas con dificultades en Ocio y Trabajo.",
    2018: "Navarra y Aragón ocupan los primeros puestos en 2018, superando la media en Salud y Entorno. Andalucía cae al grupo de las últimas posiciones junto a Ceuta, con bajos índices en Trabajo y Condiciones materiales de vida.",
    2019: "Navarra y La Rioja siguen liderando en 2019, destacando en Gobernanza y Seguridad. Ceuta y Andalucía permanecen en los últimos puestos, sin grandes avances en Educación y Vida social.",
    2020: "Navarra y Aragón mantienen buenos resultados en 2020, con índices altos en Seguridad y Ocio. Ceuta y Andalucía continúan con los índices más bajos, afectadas principalmente en Trabajo y Experiencia de vida.",
    2021: "Navarra y La Rioja continúan en el top en 2021, con mejoras en Gobernanza y Derechos básicos. Ceuta y Andalucía siguen ocupando los últimos lugares, sin mejoras importantes en Ocio y Trabajo.",
    2022: "Navarra y La Rioja cierran 2022 con los índices más altos, mostrando estabilidad en Educación y Seguridad. Canarias, que no había figurado entre las últimas, aparece junto a Ceuta con los índices más bajos, afectadas principalmente en Trabajo y Entorno."
  }  
  )
  
  
export const dimList = [...new Set(data.map((d) => d.dim))].filter((dim) => dim.startsWith("dim"));


export const ccaaNameDict = {
    "Total": "Total",
    "Andalucía":"Andalucía",
    "Aragón": "Aragón",
    "Asturias, Principado de": "Asturias",
    "Balears, Illes": "Baleares",
    "Canarias": "Canarias",
    "Cantabria": "Cantabria",
    "Castilla y León": "Castilla y León",
    "Castilla - La Mancha": "Castilla-La Mancha",
    "Cataluña": "Cataluña",
    "Comunitat Valenciana": "Comunitat Valenciana",
    "Extremadura": "Extremadura", 
    "Galicia": "Galicia",
    "Madrid, Comunidad de": "Madrid",
    "Murcia, Región de": "Murcia", 
    "Navarra, Comunidad Foral de": "Navarra",
    "País Vasco": "País Vasco",
    "Rioja, La": "La Rioja",
    "Ceuta": "Ceuta",
    "Melilla": "Melilla"
};
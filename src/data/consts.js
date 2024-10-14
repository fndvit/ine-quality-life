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

  export const yearTexts = (
    {
      2008:"En 2008, el año base del indicador, Navarra, La Rioja y Asturias lideran la tabla, mientras que Ceuta, Galicia y Canarias la cierran.",
      2009:"En 2009, la calidad de vida en España descendió  respecto a 2008. Navarra y La Rioja continúan a la cabeza junto con Aragón, una de las que más mejora, en detrimento de Asturias. Galicia, una de las que más empeora, Canarias y Ceuta, una de las que más mejora, cierran la tabla. Murcia es de las que más caen.",
      2010:"En 2010, la calidad de vida en España ascendió  respecto a 2009. Navarra, La Rioja y Aragón continúan a la cabeza. Galicia y Ceuta, una de las que más empeora, cierran la tabla junto con Andalucía. Canarias y Cataluña son de las que más mejoran, Melilla es de las que más caen.",
      2011:"En 2011, la calidad de vida en España ascendió  respecto a 2010. Navarra, Aragón y La Rioja, una de las que más empeora, continúan a la cabeza. Galicia, Ceuta y Andalucía cierran la tabla. Melilla y Murcia son de las que más mejoran, País Vasco es de las que más caen.",
      2012:"En 2012, la calidad de vida en España descendió ligeramente respecto a 2011. Navarra y La Rioja, una de las que más mejora, continúan a la cabeza junto con Asturias, otra de las que más mejora, en detrimento de Aragón. Ceuta, una de las que más empeora, y Galicia cierran la tabla junto con Canarias. Murcia es de las que más caen.",
      2013:"En 2013, la calidad de vida en España descendió  respecto a 2012. Navarra, La Rioja, una de las que más mejora, y Asturias continúan a la cabeza. Ceuta, Galicia y Canarias cierran la tabla. Cataluña es de las que más mejoran, Melilla y Aragón son de las que más caen.",
      2014:"En 2014, la calidad de vida en España ascendió ligeramente respecto a 2013. Navarra, La Rioja y Asturias, una de las que más mejora, continúan a la cabeza. Ceuta, Galicia, las dos que más empeoran, y Canarias cierran la tabla. Melilla es de las que más mejoran",
      2015:"En 2015, la calidad de vida en España ascendió  respecto a 2014. Navarra y La Rioja continúan a la cabeza junto con Aragón, en detrimento de Asturias. Ceuta, una de las que más mejora, Galicia y Canarias cierran la tabla. Extremadura es de las que más mejoran, Melilla y Castilla-La Mancha son de las que más caen.",
      2016:"En 2016, la calidad de vida en España ascendió  respecto a 2015. Navarra y La Rioja continúan a la cabeza junto con País Vasco, en detrimento de Aragón. Ceuta, Galicia y Canarias cierran la tabla. Baleares y Cataluña son de las que más mejoran, Melilla y Cantabria son de las que más caen.",
      2017:"En 2017, la calidad de vida en España ascendió  respecto a 2016. Navarra y La Rioja continúan a la cabeza junto con Cantabria, una de las que más mejora, en detrimento de País Vasco. Galicia, Ceuta y Canarias cierran la tabla. Melilla es de las que más mejoran",
      2018:"En 2018, la calidad de vida en España ascendió  respecto a 2017. Navarra, una de las que más empeora, y Cantabria continúan a la cabeza junto con Aragón, en detrimento de La Rioja. Ceuta y Galicia, una de las que más mejora, cierran la tabla junto con Andalucía. Extremadura es de las que más mejoran, País Vasco es de las que más caen.",
      2019:"En 2019, la calidad de vida en España ascendió  respecto a 2018. Navarra, una de las que más mejora, y Aragón continúan a la cabeza junto con La Rioja, una de las que más mejora, en detrimento de Cantabria. Ceuta y Andalucía cierran la tabla junto con Murcia. Asturias y Baleares son de las que más caen.",
      2020:"En 2020, la calidad de vida en España descendió  respecto a 2019. Navarra, Aragón y La Rioja continúan a la cabeza. Ceuta y Andalucía cierran la tabla junto con Canarias, una de las que más empeora. Baleares y Asturias son de las que más mejoran, Melilla es de las que más caen.",
      2021:"En 2021, la calidad de vida en España descendió ligeramente respecto a 2020. Navarra, La Rioja y Aragón, una de las que más empeora, continúan a la cabeza. Ceuta, Andalucía y Canarias cierran la tabla. Extremadura y País Vasco son de las que más mejoran, Baleares es de las que más caen.",
      2022:"En 2022, la calidad de vida en España descendió  respecto a 2021. Navarra, La Rioja y Aragón continúan a la cabeza. Ceuta, una de las que más empeora, Canarias y Andalucía, una de las que más mejora, cierran la tabla. País Vasco es de las que más mejoran, Baleares es de las que más caen."
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
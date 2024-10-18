import {FileAttachment} from "observablehq:stdlib";
import chroma from "npm:chroma-js";

export const data = await FileAttachment("../data/imcv.json").json();
export const dataDetail = await FileAttachment("../data/imcv-detail.json").json();

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
    dim9: "Experiencia general de la vida",
    index: "Calidad de vida global"
  });

export const dimDetailDict = ({
  "dim1.1.1": "Renta mediana",
  "dim1.1.2": "Población en riesgo de pobreza relativa",
  "dim1.1.4": "Desigualdad",
  "dim1.1.5": "Satisfacción alta o muy alta con la situación económica del hogar",
  "dim1.2.1": "Dificultades medias o altas para llegar a fin de mes",
  "dim1.2.2": "Carencia material severa",
  "dim1.2.3": "Población que vive en hogares con determinadas deficiencias en la vivienda",
  "dim1.2.4": "Población con falta de espacio en la vivienda",
  "dim1.2.5": "Población con gasto elevado en vivienda",
  "dim1.2.6": "Satisfacción alta o muy alta con la vivienda",
  "dim1.3.2": "Incapacidad de hacer frente a gastos económicos imprevistos",
  "dim1.3.3": "Retrasos en los pagos",
  "dim2.1.1": "Tasa de empleo",
  "dim2.1.2": "Tasa de paro",
  "dim2.1.3": "Tasa de paro de larga duración",
  "dim2.1.4": "Empleo involuntario a tiempo parcial.",
  "dim2.2.1": "Salarios bajos",
  "dim2.2.2": "Jornadas largas y muy largas.",
  "dim2.2.3": "Trabajo temporal",
  "dim2.2.4": "Satisfacción alta o muy alta con el trabajo",
  "dim3.1.1": "Esperanza de vida al nacer",
  "dim3.1.3": "Salud autopercibida buena o muy buena",
  "dim3.1.4": "Morbilidad crónica",
  "dim3.1.5": "Personas con limitaciones en la actividad diaria en los últimos 6 meses",
  "dim3.2.1": "Necesidades no satisfechas de cuidados médicos",
  "dim3.3.1": "Índice de masa corporal (de sobrepeso y obesidad)",
  "dim3.3.2": "Fumadores diarios",
  "dim3.3.3": "Ejercicio físico regular",
  "dim4.1.1": "Poblacion con nivel superior (5-8)",
  "dim4.1.2": "Poblacion adulta (de 25 a 64 años) con nivel superior (5-8)",
  "dim4.1.3": "Poblacion joven (de 18 a 24 años) con nivel superior (5-8)",
  "dim4.1.4": "Abandono temprano de la educación-formación en la población de 18 a 24 años",
  "dim4.2.1": "Personas de 25 a 64 años que han recibido formación durante las últimas 4 semanas",
  "dim5.1.1": "Satisfacción alta o muy alta con el tiempo disponible",
  "dim5.1.2": "Asistencia a eventos culturales y deportivos",
  "dim5.2.1": "Frecuencia alta de las reuniones con amigos",
  "dim5.2.2": "Satisfacción alta o muy alta con las relaciones personales",
  "dim5.2.3": "Tener familiares, amigos o vecinos a los que pedir ayuda",
  "dim5.2.4": "Tener alguien con quien hablar de temas personales",
  "dim5.2.5": "Confianza alta o muy alta en los demás",
  "dim6.1.1": "Tasa de homicidios",
  "dim6.1.1": "Tasa de criminalidad",
  "dim6.1.2": "Percepción de crimen, violencia, vandalismo en la zona",
  "dim6.1.3": "Percepción de (bastante o mucha) seguridad",
  "dim7.1.1": "Confianza alta o muy alta en el sistema político",
  "dim7.1.2": "Confianza alta o muy alta en el sistema judicial",
  "dim7.1.3": "Confianza alta o muy alta en la policía",
  "dim7.2.1": "Participación en actividades políticas",
  "dim8.1.1": "Población que sufre problemas de contaminación y otros problemas ambientales",
  "dim8.1.2": "Población que sufre problemas de ruidos producidos por vecinos o del exterior",
  "dim8.1.3": "Media ponderada con la población de la concentración media anual de PM10 en municipios con más de 50.000 habitantes (en µg/m3)",
  "dim8.2.1": "Satisfacción alta o muy alta con las zonas verdes y áreas recreativas",
  "dim8.3.1": "Satisfacción alta o muy alta con el entorno en el que vive",
  "dim9.1.1": "Satisfacción global con la vida",
  "dim9.2.1": "Sentimientos positivos",
  "dim9.3.1": "Evaluación del sentido y propósito de la vida"
})

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
export const darkerDimColors = dimColors.map(d => chroma(d).darken(2).hex())

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
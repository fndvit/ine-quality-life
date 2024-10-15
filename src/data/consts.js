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

export const customIndexColors = [
  "#ed393f",
  "#f67066",
  "#fa9b8f",
  "#f8c4bb",
  "#efece8",
  "#c8c6df",
  "#9fa2d5",
  "#7380cb",
  "#3b5fc0"
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
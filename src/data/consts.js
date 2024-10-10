import {FileAttachment} from "observablehq:stdlib";

export const data = await FileAttachment("data/imcv.json").json();

export const dimColors = ["#a87c9f","#e49243","#6ba059","#84b5b2","#c67794","#5877a3","#eccf73","#9bcf85","#f1c2d2"];

export const ccaaColors = [
  "#594e58", "#3b5fc0", "#ffd754", "#c7c1bf", "#a160af", 
  "#ff9c38", "#5ca34b", "#f794b9", "#61b0ff", "#ed393f", 
  "#382f46", "#ae24ba", "#4d0a95", "#8cc8b9", "#c80175",
  "#8d8f89", "#17c124", "#0175b2", "#a67d20", "#831d2b"
];

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
    "Castilla - La Mancha": "Castilla la macha",
    "Cataluña": "Cataluña",
    "Comunitat Valenciana": "Valencia",
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
import {FileAttachment} from "observablehq:stdlib";

export const data = await FileAttachment("data/imcv.json").json();

export const dimColors = ["#a87c9f","#e49243","#6ba059","#84b5b2","#c67794","#5877a3","#eccf73","#9bcf85","#f1c2d2"];

export const ccaaList = ["Total","Andalucía","Aragón","Asturias, Principado de","Balears, Illes","Canarias","Cantabria","Castilla y León","Castilla - La Mancha","Cataluña","Comunitat Valenciana","Extremadura","Galicia","Madrid, Comunidad de","Murcia, Región de","Navarra, Comunidad Foral de","País Vasco","Rioja, La","Ceuta","Melilla"];

export const ccaaColors = ["#909090","#f28e2b","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab","#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"];

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
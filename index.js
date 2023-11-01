import { creadorCartas, checkboxesMarcar, filtrarCategory, logSumit } from "./modules/funciones.js"
const contenedorHomeCard = document.getElementById("contTarjetasIndex");
const arrayDeEventos = data.events;
let eventsFilter = [] //se añaden los eventos

const checkboxesIndex = document.getElementById("checkboxesIndex");
let arrayDeCheckboxes = [];
arrayDeCheckboxes = Array.from(new Set(data.events.map(event => event.category.replace("-", " "))));
console.log("Por aqui los eventos: ", arrayDeCheckboxes);

checkboxesIndex.addEventListener('change', filtrarCategory)

checkboxesMarcar(arrayDeCheckboxes)
creadorCartas(null)

const searchI = document.getElementById("searchIndex");
searchIndex.addEventListener('submit', logSumit)


//checkboxesMarcar(arrayCategory)
//filtrarCategory()
//logSumit(event)

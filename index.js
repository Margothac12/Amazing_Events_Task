console.log("HolaINDEX")
const contenedorHomeCard = document.getElementById("contTarjetasIndex");
const arrayDeEventos = data.events;
console.log("cada evento", data.events);
function creadorCartas(params) {
    for (let event of arrayDeEventos) {
        contenedorHomeCard.classList.add('d-flex', 'justify-content-around', 'flex-wrap', 'cardaround');
        const creadorCards = document.createElement("div");
        creadorCards.classList.add('d-flex', 'justify-content-around', 'flex-wrap');

        creadorCards.innerHTML = `
            <div class="card my-3" id=${event.id}  style="width: 18rem;">
                <img src="${event.image}" class="card-img-top" height="191" alt="food fair">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text text-truncate">${event.description}</p>
                    <div class="d-flex justify-content-between">
                        <p>${event.price}</p>
                        <a href="#" class="btn btn-dark">Details</a>
                    </div>
                </div>
            </div>
        `;

        contenedorHomeCard.appendChild(creadorCards);
    }
}
creadorCartas(arrayDeEventos)

const checkboxesIndex = document.getElementById("checkboxesIndex");
let arrayDeCheckboxes = [];
arrayDeCheckboxes = Array.from(new Set(data.events.map(event => event.category.replace("-", " "))));
console.log("Por aqui los eventos: ", arrayDeCheckboxes);
function checkboxesMarcar(arrayCategory) {
    arrayCategory.forEach(arrayDeCheckboxes => {
        const creadorCheckboxes = document.createElement("div")
        creadorCheckboxes.classList.add("form-check")
        creadorCheckboxes.innerHTML = `
        <input class="form-check-input" type="checkbox" value="${arrayDeCheckboxes}" id="${arrayDeCheckboxes}" />
        <label class="form-check-label" for=${arrayDeCheckboxes}>${arrayDeCheckboxes.replace("-", " ")}</label>
        `;

        console.log(creadorCheckboxes);
        checkboxesIndex.appendChild(creadorCheckboxes);
    });

}
checkboxesMarcar(arrayDeCheckboxes)

checkboxesIndex.addEventListener('change', filtrarCategory)
function filtrarCategory() {
    let checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value)
    console.log("Holi checked", checked);
    let catFiltrada = []
    arrayDeEventos.forEach(function (evento) {
        console.log("aqui la categiria", evento.category);
        checked.forEach(function (check) {
            console.log("recorrido check ", check);
            if (evento.category == check) {
                console.log("CATEGORIA Y CHECK IGUAL");
                
            }
        })
    })

}
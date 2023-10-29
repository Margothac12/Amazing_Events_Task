console.log("HolaPASTEVENTS")
const contenedorPastCard = document.getElementById('contTarjetasPast')
const arrayDeEventos = data.events
const arrayDeCurrentDate = data.currentDate

for (const event of arrayDeEventos) {
    if (event.date < arrayDeCurrentDate) {
        contenedorPastCard.classList.add('d-flex', 'justify-content-around', 'flex-wrap', 'cardaround')
        const creadorCards = document.createElement('div')
        creadorCards.classList.add('d-flex', 'justify-content-around', 'flex-wrap')
        creadorCards.innerHTML = (
            `<div class="card my-3" id=${event._id} style="width: 18rem;">
                <img src=${event.image} class="card-img-top" height="191"
                alt="food fair">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text text-truncate">${event.description}</p>
                    <div class="d-flex justify-content-between">
                        <p>${event.price}</p>
                        <a href="#" class="btn btn-dark">Details</a>
                    </div>
                </div>
             </div>`)
        contenedorPastCard.appendChild(creadorCards)
    }
}
const checkboxesPast = document.getElementById("checkboxesPast");
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
        checkboxesPast.appendChild(creadorCheckboxes);
    });

}
checkboxesMarcar(arrayDeCheckboxes)

checkboxesPast.addEventListener('change', filtrarCategory)
function filtrarCategory() {
    let checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value)
    console.log("Holi checked", checked);
    arrayDeEventos.forEach(function (evento) {
        let tarjeta = document.getElementById(evento._id); // Obtiene html de la tarjeta: <div>
        //checked es una array de texto, includes busca si existe ese texto en el array
            if(checked.includes(evento.category)){  
                tarjeta.style.display = "block";
            }else{
                tarjeta.style.display = "none";
                console.log("Oculto Cartas que no coinciden con el filtro")
            }

    })
   
}
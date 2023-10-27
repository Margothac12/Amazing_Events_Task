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
            `<div class="card my-3" id= ${event.id} style="width: 18rem;">
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

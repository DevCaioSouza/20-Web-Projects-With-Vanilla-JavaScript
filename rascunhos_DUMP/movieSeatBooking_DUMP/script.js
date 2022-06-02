const container = document.querySelector(".container");
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const movie = document.getElementById("movie");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = +movie.value

const updatedSelectedCount = function(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  

  count.innerText = +selectedSeats.length
  total.innerText = +selectedSeats.length * ticketPrice
}

// Event Listener - Movie change
movie.addEventListener('change', e => {
  ticketPrice = +e.target.value
  updatedSelectedCount()
}) 

// Event Listeners - Selected Seats
container.addEventListener('click', function(e){
  if (e.target.classList.contains('seat') && 
   !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected')
  }

  updatedSelectedCount()
})

/*

Desafios da construção do app:

1° Referenciar os elementos no DOM

2° Adicionar a classe selected para os assentos clicados
  dica: e.target.classList ... 

3° Atualizar as informações de cadeiras compradas
  dica: referenciar as cadeiras selecionadas, colocar em um NodeList
  identificar o número de cadeiras selecionadas
  Atualizar os textos de acordo com as compras

4° Evento que atualiza quando outro filme é selecionado
  dica: "change"...
*/
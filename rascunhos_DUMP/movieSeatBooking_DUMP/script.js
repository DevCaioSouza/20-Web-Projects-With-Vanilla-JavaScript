const container = document.querySelector(".container");
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const movie = document.getElementById("movie");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = +movie.value

const updatedSelectedCount = function(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  
  const selectedSeatsCount = selectedSeats.length

  

  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
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

Adicionando funcionalidades do LocalStorage

1) Passar de um simples nodelist para um array com o número
das cadeiras (em formato de index)
  dica: usar spread operator
  dica: indexOf()

*/

/* 
==== TOMANDO NOTAS DA AULA ==== 

x) forEach não retorna nada, map retorna um array
x) Caso no indexOf() passarmos um valor que não existe, retornará
  o index -1

*/


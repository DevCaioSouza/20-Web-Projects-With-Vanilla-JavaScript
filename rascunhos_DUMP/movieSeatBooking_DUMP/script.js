const container = document.querySelector(".container");
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const movie = document.getElementById("movie");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = +movie.value

//Salvar o index e o preço do filme selecionado no Local Storage 
function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

const updatedSelectedCount = function(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  
  const selectedSeatsCount = selectedSeats.length

  //Explicação: Dentro de 'seats', mapearemos todas as cadeiras
  //selecionadas (selectedSeats) e daremos um index à elas
  const seatsIndex = [...selectedSeats].map(function(seat){
    return [...seats].indexOf(seat)
  })

  console.log(seatsIndex)

  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex))

  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
}

// Event Listener - Movie change
movie.addEventListener('change', e => {
  ticketPrice = +e.target.value
  setMovieData(e.target.selectedIndex, e.target.value)
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

2) Salvar o index e o preço do filme selecionado no Local Storage 
*/

/* 
==== TOMANDO NOTAS DA AULA ==== 

x) forEach não retorna nada, map retorna um array
x) Caso no indexOf() passarmos um valor que não existe, retornará
  o index -1
x) Faltou o Prof. explicar que selectedIndex é uma propriedade do JS

*/


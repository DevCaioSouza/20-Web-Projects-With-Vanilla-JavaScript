// Query selector pode selecionar diversos tipos de elementos
// Entre eles: tags (p, div, etc) e também #id e .classe
// Porém, querySelector seleciona apenas o primeiro elemento
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const movieSelect = document.getElementById("movie");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex', movieIndex)
  localStorage.setItem('selectedMoviePrice', moviePrice)
}

// Update total and count
function updatedSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  //Saving seat selection on local storage. Seats need to 
  //be indexed, so we need to go through these steps:
  //1- Copy selected seats into an array
  //2- Map through array
  //3- Return a new array indexes

  const seatsIndex = [...selectedSeats].map(seat => 
     [...seats].indexOf(seat)
  )

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value)
  updatedSelectedCount();
});

// Seat click event
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    //poderia ser toggle, add ou remove
    updatedSelectedCount();
  }
});

/*
  o "+" antes da chamada, altera o tipo pra number

*/

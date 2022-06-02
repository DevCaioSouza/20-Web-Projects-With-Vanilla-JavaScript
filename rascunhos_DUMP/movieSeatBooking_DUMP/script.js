const container = document.querySelector(".container");
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const movie = document.getElementById("movie");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = +movie.value

const updatedSelectedCount = function(){


}

container.addEventListener('click', function(e){
  console.log(e.target)
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
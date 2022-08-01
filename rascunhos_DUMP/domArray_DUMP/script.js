const main = document.getElementById('main')
const addUserBtn = document.getElementById('add_user')
const doubleMoneyBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show_millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate_wealth')

let data = []

getRandomPerson()

//Pegar dados da API -> Fetch + async / await
async function getRandomPerson(){
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json()

  console.log(data.results[0])

  const user = data.results[0]

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }

  console.log(newUser)

}

//Adicionar um novo objeto pro data Array

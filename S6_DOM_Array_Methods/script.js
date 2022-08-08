const main = document.getElementById('main')
const addUserBtn = document.getElementById('add_user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show_millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate_wealth')

let data = []

getRandomUser();
getRandomUser();
getRandomUser();

//fetch random user and get money

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json()

  console.log(data)

  const user = data.results[0]

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }

  addData(newUser)
}

//Double User Money
function doubleMoney(user) {
  data = data.map(user => {
    return { ...user, money: user.money * 2 }
  })

  updateDOM()
}

// Sort users by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money)

  updateDOM()
}

// Show only millionaires 
function showMillionaires() {
  data = data.filter(user => user.money > 1000000)

  updateDOM()
}

//Calculate wealth
function calculateWealth(){
  const wealth = data.reduce((acc, user) => (acc += user.money), 0)
  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: ${formatMoney(wealth)}</h3>`
  main.appendChild(wealthEl)
}

// Add new obj to data array

function addData(obj) {
  data.push(obj);

  updateDOM()
}

//update DOM
function updateDOM(providedData = data) {
  //clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'



  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`
    main.appendChild(element);
  });
}

//Format number as money
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
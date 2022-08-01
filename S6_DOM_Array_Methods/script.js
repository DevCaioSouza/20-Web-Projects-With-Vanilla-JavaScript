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
    money: Math.random() * 1000000
  }

  addData(newUser)
}

//Double User Money
function doubleMoney (user){
  data = data.map(user => {
    return { ...user, money: user.money * 2 }
  })

  updateDOM()
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
function formatMoney(number){
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleMoney)
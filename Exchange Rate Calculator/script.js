function calculate(){
  fetch('items.json')
    .then(res => res.json())
    .then(data => (document.body.innerHTML = data[2].text));
}

calculate();
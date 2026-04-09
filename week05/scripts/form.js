const products = [
  {
    id: "fc-1888",
    name: "Flux Capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Power Laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Time Circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "Low Voltage Reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Warp Equalizer",
    averagerating: 5.0
  }
];
const selectList = document.querySelector('#product')

products.forEach((product) => {
    const option = document.createElement('option');
    option.textContent = product.name;
    option.value = product.id;
    selectList.append(option);
})

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;
numVisits++;
localStorage.setItem('numVisits-ls', numVisits)
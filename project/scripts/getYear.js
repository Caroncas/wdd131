const year = document.querySelector("#currentYear");

const today = new Date();
year.innerHTML = ` <span>${today.getFullYear()}</span>`;

const menu = document.querySelector('#menu')
const navigation = document.querySelector('.navigation')

menu.addEventListener("click", ()=> {
    menu.classList.toggle('open');
    navigation.classList.toggle('open');
})
const navmenu = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu')

hambutton.addEventListener('click', () => {
    navmenu.classList.toggle('show')
    hambutton.classList.toggle('show')
})
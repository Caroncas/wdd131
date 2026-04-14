const dropDownButtons = document.querySelectorAll(".drop-down"); 

dropDownButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        button.parentElement.querySelector('.answer').classList.toggle('open');
        button.classList.toggle('open');
    })
})

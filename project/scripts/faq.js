const dropDownButtons = document.querySelectorAll(".drop-down"); 

dropDownButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        button.parentElement.querySelector('.answer').classList.toggle('open');
        button.classList.toggle('open');
    })
})

const formSubmit = document.querySelector('form');

formSubmit.addEventListener('submit', ()=> {
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries())
    // localStorage.setItem('formData')
    //Later on I'll set it up to save the question to local storage and return it back to me as the administrator of the page, for now this is all I'll worry about.
    let numQuestions = Number(window.localStorage.getItem('numQuestions-ls')) || 0;
    numQuestions++;
    localStorage.setItem('numQuestions-ls', numQuestions);
})
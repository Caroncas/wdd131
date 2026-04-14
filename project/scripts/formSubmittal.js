const formSubmit = document.querySelector('form');

formSubmit.addEventListener('submit', ()=> {
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries())
    // localStorage.setItem('formData')
    //Later on I'll set it up to save the question to local storage and return it back to me as the administrator of the page, for now this is all I'll worry about.
    let numSubmits = Number(window.localStorage.getItem('numSubmits-ls')) || 0;
    numSubmits++;
    localStorage.setItem('numSubmits-ls', numSubmits);
})
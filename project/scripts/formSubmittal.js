const formSubmit = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const thanks = document.querySelector('#thanks');
const respond = document.querySelector('#respond');

formSubmit.addEventListener('submit', (e)=> {
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries())
    // localStorage.setItem('formData')
    //Later on I'll set it up to save the question to local storage and return it back to me as the administrator of the page, for now this is all I'll worry about.
    e.preventDefault();
    let numSubmits = Number(window.localStorage.getItem('numSubmits-ls')) || 0;
    numSubmits++;
    localStorage.setItem('numSubmits-ls', numSubmits);

    if (thanks) {
        submitButton.classList.add('.open');
        thanks.textContent = 'You have been added to the email list!';
        formSubmit.reset();
    }
    else if (respond) {
        submitButton.classList.add('.open');
        respond.textContent = 'Your question has been submitted! You can expect a response within the next 2-3 business days.';
        formSubmit.reset();
    }
})
const year = document.querySelector("#currentYear");

const today = new Date();
year.innerHTML = ` <span>${today.getFullYear()}</span>`;
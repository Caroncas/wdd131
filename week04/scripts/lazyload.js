const year = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = ` <span>${today.getFullYear()}</span>`;
lastModified.innerHTML = `<span>${document.lastModified}</span>`;
const year = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = ` <span>${today.getFullYear()}</span>`;
lastModified.innerHTML = `<span>${document.lastModified}</span>`;
//Alternatively they gave an example where you could get the element and past it at the same time:
//  document.getElementById("lastModified").innerHTML = document.lastModified;
// copyright year (current year)
const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();
// date the document was last modified (in the 2nd paragraph)
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Updated: ${document.lastModified}`;

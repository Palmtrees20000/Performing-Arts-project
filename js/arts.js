// inject current year into the footer
const dateNow = new Date();
document.querySelector('#year').textContent = dateNow.getFullYear();
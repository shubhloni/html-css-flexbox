const humburger = document.querySelector(".humburger");
const navLinks = document.querySelector('.nav-links');
const navLinksDiv = document.querySelector('.nav-links div');

humburger.addEventListener("click", ()=>{
    navLinks.classList.toggle('open');
});
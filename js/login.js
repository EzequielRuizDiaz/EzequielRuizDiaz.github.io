document.addEventListener("DOMContentLoaded", function(e){
const loginForm=document.getElementById('form');
loginForm.onsubmit=(e) => {
    e.preventDefault()
const user = document.getElementById('inputEmail').value;
const password = document.getElementById('inputPassword').value;
localStorage.setItem('email', user);
window.location.href="./Pagina.html";
};
});
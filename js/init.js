const CATEGORIES_URL = "http://localhost:3000/categorias";
const PUBLISH_PRODUCT_URL = "http://localhost:3000/productosaviso";
const CATEGORY_INFO_URL = "http://localhost:3000/categoriasinfo";
const PRODUCTS_URL = "http://localhost:3000/productos";
const PRODUCT_INFO_URL = "http://localhost:3000/productosinfo";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:3000/productoscomentarios";
const CART_INFO_URL = "http://localhost:3000/carroinformacion";
const CART_BUY_URL = "http://localhost:3000/carrocompra";
const CART_INFOF_URL= "http://localhost:3000/carroproductos";
var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
let email =localStorage.getItem('email');
let username = document.getElementById('username');
username.innerText = email;
       /* if(email===null){
          window.location.href="/index";
        }*/
document.getElementById("close").addEventListener("click", function(){

  localStorage.removeItem('email');
       
});

});
var products = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}
function showComentarios(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let item = array[i];

        htmlContentToAppend += `
        
        
        <div class="comentarioslist">
            <div class="row">
                <div class="col">
                   <div style="margin-bottom: 30px;">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">${ item.user } </h5>
                            <small class="text-muted"> ${ item.score } Puntuacion</small>
                     </div>
                        <div class="d-flex w-100 justify-content-between">
                            <small class="mb-1">Fecha: ${item.dateTime } </small>
                        </div>
                            <p class="mb-1"> ${item.description }</p>
                </div>
            </div>
        </div> 



           
        
        `
          //console.log(document.getElementById("comentarioslist"));
        document.getElementById("comentarioslist").innerHTML = htmlContentToAppend;
        
    }
}
function showProductSugerence(array){

    let htmlContentToAppend = "";

    for(let i = 1; i < array.length; i=i+2){
        let ProductosSug = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + ProductosSug.imgSrc + `" alt="">
            </div>
        </div>
        `
        
        document.getElementById("ProductosSugeri").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            products = resultObj.data.data;

            let productsNameHTML  = document.getElementById("categoria");
            let productsDescriptionHTML = document.getElementById("categoryDescripcion");
            let productsCountHTML = document.getElementById("productosCantidad");
            let productsCriteriaHTML = document.getElementById("productCriterios");
        
            productsNameHTML.innerHTML = products.name;
            productsDescriptionHTML.innerHTML = products.description;
            productsCountHTML.innerHTML = products.soldCount;
            productsCriteriaHTML.innerHTML = products.cost;

            //Muestro las imagenes en forma de galería
            showImagesGallery(products.images);
        }

    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            comentarios = resultObj.data.data;

            showComentarios(comentarios)
        }     
    });

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            Sugerencias = resultObj.data.data;
    
            showProductSugerence(Sugerencias);
            //console.log(Sugerencias)
        }     
    });

document.getElementById("edit-submit").addEventListener("click",function(e){

    document.getElementById("edit-comment").value="";
});



/*const textarea = document.getElementById('edit-comment').value;
localStorage.setItem('texto',textarea);
window.location.href="/";*/


});
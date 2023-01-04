//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
   
    function showCartProducts(cart){

        let htmlContentToAppend = "";
    
        for(let i = 0; i < cart.length; i++){
            let item = cart[i];
    
            htmlContentToAppend += `
            
            
            <div class="list-group-item list-group-item-action">
                <div class="row" ">
                    <div class="col-3">
                        <img src="${item.src}" alt="${item.name}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                        <a href="product-info.html" class="list-item-action"><h4 class="mb-1">${item.name}</h4></a>
                            <div>
                            <p class="mb-1">Precio: ${item.currency} ${item.unitCost}</p>
                            
                            <p class="mb-1">Unidades: <span class="quantity">${item.count}</span></p>
                           
                            
                        <h5 class="mb-1">SubTotal: ${item.currency} <span class="subtotal">${item.unitCost * item.count}</span></h5>                        
                    </div>


                    
                </div>

            </div>
        

        

            
            `
              console.log(document.getElementById("cartProductos"));
            document.getElementById("cartProductos").innerHTML = htmlContentToAppend;
            
        }
    }
   
  

        

    getJSONData(CART_INFOF_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            
            cartProducts = resultObj.data.data.articles;
            


            showCartProducts(cartProducts)
            console.log(cartProducts);
        }     
    });
    
});
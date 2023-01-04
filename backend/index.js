var express = require('express');
var app = express();
const fs = require("fs");
app.get('/',function(req,res){
res.send('salio la foto');
});

app.get('/productos',function(req,res){
fs.readFile("./product/all.json", "utf-8" ,function(err,data){
    res.json({data: JSON.parse(data),
        success: true})
});

}); 

app.get('/productosaviso',function(req,res){
    fs.readFile("./product/publish.json", "utf-8" ,function(err,data){
        res.json({data: JSON.parse(data),
            success: true})
    });
    
    }); 
 
app.get('/productoscomentarios',function(req,res){
    fs.readFile("./product/5678-comments.json", "utf-8" ,function(err,data){
        res.json({data: JSON.parse(data),
            success: true})
    });
    
    }); 

    app.get('/productosinfo',function(req,res){
        fs.readFile("./product/5678.json", "utf-8" ,function(err,data){
            res.json({data: JSON.parse(data),
                success: true})
        });
        
        }); 

        app.get('/categorias',function(req,res){
            fs.readFile("./category/all.json", "utf-8" ,function(err,data){
                res.json({data: JSON.parse(data),
                    success: true})
            });
            
            }); 

            app.get('/categoriasinfo',function(req,res){
                fs.readFile("./category/1234.json", "utf-8" ,function(err,data){
                    res.json({data: JSON.parse(data),
                        success: true})
                });
                
                }); 

               
    

                app.get('/carroinformacion',function(req,res){
                    fs.readFile("./cart/987.json", "utf-8" ,function(err,data){
                        res.json({data: JSON.parse(data),
                            success: true})
                    });
                    
                    }); 

                    app.get('/carrocompra',function(req,res){
                        fs.readFile("./cart/buy.json", "utf-8" ,function(err,data){
                            res.json({data: JSON.parse(data),
                                success: true})
                        });
                        
                        }); 

                        app.get('/carroproductos',function(req,res){
                            fs.readFile("./cart/654.json", "utf-8" ,function(err,data){
                                res.json({data: JSON.parse(data),
                                    success: true})
                            });
                            
                            }); 

                           
    

app.listen(3000,function()  {
console.log('se escucha el puerto 3000')

});





var logoPrincipal = document.getElementById("imagen-logo");
var paginaPrincipal= document.getElementById("paginaPrincipal");
var productos = document.getElementById("productos");
var sobreNosotros = document.getElementById("sobreNosotros");
var circulo = document.getElementById("texto");
var primeraTarjeta = document.getElementById("card-1");
var segundaTarjeta = document.getElementById("card-2");
var terceraTarjeta = document.getElementById("card-3");
var cuartaTarjeta = document.getElementById("card-4");

var estado = ["Deal Shop.","Deal Shop.","Deal Shop.","Deal Sho.","Deal Sh.","Deal S.","Deal.","Dea.","De.","D.",".",".",".",".","."]
var contador= 15;
var acendente = true;
var eliminar = false;
    
      
      var myVar = setInterval(intervalo,200);    

      function intervalo(){
      
            circulo.textContent = estado[contador];

            
            if (contador >=0){
                  contador--;
                  if (contador == 0){                     
                       clearInterval(myVar);
                  }
            }
      }



primeraTarjeta.addEventListener("mouseover",function(){

      primeraTarjeta.classList.add("sombra");
      
});

primeraTarjeta.addEventListener("mouseleave",function(){

      primeraTarjeta.classList.remove("sombra");
      primeraTarjeta.classList.add("card");
});



segundaTarjeta.addEventListener("mouseover",function(){
     
     
      segundaTarjeta.classList.add("sombra");
      
});

segundaTarjeta.addEventListener("mouseleave",function(){

      segundaTarjeta.classList.remove("sombra");
      segundaTarjeta.classList.add("card");
});

terceraTarjeta.addEventListener("mouseover",function(){

      terceraTarjeta.classList.add("sombra");
});

terceraTarjeta.addEventListener("mouseleave",function(){

      terceraTarjeta.classList.remove("sombra");
      terceraTarjeta.classList.add("card");
});

cuartaTarjeta.addEventListener("mouseover",function(){

      cuartaTarjeta.classList.add("sombra");
});

cuartaTarjeta.addEventListener("mouseleave",function(){

      cuartaTarjeta.classList.remove("sombra");
      cuartaTarjeta.classList.add("card");
});



paginaPrincipal.addEventListener("click",function(){
               
      window.scroll({top: 0,left: 0,behavior: 'smooth'}); 

      sobreNosotros.classList.remove("active");
      productos.classList.remove("active");
      paginaPrincipal.classList.add("active");
});

productos.addEventListener("click",function(){
      
      let posicionProductos = document.getElementById("principal").getBoundingClientRect();
      window.scroll({top: posicionProductos.height,left: 0,behavior: 'smooth'}); 

      paginaPrincipal.classList.remove("active");
      sobreNosotros.classList.remove("active") ;
      productos.classList.add("active") ;
      
});

sobreNosotros.addEventListener("click",function(){

      let posicionSobreNosotros = document.getElementById("nosotros").getBoundingClientRect().height;
      let posicionProductos = document.getElementById("principal").getBoundingClientRect().height;
      let final = document.getElementById("final").getBoundingClientRect().height;

      window.scroll({top:posicionSobreNosotros+posicionProductos+final+30,left: 0,behavior: 'smooth'}); 

      
      paginaPrincipal.classList.remove("active");
      productos.classList.remove("active") ;
      sobreNosotros.classList.add("active") ;

});

logoPrincipal.addEventListener("click",function(){
      window.scroll({top: 0,left: 0,behavior: 'smooth'}); 
});

logoPrincipal.addEventListener("mouseover",function(){

      logoPrincipal.style.width = "105px";
      logoPrincipal.style.height = "105px";
    
});
logoPrincipal.addEventListener("mouseleave",function(){
      logoPrincipal.style.width = "100px";
      logoPrincipal.style.height = "100px";
});
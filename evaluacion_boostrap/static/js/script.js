function pedirPizza() {
    let direccion = prompt("Ingresa tu direccion de domicilio");
    alert("Pizzas encargadas, Vamos en camino")
} 

const imagen = Document.getElementById('miImagen')

imagen.addEventListener('mouseover', function(){
    imagen.src = "little.png"
});

 imagen.addEventListener('mouseout', function() {
    imagen.src = 'cesar_web.png'; 
});
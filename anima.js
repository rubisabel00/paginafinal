var interacion = document.querySelector ('.interacion');
var animacion1 = document.querySelector ('.animacion1');
var audi = document.querySelector ('.audi');

interacion.addEventListener("click", animaciones)

function animaciones() {
    interacion.classList.add('oculto');
    animacion1.play()
    audi.play()

setTimeout(function (){
    animacion1.pause()
    audi.pause()
},27000);
}

var interacion2 = document.querySelector ('.interacion2');
var animacion2 = document.querySelector ('.animacion2');
var audi2 = document.querySelector ('.audi2');

interacion2.addEventListener("click", animaciones2)

function animaciones2() {
    interacion2.classList.add('oculto');
    animacion2.play()
    audi2.play()

setTimeout(function (){
    animacion2.pause()
    audi2.pause()
},13000);
}

var interacion3 = document.querySelector ('.interacion3');
var animacion3 = document.querySelector ('.animacion3');
var audi3 = document.querySelector ('.audi3');

interacion3.addEventListener("click", animaciones3)

function animaciones3() {
    interacion3.classList.add('oculto');
    animacion3.play()
    audi3.play()

setTimeout(function (){
    animacion3.pause()
    audi3.pause()
},22000);
}
























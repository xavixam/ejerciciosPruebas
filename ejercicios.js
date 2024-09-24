//1 
let tb = "The Bridge 2023";
let tb2 = tb.split(" ");

console.log(tb.length);
console.log(tb2);


//2
let culpable;

if (culpable == true) {
    console.log("Es culpable");
} else {
    console.log("No es culpable");
}

//3
function name(nombre) {
    console.log(nombre);
}

name("Xavi")

//5
let array = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
        return console.log(array[i]);
    }
}

//6 
let p = document.getElementById("miParrafo");
let b = document.getElementById("miBoton");

p.textContent("Nuevo Texto");
p.style.color="red";
p.style.fontWeight="bold";
document.getElementById("miLista").innerHTML("<li>Nuevo elemento de lista</li>");
miBoton.addEventListener('click', clickar);
function clickar() {alert("Has hecho click")};
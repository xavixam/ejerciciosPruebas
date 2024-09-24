//1 
let tb = "The Bridge 2023";

console.log(tb.length);
console.log(tb.substring(0, 10));


//2
let culpable;

if (culpable == true) {
    console.log("Es culpable");
} else {
    console.log("No es culpable");
}

//3
function name(nombre) {

    if (typeof nombre == "string") {

        console.log(nombre);

    } else {

        console.log("Debo ser ejecutada con un string");
    }
}

name("Xavi")
name (2)

//5
let array = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
        console.log(array[i]);
    }
}

//6 
let p = document.getElementById("miParrafo");
let b = document.getElementById("miBoton");
let l = document.getElementById("miLista");

p.innerText = "Nuevo Texto";
p.style.color="red";
p.style.fontWeight="bold";
l.innerHTML = "<li>Nuevo elemento de lista</li>";
b.addEventListener('click', function(event){
    alert("Has hecho click");
 });

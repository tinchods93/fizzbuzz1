const boton = document.getElementById('boton');
const botonL = document.getElementById('botonL');
const contadorClicks = document.getElementById('clicksCounter');
const output = document.getElementById('output');
let count = localStorage.getItem("count") || 0;


//Actualizo variables cuando recargo por primera vez la pagina. 
window.onload = () => {
    contadorClicks.innerHTML = count;
    asignarListaRandom(count);
}

let contador = 0;
if (typeof(count) === "string") {
    contador = parseInt(count);
} else {
    contador = count;
}

const listaRandom = ['Fizz', 'Fuzz', 'FizzBuzz!'];
boton.addEventListener('click', () => {

    contador += 1;
    localStorage.setItem('count', contador);
    asignarListaRandom(contador);
    contadorClicks.innerHTML = contador;

});


function asignarListaRandom(contador) {

    let random = "";

    if ((contador % 3) == 0) {
        random = listaRandom[0];
    }
    if ((contador % 5) == 0) {
        random = listaRandom[1];
    }

    if ((contador % 3) == 0 && (contador % 5) == 0) {
        random = listaRandom[2];
    }

    output.classList.remove('hiddenE');
    output.innerHTML = random;

}

//Reinicio contador
botonL.addEventListener('click', () => {
    localStorage.setItem('count', 0);
    contador = 0;
    contadorClicks.innerHTML = 0;
    output.innerHTML = '';
})
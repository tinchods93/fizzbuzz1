const boton = document.getElementById('boton');
const contadorClicks = document.getElementById('clicksCounter');
const output = document.getElementById('output');

let contador = 0;
const listaRandom = ['Fizz', 'Fuzz', 'FizzFuzz!'];
boton.addEventListener('click', () => {
	let index = Math.floor(Math.random() * 3);

	contadorClicks.innerHTML = contador;
	output.classList.remove('hiddenE');
	output.innerHTML = listaRandom[index];
});

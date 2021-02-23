const boton = document.getElementById('boton');
const contadorClicks = document.getElementById('clicksCounter');
const output = document.getElementById('output');

let contador = 0;
const listaRandom = ['Fizz', 'Fuzz', 'FizzBuzz!'];
boton.addEventListener('click', () => {
	contador +=1;
	let random="";
	if((contador %3) == 0) {
		random=listaRandom[0];
	} 
	if((contador %5) == 0) {
		random=listaRandom[1];
	}

	if((contador %3)==0 && (contador %5) == 0) {
		random=listaRandom[2];
	}

	contadorClicks.innerHTML = contador;
	output.classList.remove('hiddenE');
	output.innerHTML = random;
});

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

import Home from './components/Home';
import { Reloj } from './components/Reloj';

let counter = 0;
const reactRender = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
	const contadorSeis = Math.floor(counter / 100000) % 10;
	const contadorCinco = Math.floor(counter / 10000) % 10;
	const contadorCuatro = Math.floor(counter / 1000) % 10;
	const contadorTres = Math.floor(counter / 100) % 10;
	const contadorDos = Math.floor(counter / 10) % 10;
	const contadorUno = counter % 10;
	console.log(contadorUno, contadorDos, contadorTres, contadorCuatro, contadorCinco, contadorSeis);
	

	reactRender.render(
			<Home
			seis={contadorSeis}
			cinco={contadorCinco}
			cuatro={contadorCuatro}
			tres={contadorTres}
			dos={contadorDos}
			uno={contadorUno}
			/>
	);

	counter++;
}, 1000);

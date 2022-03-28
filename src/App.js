// import logo from './logo.svg';
import './App.css';
// import {useEffect, useState} from 'react';
import MenuBar from "./Components/MenuBar";
import Dashboard from './Components/Dashboard'
import React, { useEffect, useState } from 'react';

const App =() => {
	let sizeDashboard = 3; // sera un parametro: el usuario decide de que tamaño quiere el tablero (solo pares)
	let typeDashboard = "letters" // letters or numbers
	const aAlphabeth = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	const aNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];	
	let llistDashboardPlay = [];
	let aDashboardPlay = [];
	const [stateCardSaved, setStateCardSaved] = useState([]); // save all cards guessed

	const generaArregloDatosTablero = () => {
			let aBase = (typeDashboard === "letters") ? aAlphabeth : aNumbers;
			while (aDashboardPlay.length < sizeDashboard) {
				let indexRandom = Math.floor((Math.random() * aBase.length - 1) + 1);
				if (aDashboardPlay.indexOf(aBase[indexRandom]) === -1) {
					aDashboardPlay.push(aBase[indexRandom]);
				}
			}
			llistDashboardPlay = aDashboardPlay.concat(aDashboardPlay);			
			llistDashboardPlay = llistDashboardPlay.sort(() => Math.random() - .5);			
			
	}
	generaArregloDatosTablero();

	const getCards = (cards) => {		
		let tmpCardsSaved = stateCardSaved;
		tmpCardsSaved.push(cards)
		setStateCardSaved(tmpCardsSaved);
		console.log(stateCardSaved)	
	}

	return (
		<div className="App">
			<div className="box menubar">				
				<MenuBar adivinadas={stateCardSaved}/>
			</div>
			<div className="box dash">
				<Dashboard data={llistDashboardPlay} onResponseApp={getCards}/>
			</div>
		</div>
		);
	}
	
	export default App;
	
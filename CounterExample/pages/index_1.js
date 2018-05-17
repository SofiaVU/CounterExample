import React from 'react';
import { default as Web3} from 'web3';
import contractArtifact from '../build/contracts/CounterEvents.json'
import { default as contract } from 'truffle-contract'


// TODO ESTO SOBRA PORQUE USAMOS LA EXTENSION METAMASK
var web3;
if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
} else {
	//  Especificamos el provider 
	// empleando chrome con MetaMask el provider es injectado automaticamente
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
} 

var account = web3.eth.accounts[0];

export default class App extends React.Component{

	constructor(props){
		super(props);

		this.state = ({
			contrato: null,
			cuenta: 0,
			event: null, 
		});

		this.incrementClick = this.incrementClick.bind(this);
	}

	/*
	* Invocado 1 vez antes de que el render inicial ocurra 
	*/

	async componentWillMount() {
		var theContract = contract(contractArtifact);

		theContract.setProvider(web3.currentProvider);

		// CONTRATO		
		var contrato = await theContract.deployed(); // ESTO YA ME GUARDA EL CONTRATO
		//console.log("Contrato =", contrato);

		var cuenta = await contrato.count();
		// ccount es e atributo uint256 del smart contract
		console.log("CUENTA =", cuenta);

		// EVENTO 
		var event = contrato.Increment();
		//console.log(event);		

		// LANZAMOS WATCH
		event.watch((err, event) => {
			//console.log(event);
			if (err){
				console.log(err);
			} else {
				console.log("This is the event!");
				//console.log(event);
				console.log("Count was incremented by: " + event.args.who);

				var cuenta = event.args.amount;

				console.log("The counter has been updated up to: " + cuenta);


				//return event.args.amount;
				// AQUI DEBERÍA IR LA ACTUALIZACION DEL ESTADO, de la variable cuenta que mostraria el dom
				// cada vez que se detecta un evento- es decir que se ha pulsado incrementar
				// se jejuta este trozo , es decir las lineas de codigo dentro del watch
				//  pero no puedo ni llamar a funciones de la clase App ni devilver un resultado

	            this.setState({
					cuenta: cuenta.valueOf(),
				});	
			}
		});
		console.log("event watch has been started");

		this.setState({
			contrato: contrato,
			event: event,
			cuenta: cuenta.valueOf(),
		});	
	} 

	/*
	* metodo que incrementa el countador 
	*/
	incrementClick() {

		console.log("PULSADO BOTON INCR");

		this.state.contrato.increment({from: account, gas:200000})
		.then(res => {
			console.log(">>>>>>>>>>>> +1 succes");
		})
        .catch(err => {
			console.log("ERROR", err);
        });	
        
	}


	/*
	* Invocado inmediatamente antes de que un componente se desmonte del DOM
	*/

	componentWillUnmount(){
		// TEAR DOWN WATCH
		this.state.event.stopWatching();
		console.log("watch has been tore down");
	}

	render(){

		console.log(this.state.cuenta);

		return (
			<div>
				<h1> Page under construction </h1>
				<h4> El contado está a : {this.state.cuenta} </h4>
				<button onClick={this.incrementClick}>Increment</button>	
			</div>
		);
	}
}


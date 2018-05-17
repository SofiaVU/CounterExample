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

	/*
	* CONSTRUCTOR , se define el estado 
	*/
	constructor(props){
		super(props);
		this.state = ({
			counterContract: null,
			cuenta: null,
			event: null, 
		});
		this.incrementClick = this.incrementClick.bind(this);
	}

	/*
	* Invocado 1 vez antes de que el render inicial ocurra 
	*/

	async componentWillMount(){

		var theContract= contract(contractArtifact);
		theContract.setProvider(web3.currentProvider);

		// CONTRATO		
		var contrato = await theContractInstance.deployed(); // ESTO YA ME GUARDA EL CONTRATO
		//console.log(contrato);

		//CUENTA
		var cuenta = await contrato.count();
		console.log("CUENTA = "  + cuenta + " atributo Smart Contract");

		// EVENTO 
		var event = contrato.Increment();
		//console.log(event);		

		// LANZAMOS WATCH
		event.watch((err, event) => {
			//console.log(event);
			if (err){
				console.log("An error has occurred")
				console.log(err);
			} else {
				console.log("This is the event!");
				//console.log(event);
				console.log("Count was incremented by: " + event.args.who);
				console.log("The counter has been updated up to: " + event.args.amount);
				
				// Actualizamos el valor del contador tras recibir el evento
				this.setState({
					cuenta: event.args.amount.valueOf(),
				});
			}
		});

		console.log("event watch has been started");

		this.setState({
			counterContract: theContract,
			event: event,
			cuenta: ceunta.valueOf(), /* No se ha actualizado antes ? */ 
		});	
		
	}

	/*
	* metodo que incrementa el countador 
	*/
	incrementClick(){

		console.log("SE HA PULSADO INCREMENTAR")

		this.state.increment({from: account, gas:200000})
		.then(res =>{
			onsole.log("+1 succes");
		}).catch( err => {
			console.log("ERROR: Couldn't increment counter");
			console.log(err);
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
		//console.log(this.state.event);

		return (
			<div>
				<h1> Page under construction </h1>
				<h4> El contado está a : {this.state.cuenta} </h4>
				<button onClick={this.incrementClick}>Increment</button>				
			</div>
		);
	}
}


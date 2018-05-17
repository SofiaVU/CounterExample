import React from 'react';
import { default as Web3} from 'web3';
import contractArtifact from '../build/contracts/CounterEvents.json'
import { default as contract } from 'truffle-contract'

export default class App extends React.Component{

	constructor(props){
		super(props);
		this.state = ({
			counterContract: null,
			/*contrato: null, */
			cuenta: null,
			event: null, 
		});
		this.incrementClick = this.incrementClick.bind(this);
		//this.createEvents = this.createEvents.bind(this);
		//this.state.event = this.state.contrato.Increment();
		//this.watchEvent = this.state.watchEvent.bind(this);
	}

	/*
	* Invocado 1 vez antes de que el render inicial ocurra 
	*/

	async componentWillMount(){

		// TODO ESTO SOBRA PORQUE USAMOS LA EXTENSION METAMASK
		var web3;
		if (typeof web3 !== 'undefined') {
			web3 = new Web3(web3.currentProvider);
		} else {
			//  Especificamos el provider 
			// empleando chrome con MetaMask el provider es injectado automaticamente
			web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
		} 

		var theContractInstance = contract(contractArtifact);
		theContractInstance.setProvider(web3.currentProvider);

		// CONTRATO		
		var contrato = await theContractInstance.deployed(); // ESTO YA ME GUARDA EL CONTRATO
		//console.log(contrato);

		// EVENTO 
		var event = contrato.Increment();
		//console.log(event);		

		this.setState({
			counterContract: theContractInstance,
			/*contrato: contrato, */
			event: event,
			cuenta: null,
		});	

		// LANZAMOS WATCH
		event.watch(function(err, event){
			//console.log(event);
			if (err){
				console.log(err);
			} else {
				console.log("This is the event!");
				console.log(event);
				console.log("Count was incremented by: " + event.args.who);
				console.log("The counter has been updated up to: " + event.args.amount);
				//return event.args.amount;
			}
		});
		console.log("event watch has been started");
	} 

	/*
	* metodo que incrementa el countador 
	*/
	incrementClick(){

		var instancia = this.state.counterContract;

		// ESTO SE QUITARIA DE MODO QUE EL USUARIO PAGA POR INCREMENTAR A TRAVES DE METAMASK
		//  para esta prueba se deja así para no tener que estar empleando metamask y ser mas rápido
		var web3;
			if (typeof web3 !== 'undefined') {
				web3 = new Web3(web3.currentProvider);
			} else {
				//  Especificamos el provider 
				// empleando chrome con MetaMask el provider es injectado automaticamente
				web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
			} 

			//console.log(web3.eth.accounts);
			var account = web3.eth.accounts[0];
		//

		instancia.deployed().then(function(instanciaContrato){
			return instanciaContrato.increment({from: account, gas:200000}).then(function(res, err){
				if(err){
					console.log("ERROR");
					console.log(err);
					//return error(err);
				} else {
					console.log("+1 succes");
				}				
			});
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

		return (
			<div>
				<h1> Page under construction </h1>
				<h4> El contado está a : </h4>
				<button onClick={this.incrementClick}>Increment</button>				
			</div>
		);
	}
}


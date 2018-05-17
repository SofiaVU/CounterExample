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
		this.eventToAction = this.eventToAction.bind(this);

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
			filter: null,
		});	

		// LANZAMOS WATCH
		var ppp = event.watch(function(err, event){
			//console.log(event);
			if (err){
				console.log(err);
			} else {
				console.log("This is the event!");
				console.log(event);
				console.log("Count was incremented by: " + event.args.who);
				console.log("The counter has been updated up to: " + event.args.amount);
				//return event.args.amount;
				// AQUI DEBERÍA IR LA ACTUALIZACION DEL ESTADO, de la variable cuenta que mostraria el dom
				// cada vez que se detecta un evento- es decir que se ha pulsado incrementar
				// se jejuta este trozo , es decir las lineas de codigo dentro del watch
				//  pero no puedo ni llamar a funciones de la clase App ni devilver un resultado
				return( 
					//console.log("SUCCESS")
					//console.log(event.args.amount.toNumber())
					//event.args.amount.toNumber()
					//this.setState({cuenta: event.args.amount});
					//this.render();
					JSON.stringify(event.args)
				);
			}
		});
		this.eventToAction(ppp);
		//event.watch(eventToAction("incremented"));

		var qqq = contrato.Increment({}, { fromBlock: 0, toBlock: 'latest' }).get((error, results) => {
		    //console.log(JSON.stringify(results));
		    return (JSON.stringify(results));
		});
		var logs = await qqq.get(function(err, logs){
			console.log("LOGS");
			console.log(logs);
			return logs[0];
		});
		console.log("OUT");
		console.log(logs);

		console.log("qqq");
		console.log(qqq);


		console.log("event watch has been started");
	}
	/*
	*
	*/
	async eventToAction(event) {
		console.log("SIIIIIUUUUUUU");
		console.log(event);
		//console.log(event.getLogsCallbacks[0]);
		/*var xxx = await event.callbacks[0].then(function(err, res){
			console.log(res);
		});*/
		//console.log(xxx);
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

		console.log(this.state.cuenta);
		console.log(this.state.event);

		return (
			<div>
				<h1> Page under construction </h1>
				<h4> El contado está a : {this.state.cuenta} </h4>
				<button onClick={this.incrementClick}>Increment</button>				
			</div>
		);
	}
}


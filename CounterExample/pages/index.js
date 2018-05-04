import React from 'react';
import { default as Web3} from 'web3';
import contractArtifact from '../build/contracts/CounterEvents.json'
import { default as contract } from 'truffle-contract'

export default class App extends React.Component{

	constructor(props){
		super(props);
		this.state = ({
			counterContract: null,
			contrato: null, 
			counter: null,
			event: null, 
		});
		this.incrementClick = this.incrementClick.bind(this);
		//this.createEvents = this.createEvents.bind(this);
		//this.state.event = this.state.contrato.Increment();
		
	}

	async componentWillMount(){
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
		var contrato = await theContractInstance.deployed().then(function(instanciaContrato){
			return instanciaContrato;
		});
		//console.log(contrato);

		// EVENTO 
		var event = contrato.Increment();
		//console.log(event);		

		this.setState({
			counterContract: theContractInstance,
			contrato: contrato, 
			event: event,
		});		
	}


	// metodo que incrementa el countador 
	incrementClick(){
		var instancia = this.state.counterContract;
		instancia.deployed().then(function(instanciaContrato){
			return instanciaContrato.increment.call().then(function(res, err){
				if(err){
					console.log(err);
					//return error(err);
				} else {
					console.log("+1 succes");
				}				
			});
		});		
	}


	render(){

		//console.log(this.state.event); 
		if (this.state.event != null) {
			console.log("KKKK");
			this.state.event.watch((err, event) => {
				console.log("KKKK");
				console.log(event);
				if (err){
					console.log(err);
				} else {
					console.log("This is the event!");
					conosle.log(event);
					conosle.log("Count was incremented by: " + event.args.who);
					conosle.log("The counter has been updated up to: " + event.args.amount);
				}
			});
		}
		

		return (
			<div>
				<h1> Page under construction </h1>
				<h4> El contado está a : {this.props.counter}</h4>
				<button onClick={this.incrementClick}>Increment</button>
			</div>
		);
	}
}
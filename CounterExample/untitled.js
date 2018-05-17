
		// WATCH EVENT 		
		
		var kk = instancia.deployed().then(function(instanciaContrato){
			//console.log(instanciaContrato.Increment);
			console.log("traza 1");
			//return instanciaContrato.Increment().watch(function(err, result){
			return instanciaContrato.Increment(function(err, result){
				console.log("Traza2");
				if(err){
					console.log(err);
					//return error(err);
				} else {
					//console.log("+1 succes");
					conosle.log("Count was incremented by: " + result.args.who);
					return (result.args.who);
				}
			});
			//console.log(caca);
			
		}); console.log(kk); 

		////////////////////////////////////////////////////////////////////////////////////////////


		<button onClick={this.incrementClick}>Increment</button>

		//////////////////////////////////////////////////////////////////////////////////////////

		/*async createEvents() {
		var instancia;
		var contrato = this.state.counterContract;

		instancia = await contrato.deployed().then(function(instanciaContrato){
			return instanciaContrato;
		});

		console.log(instancia)

		return instancia;
	}*/


	
webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../../../node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web3__ = __webpack_require__("./node_modules/web3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__build_contracts_CounterEvents_json__ = __webpack_require__("./build/contracts/CounterEvents.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__build_contracts_CounterEvents_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__build_contracts_CounterEvents_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_truffle_contract__ = __webpack_require__("./node_modules/truffle-contract/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_truffle_contract__);

var _jsxFileName = '/home/sofiavidal/Escritorio/ProyectoCONTADOR-Prueba-UI/CounterExample/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			counterContract: null,
			/*contrato: null, */
			cuenta: null,
			event: null
		};
		_this.incrementClick = _this.incrementClick.bind(_this);
		return _this;
	}

	/*
 * Invocado 1 vez antes de que el render inicial ocurra 
 */

	_createClass(App, [{
		key: 'componentWillMount',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
				var web3, theContractInstance, contrato, event;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (typeof web3 !== 'undefined') {
									web3 = new __WEBPACK_IMPORTED_MODULE_2_web3___default.a(web3.currentProvider);
								} else {
									//  Especificamos el provider 
									// empleando chrome con MetaMask el provider es injectado automaticamente
									web3 = new __WEBPACK_IMPORTED_MODULE_2_web3___default.a(new __WEBPACK_IMPORTED_MODULE_2_web3___default.a.providers.HttpProvider("http://localhost:7545"));
								}

								// TODO ESTO SOBRA PORQUE USAMOS LA EXTENSION METAMASK
								theContractInstance = __WEBPACK_IMPORTED_MODULE_4_truffle_contract___default()(__WEBPACK_IMPORTED_MODULE_3__build_contracts_CounterEvents_json___default.a);

								theContractInstance.setProvider(web3.currentProvider);

								// CONTRATO		
								_context.next = 5;
								return theContractInstance.deployed();

							case 5:
								contrato = _context.sent;
								// ESTO YA ME GUARDA EL CONTRATO
								//console.log(contrato);

								// EVENTO 
								event = contrato.Increment();
								//console.log(event);		

								this.setState({
									counterContract: theContractInstance,
									/*contrato: contrato, */
									event: event,
									cuenta: null,
									filter: null
								});

								// LANZAMOS WATCH
								event.watch(function (err, event) {
									//console.log(event);
									if (err) {
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
									}
								});
								console.log("event watch has been started");

							case 10:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentWillMount() {
				return _ref.apply(this, arguments);
			}

			return componentWillMount;
		}()

		/*
  * metodo que incrementa el countador 
  */

	}, {
		key: 'incrementClick',
		value: function incrementClick() {

			var instancia = this.state.counterContract;

			// ESTO SE QUITARIA DE MODO QUE EL USUARIO PAGA POR INCREMENTAR A TRAVES DE METAMASK
			//  para esta prueba se deja así para no tener que estar empleando metamask y ser mas rápido
			var web3;
			if (typeof web3 !== 'undefined') {
				web3 = new __WEBPACK_IMPORTED_MODULE_2_web3___default.a(web3.currentProvider);
			} else {
				//  Especificamos el provider 
				// empleando chrome con MetaMask el provider es injectado automaticamente
				web3 = new __WEBPACK_IMPORTED_MODULE_2_web3___default.a(new __WEBPACK_IMPORTED_MODULE_2_web3___default.a.providers.HttpProvider("http://localhost:7545"));
			}

			//console.log(web3.eth.accounts);
			var account = web3.eth.accounts[0];
			//

			instancia.deployed().then(function (instanciaContrato) {
				return instanciaContrato.increment({ from: account, gas: 200000 }).then(function (res, err) {
					if (err) {
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

	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {

			// TEAR DOWN WATCH
			this.state.event.stopWatching();
			console.log("watch has been tore down");
		}
	}, {
		key: 'render',
		value: function render() {

			console.log(this.state.cuenta);

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 127
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'h1',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 128
						}
					},
					' Page under construction '
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'h4',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 129
						}
					},
					' El contado est\xE1 a : ',
					this.state.cuenta,
					' '
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'button',
					{ onClick: this.incrementClick, __source: {
							fileName: _jsxFileName,
							lineNumber: 130
						}
					},
					'Increment'
				)
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return App;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(App, 'App', '/home/sofiavidal/Escritorio/ProyectoCONTADOR-Prueba-UI/CounterExample/pages/index.js');
	reactHotLoader.register(_default, 'default', '/home/sofiavidal/Escritorio/ProyectoCONTADOR-Prueba-UI/CounterExample/pages/index.js');
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.d740572e4da77a03480b.hot-update.js.map
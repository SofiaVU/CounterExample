module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/contracts/CounterEvents.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"CounterEvents","abi":[{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"who","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Increment","type":"event"},{"constant":false,"inputs":[],"name":"increment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526000805534801561001457600080fd5b50610144806100246000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306661abd14610051578063d09de08a1461007c575b600080fd5b34801561005d57600080fd5b50610066610093565b6040518082815260200191505060405180910390f35b34801561008857600080fd5b50610091610099565b005b60005481565b600160008082825401925050819055507fb182275171042022ff972a26edbd0171bccc74463bd22e56dbbeba4e93b7a66833600054604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15600a165627a7a72305820509b543827e189fbf618a7600f3347db0e0bafee5df4b378d936584a464fd6850029","deployedBytecode":"0x60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306661abd14610051578063d09de08a1461007c575b600080fd5b34801561005d57600080fd5b50610066610093565b6040518082815260200191505060405180910390f35b34801561008857600080fd5b50610091610099565b005b60005481565b600160008082825401925050819055507fb182275171042022ff972a26edbd0171bccc74463bd22e56dbbeba4e93b7a66833600054604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15600a165627a7a72305820509b543827e189fbf618a7600f3347db0e0bafee5df4b378d936584a464fd6850029","sourceMap":"53:309:0:-;;;105:1;82:24;;53:309;8:9:-1;5:2;;;30:1;27;20:12;5:2;53:309:0;;;;;;;","deployedSourceMap":"53:309:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;82:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;82:24:0;;;;;;;;;;;;;;;;;;;;;;;185:175;;8:9:-1;5:2;;;30:1;27;20:12;5:2;185:175:0;;;;;;82:24;;;;:::o;185:175::-;287:1;278:5;;:10;;;;;;;;;;;303:28;313:10;325:5;;303:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;185:175::o","source":"//pragma solidity ^0.4.21;\npragma solidity ^0.4.19;\n\ncontract CounterEvents {\n    uint256 public count = 0;\n\n    event Increment(address who, uint256 amount);   // declaring event\n\n    function increment() public {\n        //emit Increment(msg.sender); // logging event\n        count += 1;\n        emit Increment(msg.sender, count);\n        //count += 1;\n    }\n}\n","sourcePath":"/home/sofiavidal/Escritorio/ProyectoCONTADOR-Prueba-UI/contracts/counterEvents.sol","ast":{"absolutePath":"/home/sofiavidal/Escritorio/ProyectoCONTADOR-Prueba-UI/contracts/counterEvents.sol","exportedSymbols":{"CounterEvents":[25]},"id":26,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"27:24:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":25,"linearizedBaseContracts":[25],"name":"CounterEvents","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":4,"name":"count","nodeType":"VariableDeclaration","scope":25,"src":"82:24:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":2,"name":"uint256","nodeType":"ElementaryTypeName","src":"82:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":3,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"105:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"anonymous":false,"documentation":null,"id":10,"name":"Increment","nodeType":"EventDefinition","parameters":{"id":9,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6,"indexed":false,"name":"who","nodeType":"VariableDeclaration","scope":10,"src":"129:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5,"name":"address","nodeType":"ElementaryTypeName","src":"129:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":8,"indexed":false,"name":"amount","nodeType":"VariableDeclaration","scope":10,"src":"142:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7,"name":"uint256","nodeType":"ElementaryTypeName","src":"142:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"128:29:0"},"src":"113:45:0"},{"body":{"id":23,"nodeType":"Block","src":"213:147:0","statements":[{"expression":{"argumentTypes":null,"id":15,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":13,"name":"count","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4,"src":"278:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":14,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"287:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"278:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":16,"nodeType":"ExpressionStatement","src":"278:10:0"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":18,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"313:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":19,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"313:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":20,"name":"count","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4,"src":"325:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":17,"name":"Increment","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":10,"src":"303:9:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,uint256)"}},"id":21,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"303:28:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":22,"nodeType":"EmitStatement","src":"298:33:0"}]},"documentation":null,"id":24,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"increment","nodeType":"FunctionDefinition","parameters":{"id":11,"nodeType":"ParameterList","parameters":[],"src":"203:2:0"},"payable":false,"returnParameters":{"id":12,"nodeType":"ParameterList","parameters":[],"src":"213:0:0"},"scope":25,"src":"185:175:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":26,"src":"53:309:0"}],"src":"27:336:0"},"legacyAST":{"absolutePath":"/home/sofiavidal/Escritorio/ProyectoCONTADOR-Prueba-UI/contracts/counterEvents.sol","exportedSymbols":{"CounterEvents":[25]},"id":26,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"27:24:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":25,"linearizedBaseContracts":[25],"name":"CounterEvents","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":4,"name":"count","nodeType":"VariableDeclaration","scope":25,"src":"82:24:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":2,"name":"uint256","nodeType":"ElementaryTypeName","src":"82:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":3,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"105:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"anonymous":false,"documentation":null,"id":10,"name":"Increment","nodeType":"EventDefinition","parameters":{"id":9,"nodeType":"ParameterList","parameters":[{"constant":false,"id":6,"indexed":false,"name":"who","nodeType":"VariableDeclaration","scope":10,"src":"129:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":5,"name":"address","nodeType":"ElementaryTypeName","src":"129:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":8,"indexed":false,"name":"amount","nodeType":"VariableDeclaration","scope":10,"src":"142:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":7,"name":"uint256","nodeType":"ElementaryTypeName","src":"142:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"128:29:0"},"src":"113:45:0"},{"body":{"id":23,"nodeType":"Block","src":"213:147:0","statements":[{"expression":{"argumentTypes":null,"id":15,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":13,"name":"count","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4,"src":"278:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":14,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"287:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"278:10:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":16,"nodeType":"ExpressionStatement","src":"278:10:0"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":18,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":40,"src":"313:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":19,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"313:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":20,"name":"count","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4,"src":"325:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":17,"name":"Increment","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":10,"src":"303:9:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,uint256)"}},"id":21,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"303:28:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":22,"nodeType":"EmitStatement","src":"298:33:0"}]},"documentation":null,"id":24,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"increment","nodeType":"FunctionDefinition","parameters":{"id":11,"nodeType":"ParameterList","parameters":[],"src":"203:2:0"},"payable":false,"returnParameters":{"id":12,"nodeType":"ParameterList","parameters":[],"src":"213:0:0"},"scope":25,"src":"185:175:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":26,"src":"53:309:0"}],"src":"27:336:0"},"compiler":{"name":"solc","version":"0.4.23+commit.124ca40d.Emscripten.clang"},"networks":{"1524755984611":{"events":{},"links":{},"address":"0x8934dddc75f8f95a4d772c3288ecf2663d324ed7","transactionHash":"0xf07b5f0f65c1328c685f8632b511c70167a6a1f23737149ff5b88eab9c1f362f"},"1524761607047":{"events":{},"links":{},"address":"0x9e6c86751419763cd581a304e641e76fd973f135","transactionHash":"0xf07b5f0f65c1328c685f8632b511c70167a6a1f23737149ff5b88eab9c1f362f"},"1524767819304":{"events":{},"links":{},"address":"0x21d2443788d2442c4b3a2b7e9875bf9fb1e78519","transactionHash":"0x01a0920c63f546b3a2444c292a98bd284026cf60a593ecfcf41c4b6ffa8d26c7"},"1525276425954":{"events":{},"links":{},"address":"0x18913c972a0b2925246c0ddfca105ef3d519e447","transactionHash":"0x01a0920c63f546b3a2444c292a98bd284026cf60a593ecfcf41c4b6ffa8d26c7"},"1525276711414":{"events":{},"links":{},"address":"0x2481fb0b91863ef3a56f58a69bf11db19d0b97f6","transactionHash":"0x97b366e6d2c66d44f927594fc2f4f83a4ddc01f9f3075eb3e91c819d163f0bf5"},"1525429747105":{"events":{},"links":{},"address":"0x5884dceed57bd9fd1377be3e0904055db9534be0","transactionHash":"0x97b366e6d2c66d44f927594fc2f4f83a4ddc01f9f3075eb3e91c819d163f0bf5"},"1525431077308":{"events":{},"links":{},"address":"0x86463e571d1ca86b7d241768a8e16714bce920e5","transactionHash":"0x97b366e6d2c66d44f927594fc2f4f83a4ddc01f9f3075eb3e91c819d163f0bf5"}},"schemaVersion":"2.0.0","updatedAt":"2018-05-04T10:52:22.410Z"}

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web3__ = __webpack_require__("web3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__build_contracts_CounterEvents_json__ = __webpack_require__("./build/contracts/CounterEvents.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__build_contracts_CounterEvents_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__build_contracts_CounterEvents_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_truffle_contract__ = __webpack_require__("truffle-contract");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_truffle_contract__);

var _jsxFileName = '/home/sofiavidal/Escritorio/ProyectoCONTADOR-Prueba-UI/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			contrato: null,
			counter: null,
			event: null
		};
		_this.incrementClick = _this.incrementClick.bind(_this);
		//this.createEvents = this.createEvents.bind(this);
		//this.state.event = this.state.contrato.Increment();

		return _this;
	}

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

								theContractInstance = __WEBPACK_IMPORTED_MODULE_4_truffle_contract___default()(__WEBPACK_IMPORTED_MODULE_3__build_contracts_CounterEvents_json___default.a);

								theContractInstance.setProvider(web3.currentProvider);

								// CONTRATO
								_context.next = 5;
								return theContractInstance.deployed().then(function (instanciaContrato) {
									return instanciaContrato;
								});

							case 5:
								contrato = _context.sent;

								//console.log(contrato);

								// EVENTO 
								event = contrato.Increment();
								//console.log(event);		

								this.setState({
									counterContract: theContractInstance,
									contrato: contrato,
									event: event
								});

							case 8:
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

		// metodo que incrementa el countador 

	}, {
		key: 'incrementClick',
		value: function incrementClick() {
			var instancia = this.state.counterContract;
			instancia.deployed().then(function (instanciaContrato) {
				return instanciaContrato.increment.call().then(function (res, err) {
					if (err) {
						console.log(err);
						//return error(err);
					} else {
						console.log("+1 succes");
					}
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {

			//console.log(this.state.event); 
			if (this.state.event != null) {
				console.log("KKKK");
				this.state.event.watch(function (err, event) {
					console.log("KKKK");
					console.log(event);
					if (err) {
						console.log(err);
					} else {
						console.log("This is the event!");
						conosle.log(event);
						conosle.log("Count was incremented by: " + event.args.who);
						conosle.log("The counter has been updated up to: " + event.args.amount);
					}
				});
			}

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 90
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'h1',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 91
						}
					},
					' Page under construction '
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'h4',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 92
						}
					},
					' El contado est\xE1 a : ',
					this.props.counter
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'button',
					{ onClick: this.incrementClick, __source: {
							fileName: _jsxFileName,
							lineNumber: 93
						}
					},
					'Increment'
				)
			);
		}
	}]);

	return App;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "truffle-contract":
/***/ (function(module, exports) {

module.exports = require("truffle-contract");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
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

module.exports = {"contractName":"CounterEvents","abi":[{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"who","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Increment","type":"event"},{"constant":false,"inputs":[],"name":"increment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526000805534801561001457600080fd5b50610144806100246000396000f30060806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306661abd14610051578063d09de08a1461007c575b600080fd5b34801561005d57600080fd5b50610066610093565b6040518082815260200191505060405180910390f35b34801561008857600080fd5b50610091610099565b005b60005481565b600160008082825401925050819055507fb182275171042022ff972a26edbd0171bccc74463bd22e56dbbeba4e93b7a66833600054604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15600a165627a7a723058200b8b5370fde91e10e97f36901ad0afedcc870b8d917a3228e054ba657bacbbdc0029","deployedBytecode":"0x60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306661abd14610051578063d09de08a1461007c575b600080fd5b34801561005d57600080fd5b50610066610093565b6040518082815260200191505060405180910390f35b34801561008857600080fd5b50610091610099565b005b60005481565b600160008082825401925050819055507fb182275171042022ff972a26edbd0171bccc74463bd22e56dbbeba4e93b7a66833600054604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15600a165627a7a723058200b8b5370fde91e10e97f36901ad0afedcc870b8d917a3228e054ba657bacbbdc0029","sourceMap":"53:309:1:-;;;105:1;82:24;;53:309;8:9:-1;5:2;;;30:1;27;20:12;5:2;53:309:1;;;;;;;","deployedSourceMap":"53:309:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;82:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;82:24:1;;;;;;;;;;;;;;;;;;;;;;;185:175;;8:9:-1;5:2;;;30:1;27;20:12;5:2;185:175:1;;;;;;82:24;;;;:::o;185:175::-;287:1;278:5;;:10;;;;;;;;;;;303:28;313:10;325:5;;303:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;185:175::o","source":"//pragma solidity ^0.4.21;\npragma solidity ^0.4.19;\n\ncontract CounterEvents {\n    uint256 public count = 0;\n\n    event Increment(address who, uint256 amount);   // declaring event\n\n    function increment() public {\n        //emit Increment(msg.sender); // logging event\n        count += 1;\n        emit Increment(msg.sender, count);\n        //count += 1;\n    }\n}\n","sourcePath":"/home/sofiavidal/Escritorio/ProyectoCONTADOR-Prueba-UI/CounterExample/contracts/counterEvents.sol","ast":{"absolutePath":"/home/sofiavidal/Escritorio/ProyectoCONTADOR-Prueba-UI/CounterExample/contracts/counterEvents.sol","exportedSymbols":{"CounterEvents":[82]},"id":83,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"27:24:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":82,"linearizedBaseContracts":[82],"name":"CounterEvents","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":61,"name":"count","nodeType":"VariableDeclaration","scope":82,"src":"82:24:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":59,"name":"uint256","nodeType":"ElementaryTypeName","src":"82:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":60,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"105:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"anonymous":false,"documentation":null,"id":67,"name":"Increment","nodeType":"EventDefinition","parameters":{"id":66,"nodeType":"ParameterList","parameters":[{"constant":false,"id":63,"indexed":false,"name":"who","nodeType":"VariableDeclaration","scope":67,"src":"129:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":62,"name":"address","nodeType":"ElementaryTypeName","src":"129:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":65,"indexed":false,"name":"amount","nodeType":"VariableDeclaration","scope":67,"src":"142:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":64,"name":"uint256","nodeType":"ElementaryTypeName","src":"142:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"128:29:1"},"src":"113:45:1"},{"body":{"id":80,"nodeType":"Block","src":"213:147:1","statements":[{"expression":{"argumentTypes":null,"id":72,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":70,"name":"count","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":61,"src":"278:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":71,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"287:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"278:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":73,"nodeType":"ExpressionStatement","src":"278:10:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":75,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":97,"src":"313:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"313:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":77,"name":"count","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":61,"src":"325:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":74,"name":"Increment","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":67,"src":"303:9:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,uint256)"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"303:28:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"EmitStatement","src":"298:33:1"}]},"documentation":null,"id":81,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"increment","nodeType":"FunctionDefinition","parameters":{"id":68,"nodeType":"ParameterList","parameters":[],"src":"203:2:1"},"payable":false,"returnParameters":{"id":69,"nodeType":"ParameterList","parameters":[],"src":"213:0:1"},"scope":82,"src":"185:175:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":83,"src":"53:309:1"}],"src":"27:336:1"},"legacyAST":{"absolutePath":"/home/sofiavidal/Escritorio/ProyectoCONTADOR-Prueba-UI/CounterExample/contracts/counterEvents.sol","exportedSymbols":{"CounterEvents":[82]},"id":83,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.4",".19"],"nodeType":"PragmaDirective","src":"27:24:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":82,"linearizedBaseContracts":[82],"name":"CounterEvents","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":61,"name":"count","nodeType":"VariableDeclaration","scope":82,"src":"82:24:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":59,"name":"uint256","nodeType":"ElementaryTypeName","src":"82:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":{"argumentTypes":null,"hexValue":"30","id":60,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"105:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"},"visibility":"public"},{"anonymous":false,"documentation":null,"id":67,"name":"Increment","nodeType":"EventDefinition","parameters":{"id":66,"nodeType":"ParameterList","parameters":[{"constant":false,"id":63,"indexed":false,"name":"who","nodeType":"VariableDeclaration","scope":67,"src":"129:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":62,"name":"address","nodeType":"ElementaryTypeName","src":"129:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":65,"indexed":false,"name":"amount","nodeType":"VariableDeclaration","scope":67,"src":"142:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":64,"name":"uint256","nodeType":"ElementaryTypeName","src":"142:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"128:29:1"},"src":"113:45:1"},{"body":{"id":80,"nodeType":"Block","src":"213:147:1","statements":[{"expression":{"argumentTypes":null,"id":72,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":70,"name":"count","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":61,"src":"278:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"hexValue":"31","id":71,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"287:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"278:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":73,"nodeType":"ExpressionStatement","src":"278:10:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":75,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":97,"src":"313:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"313:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":77,"name":"count","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":61,"src":"325:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":74,"name":"Increment","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":67,"src":"303:9:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,uint256)"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"303:28:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"EmitStatement","src":"298:33:1"}]},"documentation":null,"id":81,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"increment","nodeType":"FunctionDefinition","parameters":{"id":68,"nodeType":"ParameterList","parameters":[],"src":"203:2:1"},"payable":false,"returnParameters":{"id":69,"nodeType":"ParameterList","parameters":[],"src":"213:0:1"},"scope":82,"src":"185:175:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":83,"src":"53:309:1"}],"src":"27:336:1"},"compiler":{"name":"solc","version":"0.4.23+commit.124ca40d.Emscripten.clang"},"networks":{"1524755984611":{"events":{},"links":{},"address":"0x8934dddc75f8f95a4d772c3288ecf2663d324ed7","transactionHash":"0xf07b5f0f65c1328c685f8632b511c70167a6a1f23737149ff5b88eab9c1f362f"},"1524761607047":{"events":{},"links":{},"address":"0x9e6c86751419763cd581a304e641e76fd973f135","transactionHash":"0xf07b5f0f65c1328c685f8632b511c70167a6a1f23737149ff5b88eab9c1f362f"},"1524767819304":{"events":{},"links":{},"address":"0x21d2443788d2442c4b3a2b7e9875bf9fb1e78519","transactionHash":"0x01a0920c63f546b3a2444c292a98bd284026cf60a593ecfcf41c4b6ffa8d26c7"},"1525276425954":{"events":{},"links":{},"address":"0x18913c972a0b2925246c0ddfca105ef3d519e447","transactionHash":"0x01a0920c63f546b3a2444c292a98bd284026cf60a593ecfcf41c4b6ffa8d26c7"},"1525276711414":{"events":{},"links":{},"address":"0x2481fb0b91863ef3a56f58a69bf11db19d0b97f6","transactionHash":"0x97b366e6d2c66d44f927594fc2f4f83a4ddc01f9f3075eb3e91c819d163f0bf5"},"1525429747105":{"events":{},"links":{},"address":"0x5884dceed57bd9fd1377be3e0904055db9534be0","transactionHash":"0x97b366e6d2c66d44f927594fc2f4f83a4ddc01f9f3075eb3e91c819d163f0bf5"},"1525431077308":{"events":{},"links":{},"address":"0x86463e571d1ca86b7d241768a8e16714bce920e5","transactionHash":"0x97b366e6d2c66d44f927594fc2f4f83a4ddc01f9f3075eb3e91c819d163f0bf5"},"1525433952136":{"events":{},"links":{},"address":"0x1d0c420e668bf1d8a2a0b93ab53d235fb15be168","transactionHash":"0xbfc632b8762e79d79c9ce0256e72107f2b7c2064a865ba39bcf56cf0fc717937"},"1526552553447":{"events":{},"links":{},"address":"0x19289afd4082ffd65ce57f2105496469ea6138f2","transactionHash":"0xbfc632b8762e79d79c9ce0256e72107f2b7c2064a865ba39bcf56cf0fc717937"},"1526554397516":{"events":{},"links":{},"address":"0x28b24c2345625fde371df325cb09bd133e41156e","transactionHash":"0xbfc632b8762e79d79c9ce0256e72107f2b7c2064a865ba39bcf56cf0fc717937"},"1526554900462":{"events":{},"links":{},"address":"0xadfa0f07d5f60f4349101f2e81d3042fb4b6107d","transactionHash":"0xbfc632b8762e79d79c9ce0256e72107f2b7c2064a865ba39bcf56cf0fc717937"},"1526559643810":{"events":{},"links":{},"address":"0xec1d885cf601076497438d46135b18f33eb2ebda","transactionHash":"0xbfc632b8762e79d79c9ce0256e72107f2b7c2064a865ba39bcf56cf0fc717937"},"1526560570569":{"events":{},"links":{},"address":"0xd114d7d4ac25abb37398cb210834247eb617c6ca","transactionHash":"0xbfc632b8762e79d79c9ce0256e72107f2b7c2064a865ba39bcf56cf0fc717937"}},"schemaVersion":"2.0.0","updatedAt":"2018-05-17T12:36:26.183Z"}

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

var _jsxFileName = '/home/sofiavidal/Escritorio/ProyectoCONTADOR-Prueba-UI/CounterExample/pages/index.js';

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
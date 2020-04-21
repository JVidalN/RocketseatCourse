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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// // // CONCEITOS\n// class List {\n//     constructor() {\n//         this.data = [];\n//     }\n//     add(data) {\n//         this.data.push(data);\n//         console.log(this.data);\n//     }\n// }\n// class TodoList extends List {\n//     constructor() {\n//         super();\n//         this.usuario = 'Jean';\n//     }\n//     mostraUsuario(){\n//         console.log(this.usuario);\n//     }\n// }\n// var MinhaLista = new TodoList();\n// document.getElementById('novotodo').onclick = function() {\n//     MinhaLista.add('Novo todo');\n// }\n// MinhaLista.mostraUsuario();\n//MÉTODOS ESTÁTICOS\n// class Matematica {\n//     static soma(a ,b){\n//         return a + b;\n//     }\n// }\n// console.log(Matematica.soma(1,2));\n// // CONSTANTES\n// // The values can't be changed\n//const a = 1;\n//a = 3;\n// // Only property values can be changed\n//const usuario = {nome:'Jean'};\n//usuario.nome = 'Vidal';\n// // VARIÁVEIS DE ESCOPO\n// function teste(X) {\n//     let y = 2;\n//     if(x > 5){\n//         console.log(x, y);\n//     }\n// }\n// teste(10);\n// // VETORES\n// const arr = [1, 3, 4, 5, 8, 9];\n// const newArr = arr.map(function(item, index) {\n//    return item + index; \n// });\n// console.log(newArr);\n// const sum = arr.reduce(function(total, next) {\n//     return total + next;\n// });\n// console.log(sum);\n// const filter = arr.filter(function(item){\n//     return item % 2 === 0;\n// });\n// console.log(filter);\n// const find = arr.find(function(item) {\n//     return item === 4;\n// });\n// console.log(find);\n// // ARROW FUNCTIONS\n// const arr = [1, 3, 4, 5, 8, 9];\n// const newArr = arr.map(item => item * 2); \n// console.log(newArr);\n// const teste = () => 'teste';\n// console.log(teste());\n// const teste2 = () => ({nome: 'Jean'});\n// console.log(teste2());\n// // VALORES PADRÕES\n// const soma = (a = 3, b = 6) => a + b;\n// console.log(soma(1)); \n// console.log(soma());\n// // DESESTRUTURAÇÃO\n// const usuario = {\n//     nome: 'Jean',\n//     idade: 27,\n//     endereco:{\n//         cidade:'Salvador',\n//         estado:'BA'\n//     }\n// };\n// console.log(usuario);\n// const {nome, idade, endereco: { cidade } } = usuario;\n// console.log(nome);\n// console.log(idade);\n// console.log(cidade);\n// function mostraNome({ nome, idade, endereco: {cidade}}) {\n//     console.log(nome, idade, cidade);\n// }\n// mostraNome(usuario);\n// // OPERADORES REST/SPREAD\n// // REST\n// const usuario = {\n//     nome:'Jean',\n//     idade:23,\n//     empresa:'jtrl'\n// }\n// const {nome, ...resto} = usuario;\n// console.log(nome);\n// console.log(resto);\n// const arr = [1,2,3,4];\n// const [a, b, ...c] = arr;\n// console.log(a);\n// console.log(b);\n// console.log(c);\n// function soma(...params){\n//     return params.reduce((total, next) => total+next);\n// }\n// console.log(soma(1,3,4));\n// // SPREAD\n// const arr1 = [1,2,3];\n// const arr2 = [4,5,6];\n// const arr3 = [...arr1, ...arr2];\n// console.log(arr3);\n// const usuario1 = {\n//     nome:'Jean',\n//     idade: 27,\n//     empresa:'jtrl'\n// };\n// const usuario2 = {...usuario1, nome:'Vidal'};\n// console.log(usuario2);\n// // TEMPLATE LITERALS\n// const nome = 'Jean';\n// const idade = 27;\n// console.log(`Meu nome é ${nome} e tenho ${idade} anos`);\n// // OBJECT SHORT SYNTAX\n// const nome = 'Jean';\n// const idade = 27;\n// const usuario = {\n//     nome,\n//     idade,\n//     empresa:'jtrl'\n// };\n// console.log(usuario);\n// // DESAFIO\n// // Exercício 1\n// class Usuario {\n//     constructor(email, senha){\n//         this.email = email;\n//         this.senha = senha;\n//         this.admin = false;\n//     }\n//     isAdmin(){\n//         return this.admin;\n//     }\n// }\n// class Admin extends Usuario{\n//     constructor(email, senha){\n//         super(email, senha);\n//         this.admin = true;\n//     }\n// }\n// const User1 = new Usuario('email@teste.com', 'senha123');\n// const Adm1 = new Admin('email@teste.com', 'senha123');\n// console.log(User1.isAdmin()) // false\n// console.log(Adm1.isAdmin()) // true\n// // Exercício 2\n// const usuarios = [\n//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },\n//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },\n//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },\n// ];\n// const allYears = usuarios.map(({idade}) => idade);\n// console.log(allYears);\n// const onlyRocketseatJob = usuarios.filter(({empresa, idade}) => empresa === 'Rocketseat' && idade > 18);\n// console.log(onlyRocketseatJob);\n// const onlyGoogletJob = usuarios.find(({ empresa }) => empresa === 'Google');\n// console.log(onlyGoogletJob);\n// const op1 = usuarios.map(({ nome, idade, empresa }) => ({ nome, idade: (idade * 2), empresa}))\n// const op2 = op1.filter(({ idade }) => idade <= 50 );\n// console.log(op2);\n// // Exercício 3\n// 3.1\n// const arr = [1, 2, 3, 4, 5];\n// const arr1 = arr.map(function (item) {\n//                 return item + 10;\n//             });\n// console.log('1', arr1);\n// const arr2 = arr.map(item => item + 10);\n// console.log('2',arr2);\n// // 3.2\n// // Dica: Utilize uma constante pra function\n// const usuario = { nome: 'Diego', idade: 23 };\n// function mostraIdade(usuario) {\n//     return usuario.idade;\n// }\n// mostraIdade(usuario);\n// console.log(mostraIdade(usuario));\n// const mostraIdadeAF = () => idade;\n// console.log(mostraIdade(usuario));\n// // 3.3\n// // Dica: Utilize uma constante pra function\n// const nome = \"Diego\";\n// const idade = 23;\n// function mostraUsuario(nome = 'Diego', idade = 18) {\n//     return { nome, idade };\n// }\n// mostraUsuario(nome, idade);\n// mostraUsuario(nome);\n// console.log(mostraUsuario(nome, idade));\n// console.log(mostraUsuario(nome));\n// const mostraUsuarioAF = (nome = 'Diego', idade = 18) => ({ nome, idade });\n// console.log(mostraUsuarioAF(nome, idade));\n// console.log(mostraUsuarioAF(nome));\n// // 3.4\n// const promise = function () {\n//     return new Promise(function (resolve, reject) {\n//         return resolve();\n//     })\n// }\n// console.log(promise());\n// const primiseAF = () => new Promise((resolve, reject) => resolve());\n// console.log(primiseAF());\n// // // WEBPACK SERVER\n// // TESTE DE CONFIGURAÇÃO DO WEBPACK and IMPORT/EXPORT\n// import { soma as somaRename, sub } from './funcoes';\n// //import mult, { soma as somaRename, sub } from './funcoes';\n// import * as funcoes from './funcoes';\n// import somaFunction from './soma';\n// console.log(funcoes.mult(3, 2));\n// console.log(somaFunction(1, 2));\n// console.log(somaRename(2, 2));\n// console.log(sub(4, 2));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });
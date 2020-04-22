// // // CONCEITOS
// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List {
//     constructor() {
//         super();

//         this.usuario = 'Jean';
//     }

//     mostraUsuario(){
//         console.log(this.usuario);
//     }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();

//MÉTODOS ESTÁTICOS
// class Matematica {
//     static soma(a ,b){
//         return a + b;
//     }
// }

// console.log(Matematica.soma(1,2));

// // CONSTANTES

// // The values can't be changed
//const a = 1;
//a = 3;

// // Only property values can be changed
//const usuario = {nome:'Jean'};
//usuario.nome = 'Vidal';

// // VARIÁVEIS DE ESCOPO
// function teste(X) {
//     let y = 2;

//     if(x > 5){
//         console.log(x, y);
//     }
// }

// teste(10);

// // VETORES
// const arr = [1, 3, 4, 5, 8, 9];

// const newArr = arr.map(function(item, index) {
//    return item + index; 
// });

// console.log(newArr);

// const sum = arr.reduce(function(total, next) {
//     return total + next;
// });

// console.log(sum);

// const filter = arr.filter(function(item){
//     return item % 2 === 0;
// });

// console.log(filter);

// const find = arr.find(function(item) {
//     return item === 4;
// });

// console.log(find);

// // ARROW FUNCTIONS
// const arr = [1, 3, 4, 5, 8, 9];

// const newArr = arr.map(item => item * 2); 

// console.log(newArr);

// const teste = () => 'teste';

// console.log(teste());

// const teste2 = () => ({nome: 'Jean'});

// console.log(teste2());

// // VALORES PADRÕES
// const soma = (a = 3, b = 6) => a + b;

// console.log(soma(1)); 
// console.log(soma());

// // DESESTRUTURAÇÃO
// const usuario = {
//     nome: 'Jean',
//     idade: 27,
//     endereco:{
//         cidade:'Salvador',
//         estado:'BA'
//     }
// };

// console.log(usuario);

// const {nome, idade, endereco: { cidade } } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

// function mostraNome({ nome, idade, endereco: {cidade}}) {
//     console.log(nome, idade, cidade);
// }

// mostraNome(usuario);

// // OPERADORES REST/SPREAD
// // REST
// const usuario = {
//     nome:'Jean',
//     idade:23,
//     empresa:'jtrl'
// }

// const {nome, ...resto} = usuario;

// console.log(nome);
// console.log(resto);

// const arr = [1,2,3,4];

// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// function soma(...params){
//     return params.reduce((total, next) => total+next);
// }

// console.log(soma(1,3,4));

// // SPREAD
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const usuario1 = {
//     nome:'Jean',
//     idade: 27,
//     empresa:'jtrl'
// };

// const usuario2 = {...usuario1, nome:'Vidal'};

// console.log(usuario2);

// // TEMPLATE LITERALS
// const nome = 'Jean';
// const idade = 27;

// console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

// // OBJECT SHORT SYNTAX
// const nome = 'Jean';
// const idade = 27;

// const usuario = {
//     nome,
//     idade,
//     empresa:'jtrl'
// };

// console.log(usuario);

// // DESAFIO

// // Exercício 1

// class Usuario {
//     constructor(email, senha){
//         this.email = email;
//         this.senha = senha;
//         this.admin = false;
//     }

//     isAdmin(){
//         return this.admin;
//     }
// }
// class Admin extends Usuario{
//     constructor(email, senha){
//         super(email, senha);
//         this.admin = true;
//     }
// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true


// // Exercício 2

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
// ];

// const allYears = usuarios.map(({idade}) => idade);
// console.log(allYears);

// const onlyRocketseatJob = usuarios.filter(({empresa, idade}) => empresa === 'Rocketseat' && idade > 18);
// console.log(onlyRocketseatJob);

// const onlyGoogletJob = usuarios.find(({ empresa }) => empresa === 'Google');
// console.log(onlyGoogletJob);

// const op1 = usuarios.map(({ nome, idade, empresa }) => ({ nome, idade: (idade * 2), empresa}))
// const op2 = op1.filter(({ idade }) => idade <= 50 );
// console.log(op2);


// // Exercício 3
// 3.1
// const arr = [1, 2, 3, 4, 5];
// const arr1 = arr.map(function (item) {
//                 return item + 10;
//             });
// console.log('1', arr1);

// const arr2 = arr.map(item => item + 10);
// console.log('2',arr2);

// // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//     return usuario.idade;
// }
// mostraIdade(usuario);
// console.log(mostraIdade(usuario));

// const mostraIdadeAF = () => idade;
// console.log(mostraIdade(usuario));


// // 3.3
// // Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//     return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));

// const mostraUsuarioAF = (nome = 'Diego', idade = 18) => ({ nome, idade });

// console.log(mostraUsuarioAF(nome, idade));
// console.log(mostraUsuarioAF(nome));

// // 3.4
// const promise = function () {
//     return new Promise(function (resolve, reject) {
//         return resolve();
//     })
// }

// console.log(promise());

// const primiseAF = () => new Promise((resolve, reject) => resolve());

// console.log(primiseAF());

// // // WEBPACK SERVER

// // TESTE DE CONFIGURAÇÃO DO WEBPACK and IMPORT/EXPORT
// import { soma as somaRename, sub } from './funcoes';
// //import mult, { soma as somaRename, sub } from './funcoes';
// import * as funcoes from './funcoes';
// import somaFunction from './soma';

// console.log(funcoes.mult(3, 2));
// console.log(somaFunction(1, 2));
// console.log(somaRename(2, 2));
// console.log(sub(4, 2));


// alert('Testando');

// // // Async/Await

// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 2000);
// });

// minhaPromise()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//     });

// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executaPromise();

// const executaPromise = async () =>{
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// };

// executaPromise();

// // // Axios
// import axios from 'axios';

// class Api {
//     static async getUserInfo(userName){
//         try{
//             const response = await axios.get(`https://api.github.com/users/${userName}`);
//             console.log(response);
//         } catch(err) {
//             console.warn('Erro na API');
//         }
//     }
// }

// Api.getUserInfo('jvidaln');


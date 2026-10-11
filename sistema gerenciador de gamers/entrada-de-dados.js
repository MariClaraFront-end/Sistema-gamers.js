const prompt = require('prompt-sync')();

console.log("------Cadastro de Novo Recruta------");
let novoNome = prompt("Digite o nome do jogador: ");

let novaPontuacao = Number(prompt("Digite a pontuação deste jogador: "));

console.log("Sucesso! Jogador "  +  novoNome  + " cadastrado com "   +   novaPontuacao  +      " pontos.");
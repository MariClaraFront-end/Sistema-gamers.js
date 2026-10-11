const prompt = require('prompt-sync')();

let nome = prompt("Nome do Jogador: ");
let pontuacao = Number(prompt("Pontuacao: "));
let pontuacaoMinima = 1000;

console.log("Analisando perfil....");
if(pontuacao >= pontuacaoMinima){

    console.log("APROVADO!!! "    +      nome     +           " Tem nível para equipe principal.");
} else {
    let pontosFaltantes = pontuacaoMinima - pontuacao;
    console.log("REPROVADO! Faltam "   + pontosFaltantes +  " pontos para entrar no time.");
}
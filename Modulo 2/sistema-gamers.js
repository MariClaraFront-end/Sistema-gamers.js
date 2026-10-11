const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("\n==============================");
    console.log("-----SISTEMA DE GAMERS-----");
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostrar Equipe");
    console.log("4 - Cálculo da Média da Equipe");
    console.log("5 - Buscar Jogador");
    console.log("6 - Atualizar Pontos");
    console.log("7 - Sair");
}

function mostrarEquipe() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
    }
}

function cadastrarJogador() {
    let nomeJogador = prompt("Digite o nome do jogador:   ");
    let funcaoJogador = prompt("Digite a função no time: ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida!");
        return;
    } else {
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador,
        };

        time.push(recruta);  
        console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso!");
    }
}

function deletarJogador() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }
    let nomeDeletado = prompt("Digite o nome a ser deletado: ");
    let indexDeletado = -1;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    }

    if (indexDeletado === -1) {
        console.log("Jogador não encontrado.");
        return;
    }

    time.splice(indexDeletado, 1);
    console.log("Jogador deletado com sucesso!");
}
    
function calculoDaMedia() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }
    let totalPontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;
    console.log("O time possui uma pontuação média de: ", mediaPontos);
}

function buscarJogador() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }
    let nomeDesejado = prompt("Digite o nome do jogador que deseja buscar: ");
    console.log("Buscando por: " + nomeDesejado + "...");

    let encontrou = false;

    for (let i = 0; i < time.length; i++) {
        let jogadorAtual = time[i];

        if (jogadorAtual.nome.toLowerCase() === nomeDesejado.toLowerCase()) {
            console.log("Jogador Encontrado!");
            console.log("Nome: " + jogadorAtual.nome + "  | Função: " + jogadorAtual.funcao + " | Pontos: " + jogadorAtual.pontuacao);
            encontrou = true;
            break;
        }
    }

    if (encontrou === false) {
        console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe.");
    }
}

// Nome corrigido para bater com a chamada do menu
function atualizarPontos() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }
    
    console.log("\n---- ATUALIZAÇÃO DE RANKING ----");
    let nomeDesejado = prompt("Qual o nome do jogador que você quer atualizar? ");
    let encontrou = false;

    for (let i = 0; i < time.length; i++) {
        let jogadorAtual = time[i];

        if (jogadorAtual.nome.toLowerCase() === nomeDesejado.toLowerCase()) {
            let pontosAntigos = jogadorAtual.pontuacao;
            let pontosNovos = Number(prompt("Quantos pontos ele ganhou? "));

            if (isNaN(pontosNovos)) {
                console.log("Quantidade de pontos inválida!");
                return;
            }

            jogadorAtual.pontuacao += pontosNovos;

            console.log("\n--- RESULTADO DA ATUALIZAÇÃO ---");
            console.log("Jogador: " + jogadorAtual.nome);
            console.log("Pontuação anterior: " + pontosAntigos);
            console.log("Pontos adicionados: " + pontosNovos);
            console.log("Nova pontuação total: " + jogadorAtual.pontuacao);
            
            encontrou = true;
            break;
        }
    }
    
    if (encontrou === false) {
        console.log("Erro: Jogador não encontrado na equipe.");
    }
}

// Loop principal do menu
while (continuar === true) {
    mostrarMenu();
    let opcao = prompt("Digite sua opção:   ");

    if (opcao === "1") {
        cadastrarJogador();
    } else if (opcao === "2") {
        deletarJogador();
    } else if (opcao === "3") {
        mostrarEquipe();
    } else if (opcao === "4") {
        calculoDaMedia();
    } else if (opcao === "5") {
        buscarJogador();
    } else if (opcao === "6") {
        atualizarPontos();
    } else if (opcao === "7") {
        continuar = false;
        console.log("Saindo do sistema... Até logo");
    } else {
        console.log("Opção inválida, digite outra opção...");
    }
}
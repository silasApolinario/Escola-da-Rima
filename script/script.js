const tela = document.getElementById("tela");
let telaIntervalo = document.getElementById("telaIntervalo");
const palavras = ["bonito", "feio", "alegre", "triste", "bom", "mau", "pequeno", "forte", "internet", "fraco", "feliz", "trabalhador", "futebol", "preguiçoso", "inteligente", "burro", "sábio", "simpático", "antipático", "corajoso", "covarde", "generoso", "humilde", "arrogante", "calmo", "nervoso", "moderno", "antigo", "rico", "background", "pobre", "ruim", "interessante", "chato","quebrada", "saudável", "hospital", "doente", "sujo", "limpo", "simples", "complicado", "maravilhoso", "terrível", "apaixonado", "indiferente", "verde", "vermelho", "azul", "amarelo", "preto", "branco", "cinza", "rosa", "roxo", "dourado", "prateado", "caloroso", "frio", "suave", "áspero", "claro", "escuro", "doce", "zika!", "azedo", "seco", "liso", "brilhante", "fosco", "estado", "aleatório", "inocente", "culpado", "piedoso", "impiedoso", "prestativo", "egoísta", "bêbado", "sóbrio", "barato", "caro", "rápido", "devagar", "fácil", "difícil", "saudoso", "nebuloso", "sério", "engraçado", "afiado", "morno", "gelado", "amplo", "estreito", "baixo", "alto", "tranquilo", "cheio", "vazio", "apertado", "espaçoso", "simples", "complexo", "bonita", "feia", "nova", "velha", "natural", "artificial", "leve", "pesado", "fedorento", "ótimo", "terrível", "importante", "insignificante", "claro", "escuro", "pacífico", "violento", "canino", "hostil", "paciente", "impaciente", "sedento", "faminto", "frágil", "resistente", "esperto", "tonto", "humilde", "arrogante", "caloroso", "gélido", "desajeitado", "amigável", "inimigo", "tímido", "prudente", "imprudente", "emocionado", "apático", "bravo", "intenso", "leve", "insignificante", "romântico", "casa", "vida", "tempo", "homem", "anime", "mulher", "amor", "amigo", "trabalho", "cidade", "família", "mundo", "aluno", "filme", "escola", "coração", "sonho", "pai", "mãe", "filho", "filha", "companheiro", "companheira", "carro", "casa", "livro", "mesa", "computador", "celular", "dinheiro", "corpo", "olho", "mão", "pé", "sorriso", "riso", "luz", "sol", "lua", "estrela", "rio", "mar", "monstro", "ar", "vento", "chuva", "floresta", "montanha", "viagem", "amizade", "alegria", "racismo", "esperança", "liberdade", "paz", "felicidade"];
let intervalTime = 2000; // tempo inicial do setInterval
let intervalSeconds = intervalTime / 1000; // converte o tempo em milissegundos para segundos
let intervalId; // variável para armazenar o ID do intervalo

// função para iniciar o setInterval
function iniciarIntervalo() {
  intervalId = setInterval(exibirPalavraAleatoria, intervalTime);
  document.getElementById("proxima").style.display = "none";
  document.getElementById("tempSegundos").style.display = "inline";
  document.getElementById("aut").style["background-color"] = "aliceblue";
  document.getElementById("aut").style["color"] = "black";
  document.getElementById("manu").style["background-color"] = "black";
  document.getElementById("manu").style["color"] = "aliceblue";
}

// função para desativar o setInterval
function desativarIntervalo() {
  clearInterval(intervalId); // cancela o intervalo anterior
  document.getElementById("proxima").style.display = "inline";
  document.getElementById("tempSegundos").style.display = "none";
  document.getElementById("manu").style["background-color"] = "aliceblue";
  document.getElementById("manu").style["color"] = "black";
  document.getElementById("aut").style["background-color"] = "black";
  document.getElementById("aut").style["color"] = "aliceblue";
}

// função para exibir uma nova palavra aleatória
function exibirPalavraAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * palavras.length); // seleciona um índice aleatório do array
  tela.textContent = palavras[indiceAleatorio]; // exibe a palavra correspondente ao índice aleatório selecionado
}

// funcao tecla espaco para acionar botao
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) { // Verifica se a tecla pressionada é a tecla Espaço (código de tecla 32)
    event.preventDefault(); // Previne o comportamento padrão da tecla Espaço, para evitar a rolagem da página
    exibirPalavraAleatoria(); // Chama a função 'proxima()' para acionar a ação desejada
  }
});

// função para atualizar a exibição do intervalo na tela
function atualizarIntervalo() {
  telaIntervalo.textContent = intervalSeconds + " Seg";
}

// função para aumentar o tempo do setInterval em meio segundo
function aumentarTempo() {
  if (intervalTime + 500 <= 10000) { // verifica se o tempo total não ultrapassa 6 segundos
    intervalTime += 500; // adiciona meio segundo ao tempo
    intervalSeconds = intervalTime / 1000; // atualiza o valor em segundos
    atualizarIntervalo(); // atualiza a exibição na tela
    reiniciarIntervalo(); // reinicia o intervalo com o novo tempo
  }
}

// função para diminuir o tempo do setInterval em meio segundo
function diminuirTempo() {
  if (intervalTime - 500 >= 500) { // verifica se o tempo total não é inferior a meio segundo
    intervalTime -= 500; // subtrai meio segundo do tempo
    intervalSeconds = intervalTime / 1000; // atualiza o valor em segundos
    atualizarIntervalo(); // atualiza a exibição na tela
    reiniciarIntervalo(); // reinicia o intervalo com o novo tempo
  }
}

// função para reiniciar o intervalo com o novo tempo
function reiniciarIntervalo() {
  clearInterval(intervalId); // cancela o intervalo anterior
  intervalId = setInterval(exibirPalavraAleatoria, intervalTime); // cria um novo intervalo com o novo tempo
}

atualizarIntervalo(); // exibe o valor inicial na tela
intervalId = setInterval(exibirPalavraAleatoria, intervalTime); // cria o intervalo inicial

// chama a função para exibir a palavra aleatória inicial na tela
//exibirPalavraAleatoria();


function help(){
  document.getElementById("help").style.display = "inline";
}

function fechar(){
  document.getElementById("help").style.display = "none";
}


function doacao(){
  document.getElementById("doacao").style.display = "inline";
}

function fecharDo(){
  document.getElementById("doacao").style.display = "none";
}

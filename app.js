// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto!";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 30";
let listarNumbers = [];
let limitNumber = 10;
let numeroSecreto = numberAleatorio();
let tentativas = 1;
HomeText();

function exibirTextTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function HomeText(){
    exibirTextTela('h1','Jogo do número secreto');
    exibirTextTela('p',`Escolha um número entre 1 e ${limitNumber}`);
}

function verificarChute() {
    let bottonChute = document.querySelector('input').value;
    if(bottonChute == numeroSecreto){
        let wordCorrect = palavraTentativaFunction(tentativas);
        let msgTentativa = `Parabéns! Você descobriu o número secreto com ${tentativas} ${wordCorrect}!`;
        exibirTextTela('h1','Acertou!');
        exibirTextTela('p', msgTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else{
        if(bottonChute < numeroSecreto){
            exibirTextTela('p','Continue tentando, o número secreto é maior.');
        }
        else{
            exibirTextTela('p','Continue tentando, o número secreto é menor.');
        }
        tentativas++;
        clearCampo();    
    }
}
function numberAleatorio(){
    let numberEscolhido = parseInt(Math.random()*limitNumber + 1);
    let numberList = listarNumbers.length;
    if(numberList == limitNumber){
        listarNumbers = [];
    }
    if(listarNumbers.includes(numberEscolhido)){
        return numberAleatorio();
    } else {
        listarNumbers.push(numberEscolhido);
        console.log(listarNumbers);
        return numberEscolhido;
    }
}
function palavraTentativaFunction(number){
    let palavraTentativa = number == 1 ? 'tentativa' : 'tentativas';
    return palavraTentativa;
}

function clearCampo(){
    bottonChute = document.querySelector('input');
    bottonChute.value = '';
}

function reiniciarGame(){
    numeroSecreto = numberAleatorio();
    clearCampo();
    tentativas = 1;
    HomeText();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
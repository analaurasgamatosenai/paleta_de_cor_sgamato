let tela = document.querySelector("#tela-de-pintura");
let corAzul = document.querySelector("#pincel-azul");
let corVermelho = document.querySelector("#pincel-vermelho");
let corAmarela = document.querySelector("#pincel-amarelo");
let corLaranja = document.querySelector("#pincel-laranja");
let corRoxo = document.querySelector("#pincel-roxo");
let corRosa = document.querySelector("#pincel-rosa");
let corVerde = document.querySelector("#pincel-verde");
let corAzulAgua = document.querySelector("#pincel-azul-agua");
let corMarrom = document.querySelector("#pincel-marrom");


corAzul.addEventListener("click", azul);
corVermelho.addEventListener("click", vermelho);
corAmarela.addEventListener("click", amarelo);
corLaranja.addEventListener("click", laranja);
corRoxo.addEventListener("click", roxo);
corRosa.addEventListener("click", rosa);
corVerde.addEventListener("click", verde);
corAzulAgua.addEventListener("click", azulAgua);
corMarrom.addEventListener("click", marrom);

let nomeCor = document.querySelector("h3")

function azul(){
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul";
}

function vermelho(){
    tela.style.background = "red";
    nomeCor.innerHTML = "Vermelho";
}

function amarelo(){
    tela.style.background = "yellow";
    nomeCor.innerHTML = "Amarelo";
}

function laranja(){
    tela.style.background = "#ff9500";
    nomeCor.innerHTML = "Laranja";
}

function roxo(){
    tela.style.background = "#b311b5";
    nomeCor.innerHTML = "Roxo";
}

function rosa(){
    tela.style.background = "#f254c0";
    nomeCor.innerHTML = "Rosa";
}

function verde(){
    tela.style.background = "#11eb0e";
    nomeCor.innerHTML = "Verde";
}

function azulAgua(){
    tela.style.background = "#00ffd9";
    nomeCor.innerHTML = "Azul Agua";
}

function marrom(){
    tela.style.background = "#a74d23";
    nomeCor.innerHTML = "Marrom";
}
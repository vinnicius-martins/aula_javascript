/*(var nome = "Vinnicius Martins";
var idade = 20;
var idade2 = 10;
//alert(nome + " tem " +idade+ " anos.");
//alert(idade+idade2);
var frase = "Japão é o melhor time do mundo!";
alert(frase.replace("Japão", "Brasil"));*/

//var lista = ["Maçã", "Pêra", "Laranja"];
//lista.push("Uva");
//lista.pop();
//var fruta = {nome: "maça", cor: "vermelho"}
//alert(fruta.cor);

//var fruta = [{nome: "maça", cor: "vermelho"},{nome: "pera", cor: "amarelo"}]
//alert(fruta[1].cor);

/*var idade = prompt("Qual a sua idade?");
if (idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count++;
}
*/

 /*
var count;
for(count=0; count<5; count++){
    console.log(count);
}
*/

/*
var date = new Date();
alert(date.getDay());
alert(date.getDate());
alert(date.getHours());
*/

/*
function soma(n1, n2){
    return n1+n2;
} 

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

//alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
function validaIdade(idade) {
    var validar;
    if(idade>=18){
        validar=true;
    }else{
        validar=false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
alert(validaIdade(idade));
*/

function clicou() {
    //alert("Obrigado por clicar!");
    document.getElementById("agradece").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redireciona() {
    window.open("https://www.google.com.br");
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Pagina carregada");
}

function change(elemento) {
    alert(elemento.value);
}
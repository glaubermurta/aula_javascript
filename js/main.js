function soma(n1, n2){
    return n1 + n2;
}

var  validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
    }

var idade = prompt("Qual a sua Idade?");
validaIdade(idade)
console.log(validar);

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert (d.getMinutes());
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de Idade");
}
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/


/*
var nome= "Glauber Murta";
var idade = 36;
var idade2 = 10;
var frase = "Brasil é o melhor time do mundo";
//alert("Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome)
console.log(frase.toLocaleUpperCase);
*/



//criar a variável para armazenar o valor de nota do primeiro trimestre
let nota1Trim = parseFloat (document.querySelector(".trim1").textContent);
//console apenas para fins de teste
console.log(nota1Trim)
//criar a variável para armazenar o valor de nota do primeiro trimestre
let nota2Trim = parseFloat (document.querySelector(".trim2").textContent);
//console apenas para fins de teste
console.log(nota2Trim)
//criar a variável para armazenar o valor de nota do primeiro trimestre
let nota3Trim = parseFloat (document.querySelector(".trim3").textContent);
//console apenas para fins de teste
console.log(nota3Trim)


let resultado = nota1Trim + nota2Trim + nota3Trim;
console.log(resultado)

let resultadoFinal = document.querySelector(".resultado-final");

if(resultado >=180){
    console.log("aprovado")
    resultadoFinal.textContent = "Sim, Parabens";
} else {
    //se nao, aparece como reprovado e mostra o quanto de nota precisa//
    let notaNecessaria = 180 - (nota1Trim+nota2Trim)
    resultadoFinal.textContent = "Nao, burro!"
}

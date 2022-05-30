let nome = prompt("Digite seu nome");
let altura = prompt("Digite sua altura");
let peso = prompt("Digite seu peso");

function imc (altura, peso) {
    a = Number(altura)
    p = Number(peso)

    let imc = p / (a*a)

    console.log(altura)
    console.log(peso)
    console.log(imc)
}

imc(altura, peso)
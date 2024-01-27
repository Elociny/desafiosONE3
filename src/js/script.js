function resposta(tag, texto) {
    let paragrafo = document.getElementById(tag)
    paragrafo.innerHTML = texto
}

function limparCampos(p, ...ids) {
    ids.forEach(id => {
        let campo = document.getElementById(id)
        campo.value = ""
    })

    let paragrafo = document.getElementById(p)
    paragrafo.innerHTML = ""
}

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(altura, peso) {
    peso = parseFloat(document.getElementById("peso").value)
    altura = parseFloat(document.getElementById("altura").value)

    if (peso <= 0 || altura <= 0) {
        let paragrafo = document.getElementById('resp')
        paragrafo.innerHTML = `Por favor digite valores válidos!`
    } else {
        let imc = peso / (altura * altura)

        if (imc <= 18.5) {
            resposta("resp", `Seu IMC é de: ${imc.toFixed(2)}, em estado de magreza!`)
        } else if (imc > 18.5 && imc <= 24.9) {
            resposta("resp", `Seu IMC é de: ${imc.toFixed(2)}, em estado normal!`)
        } else if (imc > 24.9 && imc <= 29.9) {
            resposta("resp", `Seu IMC é de: ${imc.toFixed(2)}, em estado sobrepeso!`)
        } else if (imc > 29.9 && imc <= 39.9) {
            resposta("resp", `Seu IMC é de: ${imc.toFixed(2)}, em estado de obesidade!`)
        } else {
            resposta("resp", `Seu IMC é de: ${imc.toFixed(2)}, em estado de obesidade grave!`)
        }
    }
}

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial() {
    let num = parseInt(document.getElementById("fatorial").value)

    let fat = 1

    while (num > 1) {
        fat *= num
        num--
    }

    resposta("fat", `O fatorial do número digitado é: ${fat}`)
}

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDollar(dollar) {
    dollar = parseFloat(document.getElementById("dollar").value)

    let real = dollar * 4.80

    resposta("real", `$${dollar} em reais é: R$${real}`)
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function areaPerimetro(alturaRetangulo, largura) {
    alturaRetangulo = parseFloat(document.getElementById("alturaRetangulo").value)
    largura = parseFloat(document.getElementById("largura").value)

    let area = largura * alturaRetangulo
    let perimetro = 2 * (largura + alturaRetangulo)

    resposta("areaPerimetro", `A área e perimetro de um retângulo de base ${largura} e alutura ${alturaRetangulo} é, respectivamente, ${area} e ${perimetro}.`)
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14. C = 2 * pi * raio

function areaPerimetroCirculo(raio) {
    raio = parseFloat(document.getElementById("raio").value)

    let perimetroCirculo = 2 * raio * Math.PI
    let areaCirculo = Math.PI * (Math.pow(raio, 2))

    resposta("areaPerimetroCirculo", `A área e perimetro do circulo de raio ${raio}, respectivamente, é: ${areaCirculo.toFixed(2)} e ${perimetroCirculo.toFixed(2)}`)
}

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada() {
    let numeroTabuada = parseInt(document.getElementById("tabuada").value)
    let contadora = 1
    let resultadoTabuada = ""

    while (contadora <= 10) {
        let linhaTabuada = `${contadora} X ${numeroTabuada} = ${contadora * numeroTabuada} <br>`
        resultadoTabuada += linhaTabuada

        contadora++
    }

    resposta("textoTabuada", resultadoTabuada)
}
console.log('Olá, Javascript!')

var userName = 'Fernando Papito'

document.getElementById('user-name').innerHTML = userName

// Variáveis //

/* var nome = 'Mestre Yoda'
var idade = 100
var jedi = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi) */

// Operadores matemáticos //

/* var n1 = 7
var n2 = 2.5

console.log(typeof n1)
console.log(typeof n2) */

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir

/* 
var total = n1 / n2
console.log(total) */

// Operadores de comparação

/* var v1 = 5
var v2 = '5'

var resultado = v1 !== v2
console.log(resultado) */

// Funções //

/* function soma(n1, n2) {
    console.log(n1 + n2)
}

soma(5, 5) */

/* function boasVindas(nome) {
    alert(nome + ', seja bem-vindo(a)')
}

boasVindas('Agatha') */

/* function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma (5, 5)
console.log(resultado) */

// Controle de fluxos //

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

var saldo = 1000

function saque(valor) {
    if (valor > saldo) {
        console.log('O valor é superior ao saldo')
    } else if (valor > 700) {
        console.log('O valor é superior ao máximo permitido por operação')
    } else {
        saldo = saldo - valor
    }
}

saque(701)

console.log(saldo)

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo 

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação
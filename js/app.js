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

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma (5, 5)
console.log(resultado)
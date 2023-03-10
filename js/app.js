console.log('Olá, Javascript!')

var username = 'Thi Cavalcanti'

document.getElementById('user_name').innerHTML = username


// Declaração de variavel flexivel, com tipagem dinamica//

//var nome = 'Mestre Yoda'
//var idade = 100
//var jedi = true

//console.log (typeof nome)
//console.log (typeof idade)
//console.log (typeof jedi)

//Operadores Matematicos //

//var n1 = 5
//var n2 = 5

//var total = n1 + n2 
//console.log(total)


//  Funções  //

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }

// soma(5,5)

// function BoasVindas(nome) {
//     alert(nome + ', Sejam bem vindo')
// } 
// BoasVindas('Thiago')

// function soma (n1, n2){
//     return n1 + n2
// }

// var resultado = soma(2,2)
// console.log(resultado)


//  Controle de fluxos  // Desenvolvimento guiado por comportamento

// Sendo um cliente correntista
// Posso sacar dinheiro em caixas eletronicos
// Para poder utilizar em locais que não aceitam cartão 



// Cenario 1: Saque com Sucesso 
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do mel saldo

// var saldo = 1000
//     function saque (valor){
//         saldo = saldo - valor 

//     }
//     saque(500)
//     console.log(saldo)


//Cenario 2: Saque com valor acima do Saldo
//Dado que meu saldo é de 1000
//Quando faço um saque de 1001
//Então valor não deve ser deduzido do meu saldo e exibir msg que valor superior ao saldo

// var saldo = 1000    
//     function saque (valor) {

//         if(valor > saldo){
//             alert('Saldo insuficiente')
//     }   else {
//         saldo = saldo - valor
//     }

// }
//     saque(1001)
//     console.log(saldo)


//Cenario 3: Saldo com valor maximo
//Dado que meu saldo é de 1000 
//E valor maximo de saque é de 700
//Quando faço saque de 701
//Então valor não devera ser deduzido do meu saldo
//E Deve mostrar uma msg  de alerta informando limite maximo

var saldo = 1000  
var valormaximo = 1000

    function saque (valor) {

        if(valor > saldo){
            alert('Saldo insuficiente')

        } else if(valor > valormaximo){
            alert('Valor máximo de saque atingido')
        } else {
            saldo = saldo - valor
            console.log('Saque realizado com sucesso!')
        
    }
}
    saque(30)
    console.log('Saldo = ' + saldo)
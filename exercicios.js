//EXERCICIO 1 Crie uma função que recebe por parâmetro uma lista de números e retorne a soma de todos os números pares dessa lista.

let numeros = [12, 15, 16, 18, 23, 40]
let pares = numeros.filter(function(item){
    return (item %2==0)
})
console.log(pares)

let numeros1 = [ 12, 16, 18, 40 ]
let soma = numeros1.reduce(function(pilha, numero1){
        return pilha + numero1
}) 
 console.log(soma)


//Treiando chamar funções

function myFunction(a, b){
   return a===b
}
console.log(myFunction(2,3))
console.log(myFunction(2,2))


//EXERCICIO 5 Crie uma função que recebe uma lista de números por parâmetro e retorne a SOMA de todos os números que são divisíveis por 3.

// let numeros = [12, 15, 16, 18, 23, 40]
//  let impar = numeros.filter(function(item){
//      return (item %3==0)
//  })
//  console.log(impar)

//  let numeros1 = [12, 15, 18]
//  let soma = numeros1.reduce(function(pilha, numero1){
//          return pilha + numero1
//  }) 
//   console.log(soma)
 
//arrow function

let somar = (a, b) => a + b
console.log(somar(5, 5)) 
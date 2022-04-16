     //EXERCICIO 1 Crie uma função que recebe por parâmetro uma lista de números e retorne a soma de todos os números pares dessa lista.

// let numeros = [12, 15, 16, 18, 23, 40]
// let pares = numeros.filter(function(item){
//     return (item %2==0)
// })
// console.log(pares)

// let numeros1 = [ 12, 16, 18, 40 ]
// let soma = numeros1.reduce(function(pilha, numero1){
//         return pilha + numero1
// }) 
//  console.log(soma)


//Treiando chamar funções

// function myFunction(a, b){
//    return a===b
// }
// console.log(myFunction(2,3))
// console.log(myFunction(2,2))


     //EXERCICIO 5 Crie uma função que recebe uma lista de números por parâmetro e retorne a SOMA de todos os números que são divisíveis por 3.

// let num = [12, 15, 16, 18, 23, 40]
//  let impar = numeros.filter(function(item){
//      return (item %3==0)
//  })
//  console.log(impar)

//  let num1 = [12, 15, 18]
//  let somar1 = num1.reduce(function(pilha, num1){
//          return pilha + num1
//  }) 
//   console.log(soma)

//arrow function

// let somar = (a, b) => a + b
// console.log(somar(5, 5)) 

     //exercicio 3 Crie uma função que recebe uma lista de números e retorne somente os números positivos dessa lista. Se não tiver nenhum número positivo no array, retorne a string ‘Não há numeros positivos no array

// let numeroPositivos = [1, -3, 5, 6, -8, -9, 2, 4, -7, 3]
// function pickPositivos(array) {
//   let positivos = array.filter((numero)=>numero > 0)
//     if (positivos.length === 0){
//       return "Nao ha numeros positivos"
//     }
//       return positivos
// }   
//       console.log(pickPositivos(numeroPositivos))
 
    
     //testando  .reduce

 var numeros = [1,2,3,4,6,5,4]
 var total = numeros.reduce(function(total,numeros){
   return total + numeros; 
 }); 
 console.log(total);


 var numeros1 = [25, -10, 45, 30, -25]
 var total = numeros1.reduce(function(total, numeros1){
   return total + numeros1
 })
 console.log(total)

 var numeros2 = [25, -10, 45, 30, -25, 80, -5]
 var total = numeros2.reduce((total, numeros2) => total + numeros2)
 console.log(total)
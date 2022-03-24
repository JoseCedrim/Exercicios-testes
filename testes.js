
//CALLBACKS

//function dobrar (numero){
//   return numero * 2
//}

//function triplicar (numero){
//    return numero * 3
//}

// function VerSeEhPar (numero){
//    return numero % 2 === 0  
// }

// function processar (numero, callback){
//   return callback(numero)
// }
// console.log(processar(20, VerSeEhPar))



//ARRAYS II

// let numeros = [2,8,10,20];
// let dobroNumeros = numeros.map(function(num){
//   return num * 5
// })
// console.log(dobroNumeros)


//let frutas = ["melancia","uva", "melão", "abacaxi"]
//let moraNoMar = frutas.find(function(fruta){
//    return fruta == "abacaxi"
//})
//console.log(moraNoMar)



// let idades = [12, 15, 16, 18, 23, 40]
// let maiores = idades.filter(function(idade){
//    return idade < 18
// })
// console.log (maiores)

// let numeros = [5, 10, 50]
// let soma = numeros.reduce(function(pilha, numero){
//     return pilha + numero

// })
// console.log(soma)


//FOR IN
// let carro = {
//     nome: "audi",
//     ano: "2022"
// }
//  for(let prop in carro){
//      console.log(carro[prop])
//  }



// FOR OF
// let serie = ["friends", "GoT", "Peaky"];
// for(let valor of serie){
//     console.log(valor)
// }


// OBJETO DATE
  //const data = new Date();
   
  //console.log(data.getDay())//monstra o dia em que estamos, contagem começa no domingo(0).
  //console.log(data.getMonth()) //monstra o mes em que estamos, contagem começa no 0.
  //console.log(data.getFullYear()) //monstra o ano em que estamos.
  //console.log(data.getDate())// monstra o dia.


// DESTRUCTURING
//DESTRUCTURING COM OBJETO

// let pessoa = {
//     nome: 'noly',
//     altura: 1.80
// }

// let {nome, altura} = pessoa 
// console.log(altura)

//DESTRUCTURING COM ARRAY
// let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
// let [item1, item2, item3, item4, item5] = destinosIncriveis 
// console.log(item2, item4)
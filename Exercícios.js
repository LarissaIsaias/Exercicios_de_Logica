//Exercício 1
let soma
for(let i = 1; i <= 100; i++){
   soma += i
}
console.log(soma)


//Exercício 2
let tabuada = "", num
num = 5
for(let i = 0; i <= 10; i++){
tabuada += num + 'x' + i + '=' + (num * i) + '\n'
}
console.log(tabuada)


//Exercício 3
let tabuada = "", num
num =  Number(prompt('Digite um número: '))
for(let i = 0; i <= 10; i++){
tabuada += num + 'x' + i + '=' + (num * i) + '\n'
}
console.log(tabuada)


//Exercício 4
let decresc = ''
for(let i = 10; i >= 1; i--){
   decresc += i + '\n'
}
console.log(decresc)


//Exercício 5
let num = ''
for(let i = 1; i <= 20; i++){
    if(i % 2 != 0){
        num += i + '\n'
    }
}
console.log(num)


//Exercício 6
let quadrado = ''
for(let i = 1; i <= 10; i++){
   quadrado += i ** 2 + '\n'
}
console.log(quadrado)



//Exercício 7
let cresc = '', decresc = ''
for(let i = 1; i <= 10; i++){
   cresc += i + '\n'
}
for(let i = 10; i >= 1; i--){
   decresc += i + '\n'
}
console.log('crescente: ' + '\n' + cresc + '\n' + 'decrescente: ' + '\n' + decresc)


//Exercício 8
let fatorial = 1
for(let i = Number(prompt('Digite um número: ')); i >= 1; i--){
   fatorial *= i
}
console.log(fatorial)


//Exercício 9
let numero
for (let i = 1; i <= 100; i++){
   numero += i + '\n'
   if (i % 3 == 0 && i % 5 == 0) {
      console.log ('FizzBuzz')
   }else if (i % 5 ==0){
      console.log('Buzz')
   }else if (i % 3 == 0){
      console.log('Fizz')
   }else{
      console.log(i)
   }
}


//Exercício 10
let divisao = 0
for(let i = 1; i <= 10; i++){
   divisao += 1 / i
}
console.log(divisao)


//Exercício 11
let par = '', impar = ''
for(let i=1; i<=100; i++){
   if (i % 2 == 0) {
      par++
   } else {
      impar++
   }
}
console.log('o meu numero de pares é: ' + par + "\n" + 'o meu numero de impares é: ' + impar)


//Exercício 12
let quantNum, allNum = '', maior = 0, menor = 0
quantNum = Number(prompt('Quantos números você quer digitar?'))
for(let i = 0; i < quantNum; i++){
    let num = Number(prompt('Digite um número:'))
    allNum += num + ' '
    if (i == 0) {
        maior = num
        menor = num
    } else {
        if (num > maior) {
            maior = num
        }
        if (num < menor) {
            menor = num
        }
    }
}
console.log(`Maior número: ${maior}\nMenor número: ${menor}`)


//Exercício 13
let quantNum = Number(prompt("quantos números você quer digitar?")), num = 0, media
for (let i = 1; i <= quantNum; i++){
num += Number(prompt("digite um número: "))
media = num / i
}
console.log(media)


//Exercício 14
let num = Number(prompt("Digite um número: ")), primo = true
if (num <= 1) {
    console.log("O número não é primo.")
} else {
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            primo = false
        }
    }
    if (primo) {
        console.log("O número é primo.")
    } else {
        console.log("O número não é primo.")
    }
}


//Exercício 15
let num = ''
for (let i = 1; i <=50; i++){
    num += i + '\n'
}
console.log(num)

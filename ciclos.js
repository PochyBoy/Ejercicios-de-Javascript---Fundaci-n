var numero = prompt('introduce un numero del 1 al 10')

if(0<numero<11){
  var cuadrado = numero*numero;
  alert('El cuadrado de '+numero+ ' es ' + cuadrado)
}else{
  alert('no es el numero correcto')
}

let final = false;
let numbers = []
let  suma = 0
while(!final){
  let number = prompt('Ingresar numero')
  if(number <= 0){
    final = true
  }else{
    numbers.push(number)
  }
}
numbers.forEach(e =>{
  suma +=parseInt(e)
});
console.log(numbers, suma)


function factorial(x){
    let total = 1
    for (let i=x; i>1; i--){
      total = total *i
    }
    return total
  }
  let res = factorial(15)
  console.log (res)
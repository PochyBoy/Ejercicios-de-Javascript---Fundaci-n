var numero = prompt('introduce un numero del 1 al 10')

if(0<numero<11){
  var cuadrado = numero*numero;
  alert('El cuadrado de '+numero+ ' es ' + cuadrado)
}else{
  alert('no es el numero correcto')
}

function factorial(x){
    let total = 1
    for (let i=x; i>1; i--){
      total = total *i
    }
    return total
  }
  let res = factorial(15)
  console.log (res)
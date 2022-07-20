function comparar(a,b){
    if (a<b) {
      console.log(`${b} es mayor que ${a}`)
      
    }else if(b<a){
      console.log(`${a} es mayor que ${b}`)
    }else{
      console.log('Son numeros del mismo valor')
    }
  }
  comparar(50,50)

  function operacion(a,b,letra){
    if(letra == 's'){
      suma = a+b
      console.log('La suma es '+ suma)
    }else if(letra == 'm'){
      multiplicacion = a*b
      console.log('El producto es ' + multiplicacion)
    }else{
      console.log('opcion desconocida')
    }
  }
  operacion(5,7,'m')

  function anyo(num){
    if((num % 4 == 0 && num % 100 != 0) ||num%400 == 0){
      console.log(`${num} es un año bisiesto`)
    }else{
      console.log(`${num} no es un año bisiesto`)
    }
  }
  anyo(400)
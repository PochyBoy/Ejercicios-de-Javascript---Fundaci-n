function numero (a,b){
  
    console.log('El primer numero es '+ a + ' el segundo numero es ' + b)
 }
 
 numero(3,4)

function mayor(a,b,c){

    if(b<a && c<a){
    console.log(`El numero mayor es ${a}`)
    }else if(c<b && a<b){
    console.log(`El numero mayor es ${b}`)
    }else{
    console.log(`El numero mayor es ${c}`)
    }
  
}
mayor(100,200,300)

function calcula(a,b){
    var X = a 
    var Y = b 
    var S =X + Y 
    var R =X - Y 
    var P =X * Y 
    var D =X / Y 
    console.log(`${X} + ${Y} = ${S}, ${X} - ${Y} = ${R}, ${X} * ${Y} = ${P}, ${X} / ${Y} = ${D}`)
  
    
  
  }
  calcula(100,20)

  function xx(chicos, chicas){
    total = chicos + chicas
    porcentaje= (chicas/total)*100
    console.log(`El porcentaje de chicas es ${porcentaje}%`)
  }
  xx(100,100)
lista.inclues('c') // sirve para saber si ese elemento está en la lista 

//LLAVES U OBJETOS
let alumne{
    nom:"toni", // poner solo una comillap or lado en toni en objeto es valido, pero no en JSON
    email:["toni@email", "toni2@gmail"],
    "adr":{
        "ciuda": "barcelona",
        "carrer": 'llastict'
        "numero" : 2
    }
    saluda: function () {   //"saluda: () => console.log(" hola em dic")"
        console.log(alumne.mon);// toni
        console.log(alumne["nom"]) //toni
        console.log(alumne.adr.ciudad);//barceloana
        console.log(alumne.email[1]);//toni2@gmail
    },
    saluda: function (){
        console.log('hola que tal'+ this.nom)
    }
}

console.log(alumne.mon);// toni
console.log(alumne["nom"]) //toni
console.log(alumne.adr.ciudad);//barceloana
console.log(alumne.email[1]);//toni2@gmail
alumne.salud //sele todos los consoles de contenido en la funcion



let quadrat ={
    costat: 2,
    superfice: function(){ return this.constat*this.constat}
}
s = quadrat
console.log (quadrat.s)



//intereasante sdel signo de interrrogacion

let num = 3
let parell = (3%2 === 0) ?  "SI" : "NO"

if (num%2 === 0){
    parell = "SI"
}else{
    parell = "NO"
}
// transdormar un Json a trabajable en js

let camisaJson='{'color': 'vermen', 'mida': 'xl'}'

let camisa = JSON.parse(camisaJson)

console.log(camisa.color)


// ejemplo de try y catch

let camisaJson='{"color": "vermen", "mida": "xl"}'



try {
  let camisa = JSON.parse(camisaJson);
  console.log(camisa.color)
}catch (e) { console.log("error json")
console.log(camisa.color)}


//THIS!!!!
/* se usa generalmente dentro de una funcion de un bjeto, ya que sirve para poder ser invocado,ya que
al no ser puesto, no se puede acceder a el, es como reemplazar el nombre de la la llave u objeto o sobrepornerlo
*/


// BUQUES ARRAY  -> exlucivo es of e in
a = [1,5,1,2,3,4]
for (x of a){
    console.log(x)
}

// para objetos

let props = Object.keys(a) // Objet.valores(a)
console.log(props)
for (clau of props)
    console.log(a[claau])

//WHILE

while(a<0){
    console.log(a);
    a++;
}

//DATOS cuando el dato está solo es como el momento que tu haz tomado foto

let ara = new Data();
console.log(ara.toString())
let dema = new Data(2001,8,11,9,10,00)
let s11 = new Date("2001/09/11")
console.log(s11.toString())

    

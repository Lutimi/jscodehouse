// var data = ['Nombre','Edad','Fecha de Nacimiento']  
// var pila = [];  
    
// function getInfo(info){
//     return prompt(info);
// }

// function addToArray(item){
//     return pila.push(item);
// }

// data.forEach(ele => addToArray(getInfo(ele)));

// console.log(pila);


// function obtenerData(){
// var nombre = prompt ('Ingresa nombre:');
// var edad =  parseInt(prompt('Ingresa edad:'));
// var fecha = parseInt(prompt('Ingresa año:'))

// var pila = [nombre,edad,fecha]

// console.log('nombre '+ pila[0]+' '+ pila[1]+' Edad'+pila[2]+' año de nacimiento:');

// }

// obtenerData();


// // const multi = (n1,n2) =>  parseFloat (n1 * n2);


// // console.log(multi(20,5)) 


// var persona = { 
//     nombre = 'Luis',
//     apellido = 'Ticona',
//     edad = 21,
//     nacionalidad = 'Peru',
//     ocupacion = 'Estudiante'

// }


var perro = {

    nombre = 'Gigi',
    edad : 9,
    habilidad: 'Jugar',
    peso: 4,
    ladrarAlgo: function(){ console.log('Guaf'+ this.nombre)},
    edadAñosPerro: function() { console.log(this.edad * 7)}

}
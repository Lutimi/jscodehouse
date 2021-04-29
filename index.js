
function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre");
    console.log("El nombre ingresado es " + nombreIngresado);
} 
function solicitarEdad(){
    let edadIngresada  = parseInt(prompt("Ingresar Edad"));
    console.log("La edad ingresada es: " + edadIngresada);
} 


function convertir(dolar){

    dolar = parseFloat(dolar);
     
    dolar = dolar * 3.80

    console.log(dolar);

}

var menu =true;
console.log("Bienvenido a TuVencidario \nApp desarrollada para la seguridad de tu condominio\n1 Registro\n2 Convertor divisas \n0 Salir")

while( menu ){

    var promedio_edades = 0;
    var  nroPersonas = 0;

    console.log

    var operacion = prompt("Elija una opcion");

    if( operacion == "0"){

        menu = false;
    }

    switch (operacion){
    case '1':
        var personas = parseInt(prompt("Ingrese el numero de personas a registrar"));
        
    for( i = 0 ; i < personas; i++){
        solicitarNombre();
        solicitarEdad();
        numerox = (i+1);
        nroPersonas++;

    } 
        
        console.log( "["+ numerox +"]" + "La cantidad de personas registradas hasta el momento es:"+ nroPersonas )
        break;
    
    case '2':
    
    var cambio = parseFloat(prompt("Ingrese cantidad de Monedas en sol peruano que desea a cambiar a dolares: "));

    if ( cambio > 50){

        convertir(cambio);
        
    }
    else {
        console.log("solo cambios se aceptan cambios mayores a 100 soles");
    }
  
        break;
    
    case 'default':

    console.log("No se encuentra en el listado");
    



    }
    // end of while
    }




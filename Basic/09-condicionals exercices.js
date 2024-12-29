/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "Luis"
let id = 47

if(id == 47){
    console.log(name);
    
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Usuario"
let password = "1234"

if(user =="Usuario" && password == "1234" ){
    console.log("Acceso concedido")    
} else {
    console.log("Credenciales no coinciden");    
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let Number = 1-1

if(Number > 0){
    console.log("NUmero positivo");
    
} else if(Number < 0){
    console.log("Numero negativo");
    
} else {
    console.log("Tienes un 0");
    
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 18
let diferencia = 0

if(age >= 18){
    console.log("Pase a la urna a emitir su voto")
} else{
    diferencia = (18 - age)
    console.log(`Aun te faltan ${diferencia} años para votar`);
    
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const mayor = age >= 18 ? "Es nmayor de edad" : "Es menor de edad"
    console.log(mayor)    


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

function obtenerSeason(month) {
    let season;

    if (month === 12 || month === 1 || month === 2) {
        season = "Invierno";
    } else if (month >= 3 && month <= 5) {
        season = "Primavera";
    } else if (month >= 6 && month <= 8) {
        season = "Verano";
    } else if (month >= 9 && month <= 11) {
        season = "Otoño";
    } else {
        season = "Mes no válido";
    }

    return season;
}

let month = 2;  
console.log("La estación del mes " + month + " es " + obtenerSeason(month));

    

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

function obtenerDias(month) {
    let cantidad;

    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        cantidad = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        cantidad = 30;
    } else if (month === 2) {
        cantidad = 28;  // Consideramos 28 días para años no bisiestos
    } else {
        cantidad = "Mes no válido";
    }

    return cantidad;
}

//let month = 5;  
console.log("La cantidad de días del mes " + month + " es " + obtenerDias(month));



// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

function obtenerSaludo(idioma){
    let saludo;

switch (idioma){
    case "Español":
        saludo = "Hola!"
        break;
    case "Ingles":
        saludo = "Hello!"
        break;
    case "Frances":
        saludo = "Bonjour"
        break;
    case "Aleman":
        saludo = "Hallo!"
        break
    case "Ruso":
        saludo = "Privet!"
        break;
    case "Chino":
        saludo = 'Nǐ hǎo!'
        break;
    case "Japones":
        saludo = "Kon'nichiwa!"
        break;
    case "Coreano":
        saludo = "annyeonghaseyo!"
        break;
    default:
        saludo = 'NO hablo tantos idiomas'
        break;
    

}
return saludo
}

let idioma = "Chino"; 
console.log(obtenerSaludo(idioma));

// 9. Usa un switch para hacer de nuevo el ejercicio 6

function obtenerSeason(month) {
    let season;

    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Invierno";
            break;
        case 3:
        case 4:
        case 5:
            season = "Primavera";
            break;
        case 6:
        case 7:
        case 8:
            season = "Verano";
            break;
        case 9:
        case 10:
        case 11:
            season = "Otoño";
            break;
        default:
            season = "Mes no válido";
            break;
    }

    return season;
}

// Ejemplo de uso
//let month = 5;  // Cambia este valor para probar con diferentes meses
console.log("La estación del mes " + month + " es " + obtenerSeason(month));


// 10. Usa un switch para hacer de nuevo el ejercicio 7
function obtenerDias(month) {
    let cantidad;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            cantidad = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            cantidad = 30;
            break;
        case 2:
            cantidad = 28;  // Consideramos 28 días para años no bisiestos
            break;
        default:
            cantidad = "Mes no válido";
            break;
    }

    return cantidad;
}

// Ejemplo de uso
//let month = 5;  
console.log("La cantidad de días del mes " + month + " es " + obtenerDias(month));


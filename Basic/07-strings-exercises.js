/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

let myName = "Luis"
let myApellido = "Vega"
let myEmail = "lvega@email.com"
let myGuiones= "Esta es una prueba de guiones"

// 1. Concatena dos cadenas de texto
console.log(myName + " " + myApellido);


// 2. Muestra la longitud de una cadena de texto
console.log(myEmail.length);


// 3. Muestra el primer y último carácter de un string
console.log(myApellido.charAt(0));
console.log(myApellido.charAt(myApellido.length-1));



// 4. Convierte a mayúsculas y minúsculas un string
console.log(myName.toUpperCase());



// 5. Crea una cadena de texto en varias líneas
console.log(`
    Hola, creo que la mejor forma 
    de aprender en coin la practica
    `);



// 6. Interpola el valor de una variable en un string

console.log(`Claro, mi correo es: ${myEmail}`);


// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(myGuiones.replace(/ /g, "-"));



// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(myEmail.indexOf("vega"));



// 9. Comprueba si dos strings son iguales
console.log( myApellido == "Vega");


// 10. Comprueba si dos strings tienen la misma longitud
console.log(myName.length == myApellido.length);

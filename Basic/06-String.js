//String
let myName = "Luis";
let myEmail = "l2vega";

//Concatenacion
let greeting = "Hola, " + myName + "!";

console.log(greeting);

//longitud
console.log(greeting.length);

//Accesos a caracteres 
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[6]);
console.log(greeting[7]);
console.log(greeting[10]);

//Metodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("Luis"));
console.log(greeting.indexOf("Vega"));
console.log(greeting.includes("Luis"));
console.log(greeting.includes("Vega"));
console.log(greeting.slice(6,10));
console.log(greeting.replace("Luis","Vega"));

//templates literals (Plantillas literales)

//Cuando usamos el acento invertido se pueden colocar strings en varias lineas
let messaje = `
Hola, este es el 
cursos de Java Script`;

console.log(messaje);

// Cuango usamos el signo $ y le agremos una varible entre llaves se puede imprimir sin problemas 

console.log(`Hola, ${myName}`);
console.log(`Mi Email, ${myEmail}!`);




// 1. Crea una variable para cada operación aritmética

let a = 5
let b= 7

console.log(a+b);


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación


console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a<=b);
console.log(a>=b);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(!a>b);
console.log(!a<b);
console.log(!a==b);
console.log(!a<=b);
console.log(!a>=b);

// 5. Utiliza el operador lógico and

console.log(a>b && a>=5);
console.log(a<b && b>=7);
console.log(a==b);
console.log(a<=b);
console.log(a>=b);

// 6. Utiliza el operador lógico or

console.log(a>b|| a>=5);
console.log(a<b || a>=7);



// 7. Combina ambos operadores lógicos

console.log(a>b && a>3 || b<50);


// 8. Añade alguna negación

console.log(!a>=a);


// 9. Utiliza el operador ternario

const isProved = !false
isProved ? console.log("El estuduante aprobó") : console.log("No está reprobado")

// 10. Combina operadores aritméticos, de comparáción y lógicas
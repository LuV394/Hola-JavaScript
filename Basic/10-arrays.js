//arrays

//Declaracion

let myArray =[]
let myArray2 = new Array()

console.log(myArray);
console.log(myArray2);

myArray =[3]
myArray2 = new Array(3)

console.log(myArray);
console.log(myArray2);

myArray =[1,2,3,4,5]
myArray2 = new Array(1,2,3,4,5)

console.log(myArray);
console.log(myArray2);

myArray =["Luis", "Vega", "lvega"]
myArray2 = new Array("Luis", "Vega", "lvega")

console.log(myArray);
console.log(myArray2);

myArray =["Luis", "Vega", 47]
myArray2 = new Array("Luis", "Vega", 47)

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3)
myArray2[0] = "Luis"
myArray2[1] = "Vega"
myArray2[2] = "Marzo"

console.log(myArray2);

// Métodos comunes

myArray = []

// push y pop

myArray.push("Luis")
myArray.push("Vega")
myArray.push("v394")
myArray.push(47)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Luis", "lvega")
console.log(myArray)

//length

console.log(myArray.length);


//clear
myArray = []
myArray.length = 0 
console.log(myArray);

//slide


myArray =[1,2,3,4,5]
myArray2 = new Array(1,2,3,4,5)

let myNewArray = myArray.slice(1,3)
console.log(myArray);
console.log(myNewArray);

//splice

myArray.splice(1,3)

console.log(myArray);


myArray = ["Luis", "Vega", "v394", 47, "lvega"]
myArray.splice(1,2,"Otracosa")
console.log(myArray);





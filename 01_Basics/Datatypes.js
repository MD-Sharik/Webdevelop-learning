("use strict")
// ----------------------------primitive-------------------------------

// string = "string"
// number = 15
// boolean = true or false'
// symbol = define uniqueness
// null = define empty or null
// undefined = undefined
// bigInt = bigger numbers like scientific values

// -------------------REFERENCE (NONprimitive)--------------------------

// Array
// objects
// Functions

//----------------------------------------------------------------------
// Javascript is a dynamically typed language

// const BigNumber = 34353213873538738n


// console.log( typeof BigNumber)
// type of = define the type of datatypes or variables

// STACK (Primitive) and HEAP(NON-Primitive)

// In stack we get Copy of value of a variable, EX:-

// let hero = "ironman"
// let hero2 = hero
// hero2 = "batman"

// console.log(hero)
// console.log(hero2)

// In Heap we get reference value of variable, 
// so if we change something the value of refernce also change

// let hero1 = {
//  Name : "batman",
//  age : 22,
//  power: "rich"
// }

// let hero2 = hero1

// hero2.power = "fly"

// console.log(hero1.power)
// console.log(hero2.power)

// const hero1 = new String('sharik')
// console.log(hero1.indexOf('a'))

let name = "sharik"
let score = 25
console.log(`this is my new score ${score} and this is my new name is ${name}`);
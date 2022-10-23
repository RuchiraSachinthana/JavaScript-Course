console.log("hello");
console.log(1234);

var greeting = "hello";
console.log(greeting);
console.log([1, 2, 3, 4, 5]);
console.table({
    a: 1,
    b: 2,
});

console.error("error ");
console.clear();
console.warn("warn");
console.time("hello");
console.log("abcd");
console.log("abcd");
console.log("abcd");
console.log("abcd");
console.log("abcd");
console.log("abcd");
console.timeEnd("hello");


const firstName = "Ruchira";
const lastName = "Sachinthana";
const age = 23;
const str = "hello there my name is Ruchira";
const tags = "web design, web development, programming";

let val;

val = firstName + lastName;

// Concatenation

val = firstName + " " + lastName;

// Append

val = "Ruchira ";
val += "Sachinthana";

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping

val = "That's awesome, I can\'t wait";

// Length

val = firstName.length;

// concat

val = firstName.concat(" ", lastName);

// Change case

val = firstName.toUpperCase();

val = firstName.toLowerCase();

val = firstName[2];

// indexOf()

val = firstName.indexOf("c");

val = firstName.lastIndexOf("c");

// charAt()

val = firstName.charAt("2");

// Get last char

val = firstName.charAt(firstName.length - 1);

// substring()

val = firstName.substring(0, 4);

// slice()

val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()

val = str.split(" ");
val = tags.split(",");

// replace()

val = str.replace("Ruchira", "Jack");

// includes()

val = str.includes("foo");

// Numbers and the Math Object

const num1 = 100;

const num2 = 50;

let val;

// Simple math with numbers

val = num1 + num2;

val = num1 * num2;

val = num1 - num2;

val = num1 / num2;

val = num1 % num2;

// Math Object

val = Math.PI;

val = Math.E;

val = Math.round(2.4);

console.log(val);

// let generateName = require("sillyname");

import generateName from "sillyname";
import superheroes from "superheroes";

let sillyName = generateName();
let superHeroes = superheroes.random();

console.log(`My Name is ${sillyName}`);
console.log(`i am ${superHeroes} !`);

// var generateName = require('sillyname');

import generateName from "sillyname";
import { randomSuperhero } from 'superheroes';

var sillyName = generateName();
var mySuperName = randomSuperhero();


console.log(`My name is ${sillyName}`); 
console.log(`My super hero name is ${mySuperName}`); 
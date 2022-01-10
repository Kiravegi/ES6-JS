s = Symbol("first sy");
console.log(s); //symbol
console.log(s.toString()); // first sy

let s2 = Symbol();
let s3 = Symbol();

console.log(s2 === s3);  //false bcoz symbol will have a unique id

let s4 = Symbol.for('Reg'); //passing description
let s5 = Symbol.for('Reg');

console.log(s4 === s5); //true 'symbol.for' s5 does not create immediately it,
//checks for key 'Reg' if exists it assigns to s4 
//so they share the same unique id

console.log(Symbol.keyFor(s4)); //Reg

let fname = Symbol("fn");

let person={
  [fname]:"Kiran" 
};

console.log(Object.getOwnPropertySymbols(person));  //[Symbol(fn)]
let abc = new Set ();

let obj1={};
let obj2={};


abc.add("hello");
abc.add(1);
abc.add(1); ///does not accept repeact values

abc.add(obj1);
abc.add(obj2); //as objects are not convereted into string it accepts


console.log(abc.size); 

let newSet = new Set([1,2,3,4,5,5,5,5]);

console.log(newSet.size);

let chainSet = new Set().add("hello").add("world");
console.log(chainSet.size);



//Weaksets

console.log("weaksets");

let set = new WeakSet();
let key = {a:"1"}
set.add(key);
console.log(set.has(key));
console.log(set.has(key(a));

// Weak-collections polyfill stores values as hidden properties of keys. 
//It works correct and not leak in most cases. 
// However, it is desirable to store a collection longer than its keys.
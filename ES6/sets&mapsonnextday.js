// const Arr =[1,2,3,4,5,5,5,5,];

// const mySet = new Set(Arr);



// mySet.add(6);

// mySet.add( { channel:"hello" });

// mySet.add([4,4,4]);


// const uni = [...mySet];

// console.log(uni);



//Map


// const myMap = new Map([['name','john'],['surname',['doe']]])


// console.log(myMap);


// const myObj = {};

// const a ={};
// const b ={};

//  myObj[a]='aa';
// myObj[b]='bb';

// console.log(myObj);


const a={};
const b={};
const c={};


const myMap = new Map ([[a,'a'],[b,'b']]);

myMap.set({},'apple');

myMap.set('ab', 'ajay');
console.log(myMap);


console.log(myMap.size);

myMap.delete(a);
 
console.log(myMap);

console.log(myMap.has('ab'));

 
console.log(myMap.size);




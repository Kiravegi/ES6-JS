class Test{
  
  constructor(name, age){
    
    this.name = name;
    this.age = age;
    this.work = function(){
      console.log(`hii ${name}`);
    }
  }
}

let obj1 = new Test('kiran', 27);
let obj2 = new Test('navin', 27);


// console.log(obj1);
// console.log(obj2);

obj1.work();

obj2.work();


class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); //Polygon


//Here the prototype of Square class is changed, -
//—but the constructor of its base class Polygon is still called when a new instance of a square is created.
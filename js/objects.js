// var myCar = new Object();

//  myCar = {
//   make: 'Ford',
//   model: 'Mustang',
//   year: 1969
// };

// console.log(myCar.make);//Ford

// // console.log(myCar.color);//undefined


// const myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};


// console.log(myHonda.engine.size); 



///////////// Creating an instance of the object with new.

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }


// const myObj1 = new Car('BMW','A3',2004);  //object 1

// const myObj2 = new Car('Mazda', 'Miata', 1990);  //object 2

// console.log(myObj1.make); // BMW

// console.log(myObj2.make); // Mazda

// console.log(myObj1);  //[object Object] {make: "BMW",model: "A3",year: 2004}


/////// Creating object using Object.create
// it allows you to choose the prototype object for the object,
//you want to create


const Animal = {
    type:'Invertebrates',
    displayType: function(){
      console.log(this.type);
    }
  };
  
  console.log(Animal.type); // Invertebrates
  
  console.log(Animal.displayType()); // Invertebrates
  
  //creating a object type 'Animal'
  
  const fish = Object.create(Animal);
  
  fish.type = 'star fish';
  
  fish.displayType();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
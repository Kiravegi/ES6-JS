function f1(name,age){
    this.name = name,
      this.age = age
  }
  
  let abc = {
    fname:'ki'
  }
  
  let f = new f1('fahaad',35);
  
  console.log(abc);
  console.log(f);
  
  
  
  function Car() {}
  car1 = new Car();
  car2 = new Car();
  
  console.log(car1.color);    // undefined
  
  Car.prototype.color = 'original color';
  console.log(car1.color);    // 'original color'
  
  car1.color = 'black';
  console.log(car1.color);    // 'black'
  
  console.log(Object.getPrototypeOf(car1).color); // 'original color'
  console.log(Object.getPrototypeOf(car2).color); // 'original color'
  console.log(car1.color);   // 'black'
  console.log(car2.color);   // 'original color'
  
  
  //The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
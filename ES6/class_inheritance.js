
class Person {
    constructor(name) {
      console.log(name + " from per ");
    }
    get() {
      return 55;
    }
  }
  
  class Emp extends Person {
  
    constructor(name) {
      super(name);
      console.log(name + " from emp ");
  
    }
    
     getID() {
  
       console.log("em");
       console.log(super.get());
    }
  }
  
  
  let e = new Emp("ki");
  e.getID();
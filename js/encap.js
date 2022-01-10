// Encapsulation is the packing of data and functions into one component 

let Employee = {
    name:'kiran',
    lname:'vegi',
    age:27,
    display: function(){console.log(this.name);}
  };
  
  Employee.display();
  
  
  let Salary={
    baseSalary:30000,
    overtime:10,
    rate:20,
    cal:function(){
    console.log(this.baseSalary+(this.overtime * this.rate));
    }
  };
  
  Salary.cal();
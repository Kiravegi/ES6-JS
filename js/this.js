const test = {
    prop: 42,
    func: function() {
      prop = 40;
      return this.prop; // this searches for variable outside of function if 'this' is mentioned
    },
  };
  
  console.log(test.func()); //  42
  
  
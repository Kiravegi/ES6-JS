let iterable =[1,2,3];

function createIterator(array){
  let count = 0;
  return{
    next:function(){
      return  count < array.length?
        {value:array[count++],done:false}:
      {value:undefined, done:true};
    }
  }
}

let myIterator = createIterator(iterable);
console.log(myIterator.next()); 
console.log(myIterator.next()); 
console.log(myIterator.next()); 
console.log(myIterator.next()); 


/*

In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

Specifically, an iterator is any object which implements the Iterator protocol by having a next() method,
that returns an object with two properties:

value
The next value in the iteration sequence.

done
This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.
*/
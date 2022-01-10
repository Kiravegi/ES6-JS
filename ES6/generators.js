function *createGenerator() {
  yield 1;   //pauses the call here for one next call
  console.log("After 1st Yield");
  yield 2;
}

let myGen = createGenerator();

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
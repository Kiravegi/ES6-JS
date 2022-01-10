let fname = "john";
let lname="danny";

let person={
  fname,
  lname
}

console.log(person.fname);

createP =(fname,lname) =>{
  let fulln=fname+ " " + lname;
  console.log("fullname"+ " " + fulln);
}

let p = createP ("ki","ve");


// ex: 2


let ln ="last name";
let person ={
  "first name":"sanjay",
  [ln] : "leela"
};
console.log(person);
var arr = ["india","china","japan"];

for( a of arr ){
  console.log(a + " " + "is a country")
}


//obj

var obj={
  
  name:"kiran",
   age:25
}

for(key in obj){
  console.log("my "+key+" is "+ obj[key]);
}
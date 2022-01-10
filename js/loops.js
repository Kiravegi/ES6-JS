// let myArr = [1,20,3,84,55,6,];


// //for loop
// for(let i=0;i<myArr.length;i++){
//   console.log(myArr[i]);
// if(i === 3) break;
// }


//while loop , break is to break the iteration,
//continue is to skip the step

// let i =0;
// while(i<10){
//   i++;
//   if (i === 3) continue;
//  console.log(i);
// }

//do while

// console.log("do while");
// let i=0;
// do{
//   i++;
//   console.log(i);
// }while(i<0)


//forEach

let Animals = ['lion','tiger','deer'];

Animals.forEach(ea=>{
  console.log(ea);
})

Animals.forEach(ani=> console.log("using arrow fn",ani))


// //for in

// for (i of myArr) {
//    console.log(i); // logs 3, 5, 7
// }

//for of

// let Obj = { name:'kiran', age:27};

// for(key in Obj) console.log(key);// "name" "age"

// for (i in Obj) console.log(Obj[i]);// "kiran" 27
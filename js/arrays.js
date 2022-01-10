const companies = [
  {name:"Company one", catagory:"finance",start:1981, end:2003},
  {name:"Company two", catagory:"Retail",start:1991, end:2005},
  {name:"Company three", catagory:"finance",start:1985, end:2010},
];

const ages = [ 5,2,8,6];
// console.log(companies);



// //forEach

companies.forEach(function(company){
  console.log(company.end);
})

// // //filter

// // const canDrink = ages.filter(age => age >= 20);

// // console.log(canDrink);

// // const Retail = companies.filter(re =>re.catagory ==='Retail');

// // console.log(Retail);


// var companyNames = companies.map(coMap => `${coMap.name} [${coMap.start} - ${coMap.end}}]`);

// console.log(companyNames);

// const agesSquare = ages.map(as => Math.sqrt(as));
// console.log(agesSquare);

// //sort

// const soArr = ages.sort();

// console.log(soArr)

// //reduce

// // var ageSum = 0;
// // for (let i=0; i < ages.length;i++){
// //   ageSum += ages[i];
// // }

// // console.log(ageSum);



// // const ageSum = ages.reduce((total,age) => total + age, 0);
// // console.log(ageSum);


// const years = companies.reduce(function(total, company)
//  {
//   return total + (company.end - company.start)
// },0);

// console.log(years);


// const yrs = companies.reduce((total, company) =>
//    total + (company.end - company.start),0);

// console.log(yrs);





////next 


let colors = ["red","blue",'yellow','green'];
let color = ["re","bl",'ye','gr',{name:"kiran",age:45},function(){
             console.log("this is fn inside an array");
             }];

let numbers = [1, 4, 9, 16]

// colors[4]="pink"; //adding a new element

// // console.log(colors.length); //length of an array
// // console.log(colors);

// colors.forEach(function(item,index,a){
//   console.log(item,index);
// })

// let co = colors.concat(color); //joins two arrays into a single array
// console.log(co);


// console.log(color.pop()); //deleting an element from the end of an array

// console.log(colors.join()); //joins all elements to a string


color[5](); // calling a fn in an array

console.log(color[4]);  // accessing an object

console.log(color.entries[4]);


const filteredItems = color.filter(col => col.length >=1 );

console.log("filtered values",filteredItems);


console.log(color.map((item) =>{
  return item.name
}))

//map

let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})

console.log(roots);

//  Array.from

let Arr = Array.from("kiranvegi"); // converts string alphabates to array of elements
// ["k", "i", "r", "a", "n", "v", "e", "g", "i"]
console.log(Arr);









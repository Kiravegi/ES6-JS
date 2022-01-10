let dC = (message, ...colors) =>{
  console.log(message);
  
  for(let i in colors){
     console.log(colors[i]);
  }
 
}

let message = "list of colors";

dC(message, 'Red','Blue','Green');


//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
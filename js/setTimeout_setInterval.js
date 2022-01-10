

// let Obj = {
//     name:'jack',
//     fn:function(){
//         name="kiran"
//       setTimeout(function(){
//         console.log(this.name)
//       },1000);
      
// }
// }

// Obj.fn();


function log(msg){
    console.log(msg);
    
    clearInterval(sI);
  }
  
  
   
 let sI  = setInterval(log, 1000,'setInterval');
  
 let sT = setTimeout(log, 2000,'Good byee'); 
  
//   clearTimeout(sT);
  
  
  
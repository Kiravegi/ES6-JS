var employee = {	
id:1,
greet: function(){
setTimeout(()=> {console.log(this.id)},1000);
}
};
employee.greet();

//In arrow fn 'this' refers to parent's variable.
 If need to acces the function variable needed to use old styled fn.
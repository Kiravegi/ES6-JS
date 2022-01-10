interface Person{
    fname:string;
    lname:string;
    age?:number;
}

let empolyee1:Person = {
    fname:"kiran",
    lname:"vvhi",
    age:20
}

let employee2:Person={  
    fname:"abc",
    lname:"xyz",

}

//Property 'age' is missing in type '{ fname: string; lname: string; }'
// but required in type 'Person'.



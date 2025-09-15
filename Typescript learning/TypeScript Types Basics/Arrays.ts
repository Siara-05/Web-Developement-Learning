
// The normal array defining.. we can include string or number or object .. it doesnt give any error
let arr = [1,2,3,{name: "siara"}, {name: 12}];


// Here if we declare when defining the array that it is number.. it gives error when we write a string
// let arry: number[] = [1,2,3,4,"siara"]


// TUPLES

let arr1: [string, number] = ["siara", 2.0]


// ENUMERATIONS
// these are in the key:value pair 
// Enum is a special way to define a set of named constant values.
//  WHY ENUMS:
// Avoid typos in strings.
// Make the code easier to read and maintain.
// Ensure only predefined values are used.Always use Enums when you have fixed options like status codes, user roles, alert types, etc.
// This makes your code more robust and prevents human errors

enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

enum StatusCodes{
    ABANDONED = "abondoned status code 500",
    NOTFOUND = "not found status code 404",
}

StatusCodes.NOTFOUND



// ANY, UNKNOWN

let a;

//  we can set value of a as a number, string, boolean, anytinh
// In typescript AVOID these , not to use "any" , it gets messed up in future


let b: unknown;
b= 12;
b= "siara";

// Unkown first checks if there are strings in it, and then changes them to lowercase 

if (typeof b == "string")
    b.toUpperCase();
// any gives error if we do same to it, unkown first checks and then does the command given 


//  Void

function abcd(): void{
    console.log("hey");
}

//  Void is used when we have noting to return in a function, here there is ntg to return so after the declration of function we used void

// If we have to return a string or a number then 
function abc(): number{
    return 12;
}
function abcde(): string{
    return "siara";
}

// Interface Types 
// An Interface is a way to define the structure (shape) of an object.
// It tells TypeScript:
//  What properties the object should have
//  What type each property should be.

interface User{
    name:string,
    email:string;
    password:string,
    gender?: string,  
    // if the user does'nt want to specify their username then add "?" it makes it as a optional
}

function getDataOfUser(obj: User) {

}

getDataOfUser({
    name: "Siara",
    email: "Siara@01",
    password:"1234"
  }
)

//  Extending the interface without creating a new one

interface Admin extends User{
    admin: boolean;
}

function abcd(obj: Admin){
    obj.admin = true;
}
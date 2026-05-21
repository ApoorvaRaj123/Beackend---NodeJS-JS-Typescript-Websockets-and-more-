
function isEven(num:number): boolean {
    if(num%2==0){
        return true
    }
    else{
        return false
    }
}

// Interface and types for complex codebases and arguments

interface User {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
        pincode: number;
    }
}


let user: User = {
    name:"john Doe",
    age: 25,
    address:{
        city: "NYC",
        country: "india",
        pincode: 15006
    }
}


function isLegal(user:User): boolean {
    return user.age >= 18;
}

console.log(isLegal(user));


// Create Two types User and Admin,
// Create a function that takes either a user or a  admin as an input, and returns a string saying "Welcome, [name]".










// return the legal users in an array.

interface UserType {
    firstName: string,
    lastName: string,
    age: number
}


let user1: UserType = {
    firstName:"Joah",
    lastName: "Doe",
    age:18
}
let user2: UserType = {
    firstName:"Joahn",
    lastName: "Dooe",
    age:21
}
let user3: UserType = {
    firstName:"Joah2",
    lastName: "Doe2",
    age:11
}
let user4: UserType = {
    firstName:"Joah4",
    lastName: "Doe4",
    age:17
}
let user5: UserType = {
    firstName:"Daniel",
    lastName: "Park",
    age:20
}
let user6: UserType = {
    firstName:"Johan",
    lastName: "Seong",
    age:23
}

let arr = [user1,user2,user3,user4,user5,user6];

const result = arr.filter((x) => x.age > 18);

console.log(result);

let number = 1;

console.log(number);

// A function to Greet the name
function PrintName(firstname: string, no: number) {
  console.log({
    firstname: firstname,
    number: no,
  });
}

PrintName("Johan", 1);

// A function to print sum of two numbers

function Sum(num1: number, num2: number) {
  console.log(num1+num2);
}
Sum(10,11);


// Check if the user is 18+

function AgeCheck(Age:number) {
    if (Age<=18) {
        return false;
    }
    else{
        return true;
    }
}

console.log(AgeCheck(18));


// Create a Function that take a function as an argument and runs it after 1 second

function delayedCall(fn: () => void) {  //This is how to define that a function is taken as parameter. The parameter function in this case returns nothing(void).
    setTimeout(fn, 1000);
}


// INTERFACES ---------------------------------------------


interface userType {
    FirstName: string
    lastName: string
    age: number
}

let user: userType = {
    FirstName: "John",
    lastName: "Doe",
    age: 25
}

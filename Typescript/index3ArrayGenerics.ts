// Interfaces VS Types

// Create two types/interfaces called User and Admin,
// Create a function that takes either a user or an admin as input, and returns a string saying "Welcome", ["name"]

interface Admin {
  name: string;
  permissions: string;
}

interface User {
  name: string;
  age: number;
}

function greetUserOrAdmin(user: User | Admin) {
  console.log("Welcome" + "[" + user.name + "]");
}

// ARRAYS

interface UserType {
  firstName: string;
  lastName: string;
  age: number;
}

let user1: UserType = {
  firstName: "Joah",
  lastName: "Doe",
  age: 18,
};
let user2: UserType = {
  firstName: "Joahn",
  lastName: "Dooe",
  age: 21,
};
let user3: UserType = {
  firstName: "Joah2",
  lastName: "Doe2",
  age: 11,
};
let user4: UserType = {
  firstName: "Joah4",
  lastName: "Doe4",
  age: 17,
};
let user5: UserType = {
  firstName: "Daniel",
  lastName: "Park",
  age: 20,
};
let user6: UserType = {
  firstName: "Johan",
  lastName: "Seong",
  age: 23,
};

function filterUser(users: UserType[]) {
  let ans = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i]?.age < 18) {
      ans.push(users[i]);
    }
  }
  return ans;
}

let arr = [user1, user2, user3, user4, user5, user6];
let result = filterUser(arr);

//  GENERICS -------------------

interface AdminGeneric<T> {
  name: string;
  email: string;
  age: number;
  response: T;
}

interface UserGeneric {
  name: string;
  age: number;
}

type OR<T = UserGeneric> = UserGeneric | AdminGeneric<T>;

let func = function userResponse(
  user: OR<{ Married: string; Husband: string }>,
): OR {
  return user;
};

console.log(func({ name: "Pooja", age: 22 }));
console.log(
  func({
    name: "Pooja",
    age: 23,
    email: "Pooja@gmail.com",
    response: { Married: "Yes", Husband: "Vis" },
  }),
);


// Readonly

interface config {
    readonly endpoint: string;
    readonly apikey: string;
}

const Config: Readonly<config> = {
    endpoint: "https://api.example.com",
    apikey: "abcdef123456789"
}

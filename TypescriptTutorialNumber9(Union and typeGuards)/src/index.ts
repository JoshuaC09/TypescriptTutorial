let someId: number | string;

someId = 1;
someId = "2";

let email: string | null = null;

email = "mario@gmail.com.dev";
email = null;

type Id = number | string;

let anotherId: Id;

anotherId = "123";
anotherId = 123;

function swapIdType(id: Id): Id {
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id.toString();
  }
}

const idOne = swapIdType("2");
const idTwo = swapIdType(2);

interface User {
  type: "user";
  userName: string;
  email: string;
  id: Id;
}

interface Person {
  type: "person";
  firstName: string;
  age: number;
  id: Id;
}

function logDetails(value: User | Person): void {
  if (value.type == "user") {
    console.log(value.email, value.userName);
  }
  if (value.type === "person") {
    console.log(value.firstName, value.age);
  }
}

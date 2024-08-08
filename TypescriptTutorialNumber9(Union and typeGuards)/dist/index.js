"use strict";
let someId;
someId = 1;
someId = "2";
let email = null;
email = "mario@gmail.com.dev";
email = null;
let anotherId;
anotherId = "123";
anotherId = 123;
function swapIdType(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType("2");
const idTwo = swapIdType(2);
function logDetails(value) {
    if (value.type == "user") {
        console.log(value.email, value.userName);
    }
    if (value.type === "person") {
        console.log(value.firstName, value.age);
    }
}

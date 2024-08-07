let number: number[] = [1, 2, 3, 4, 5];

console.log("");
number.forEach((number) => console.log(number));

let doubled: number[] = number.map((number) => number * 2);
console.log("");
doubled.forEach((number) => console.log(number));

let even: number[] = number.filter((number) => number % 2 === 0);
console.log("");
even.forEach((number) => console.log(number));

let total: number = number.reduce((total, num) => total + num);
console.log("");
console.log(total);

let found: number = number.find((number) => number > 2) ?? 0;
console.log("");
console.log(found);

let isInclude6: boolean = number.includes(6);
let isInclude5: boolean = number.includes(5);
console.log("");
console.log(isInclude6);
console.log(isInclude5);

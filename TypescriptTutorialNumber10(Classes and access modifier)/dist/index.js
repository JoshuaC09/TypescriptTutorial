"use strict";
//Classes
// class Invoice {
//   public client: string;
//   public details: string;
//   public amount: number;
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format = () => {
//     return `${this.client} owes me ${this.amount} and here are the details ${this.details}`;
//   };
// }
// const invOne = new Invoice("mario", "Work on the mario website", 250);
// const invTwo = new Invoice("maria", "Work on the maria website", 350);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
//Access modifier
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.format = () => {
            return `${this.client} owes me ${this.amount} and here are the details ${this.details}`;
        };
    }
}
const invOne = new Invoice("mario", "Work on the mario website", 250);
const invTwo = new Invoice("maria", "Work on the maria website", 350);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.amount, inv.client, inv.format());
});

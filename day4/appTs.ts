// //typescript - angular
// //es6 - react
// //npm install -g typescript
// //app.ts
// // compile ts file -> create .js file
// //tsc.cmd -v greet.ts
// //run the file
// // node greet.js
// class Greeting {
//   greet(): void {
//     console.log("Welcome toTypescript");
//   }
//   show(): void {
//     console.log("my show function");
//   }
// }
// //class definition
// /*object creation for a class  */
// var obj = new Greeting();
// obj.show();
// obj.greet();

// var mulp = (c: number, d: number) => {
//   return c * d;
// };

// var add = (a: number, b: number, ...c: number[]) => {};
// console.log(mulp(3, 6));

// //structuring & destructuring

// //var[w,e,r]=Array;

// // spread operator(...) -arrays
// // rest parameter ...  function
// // ()=> {}  arraow function
// // var , let ,const
// //array destructuring, object destructuring

// var arr = ["reactjs", "nodejs"];

// // destructuring assignment
// var [f1, f2] = arr;

// console.log(f1);
// console.log(f2);
// console.log(f1.length);

// var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// // destructuring assignment
// var [color1, color2, color3] = colors;

// console.log(color1); // Violet
// console.log(color2); // Indigo
// console.log(color3); // Blue

// var [a, b, ...args] = colors;
// console.log(a);
// console.log(b);
// console.log(args);

// var x = 100,
//   y = 200;
// [x, y] = [y, x];
// console.log(x);
// console.log(y);

// function array() {
//   return ["html", "css", "javascript"];
// }

// var [d, j, z] = array();

// console.log(d); // 100
// console.log(j); // 200
// console.log(z); // 300
// console.log("***************");
// //object
// let user = {
//   firstName: "Sunil",
//   lastName: "Kumar",
//   dob: "02/08/2024",
// };
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.dob);
// console.log(user);
// const student = { _name: "Arun", position: "First", rollno: "24" };

// const { _name, position, rollno } = student;

// console.log(_name);
// console.log(position);
// console.log(rollno);

// class Car {
//   //parent, super, base
//   color: string;

//   constructor(color: string) {
//     this.color = color;
//   }
//   show(): void {
//     console.log("in parent..");
//   }
// }
// class Audi extends Car {
//   //child, sub, derived
//   price: number;
//   constructor(color: string, price: number) {
//     super(color);
//     this.price = price;
//   }
//   display(): void {
//     console.log("Color of Audi car: " + this.color);
//     console.log("Price of Audi car: " + this.price);
//   }
// }
// let c = new Car("red"); //parent
// c.show();
// let o = new Audi(" Black", 8500000); //child
// o.display();

// class Calender {
//   //parent, super, base
//   name: string;
//   maneger: String;
//   constructor(name: string, maneger: string) {
//     this.name = name;
//     this.maneger = maneger;
//   }
//   getLeave(): void {
//     console.log("get leave..");
//   }
//   applyLeave(): void {
//     console.log("leave is applied");
//   }
// }

// class TeamCalender extends Calender {
//   //child, sub, derived
//   month: number;
//   constructor(name: string, maneger: string, month: number) {
//     super(name, maneger);
//     this.month = month;
//   }
//   approve(): void {
//     console.log("Leave approved: " + this.month);
//   }
//   reject(): void {
//     console.log("Leave rejected: " + this.month);
//   }
//   displayAllTeamLeaves(): void {
//     console.log("List of all leave");
//   }
// }

// let o = new TeamCalender("Emmanuel", "chanila", 5); //child

// o.applyLeave();
// o.approve();
// o.displayAllTeamLeaves();

var map = new Map();
map.set("John", "author");
map.set("arry", "publisher");
map.set("Mary", "subscriber");
map.set("James", "Distributor");
console.log(map.size);
console.log(map);
var colors = new Map([
  ["1", "Red"],
  ["2", "Green"],
  ["3", "Yellow"],
  ["4", "Violet"],
]);
for (let key of colors.keys()) {
  console.log(key);
}
for (let col of colors.values()) {
  console.log(col);
}

console.log(" ");

for (let col of colors.entries()) console.log(`${col[0]}: ${col[1]}`);

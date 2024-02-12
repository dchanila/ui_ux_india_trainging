let message = "Hello, World! welcome to UIUX training ";
//named function disp
function disp() {
  console.log("display function");
}
//ananymous function
var show = function () {
  console.log("ananymous function");
};
//arrow function
let f = () => console.log("arraow function");
console.log("Welcome to NodeJS");
console.log(message);
console.log(message.length);
console.log(message.toUpperCase());

var array = ["reach", "mongodb"];
var array2 = [...array, "angura", "java"];
console.log(array2);
let name = Array.from("emmanuel");
console.log(name);
disp();
show();
f();

var a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a1.find((x) => x > 5));
console.log(a1.findIndex((x) => x > 5));
console.log(array);
var list = array.entries(); //key value pairs
for (x of list) console.log(x);
console.log(...list);

var k = array.keys();
console.log(...k); //only key

console.log(array.find((x) => x == "mongodb"));
console.log(array.findIndex((x) => x == "mongodb"));
console.log(array.indexOf("reach"));

//modularization

exports.mydate = function () {
  return Date();
};

//... rest argument vs spread oparator 
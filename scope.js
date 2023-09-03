const { globalAgent } = require("http");

console.log(namespace);
thisIsHoisted();
var namespace = true;

const constObj = {};

constObj.a = "a";

function thisIsHoisted() {
  console.log("this is a function declared at the bottom of a file");
}

var y = "new variable";
console.log(global.y);

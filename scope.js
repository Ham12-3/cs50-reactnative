console.log(namespace);
thisIsHoisted();
var namespace = true;

const constObj = {};

constObj.a = "a";

function thisIsHoisted() {
  console.log("this is a function declared at the bottom of a file");
}

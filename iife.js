const sayHello = (function () {
  function sayHello() {
    console.log("message");
  }
  return sayHello;
})();

// console.log("typeof message: ", typeof message);
console.log(sayHello.toString());
sayHello();

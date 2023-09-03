function makeFunctionArray() {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push(
      (function (i) {
        return function () {
          console.log(i);
        };
      })(i)
    );
  }
  return arr;
}

const arr = makeFunctionArray();
arr[0]();

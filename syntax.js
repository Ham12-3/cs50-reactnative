const firstName = "jordan";
const lastName = "Hayashi";

const val = 42;

const arr = [
  "string",
  42,
  function () {
    console.log("hi");
  },
];

arr[2]();

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//coercion
const x = 42;
const explicit = String(x);
const implicit = x + "";
console.log(typeof x);
console.log(typeof 42);
console.log(typeof null);

//falsy value and truthy value

// falsy value
// unndefined , null , false, +0 ,-0 , Nan

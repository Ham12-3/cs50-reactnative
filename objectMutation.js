const o = {
  a: "a",
  b: "b",
  obj: {
    key: "key",
  },
};
const o2 = Object.assign({}, o);

// o2.obj.key = "new value";
console.log(o.obj.key);

function deepCopy(obj) {
  const keys = Object.keys(obj);
  const newObject = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof obj[key] === "object") {
      newObject[key] = deepCopy(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  }
  return newObject;
}

const o3 = deepCopy(o);

console.log(o3);

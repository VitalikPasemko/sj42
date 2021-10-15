//https://www.codewars.com/kata/540de1f0716ab384b4000828/train/javascript
function spread(func, args) {
  return func(...args);
}

//https://www.codewars.com/kata/5258b272e6925db09900386a/train/javascript
const numbers = (...args) => args.every((arg) => typeof arg === "number");

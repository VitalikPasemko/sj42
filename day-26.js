//https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f/train/javascript
Function.prototype.bind = function (rootContext) {
  return (childContext = rootContext) => this.call(childContext, childContext);
};

//https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript
const OrderPeople = function (people) {
  return people.sort((a, b) => a.age - b.age);
};

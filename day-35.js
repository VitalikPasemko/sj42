//https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

//https://www.codewars.com/kata/557e508a47c7e9adf9000062/train/javascript
const parent = { description: "TODO: GIVE ME A DESCRIPTION" };
Object.setPrototypeOf(widget, parent);
Object.setPrototypeOf(gadget, parent);
Object.setPrototypeOf(thingamabob, parent);

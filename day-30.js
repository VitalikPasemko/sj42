//https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript
function isSantaClausable(obj) {
  return ["sayHoHoHo", "distributeGifts", "goDownTheChimney"].every(function (
    methodName
  ) {
    return typeof obj[methodName] == "function";
  });
}

//https://www.codewars.com/kata/52e5e86b2ff32887280002e4/train/javascript
class Cylon {
  constructor(model) {
    this.model = model;
  }
  attack() {
    return "Destroy all humans!";
  }
}

class HumanSkin extends Cylon {
  constructor(model) {
    super(model);
    this.model = model;
  }
  infiltrate() {
    return "Infiltrate the colonies";
  }
}

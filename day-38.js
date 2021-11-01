//https://www.codewars.com/kata/5636840bd87777688b00006c/train/javascript
function* generator() {
  let i = 1;
  while (true) {
    let v = yield i++;
    if (v !== undefined) i = v;
  }
}

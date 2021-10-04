//https://www.codewars.com/kata/588502f87987a27f690001f7/train/javascript
function areEqual(s1, s2) {
  let arr1 = [...s1].sort().sort((a, b) => a > b);
  let arr2 = [...s2].sort().sort((a, b) => a > b);
  return arr1.every((v, i) => v === arr2[i]);
}

function notEqual(s1, s2) {
  let arr1 = [...s1].sort().sort((a, b) => a - b);
  let arr2 = [...s2].sort().sort((a, b) => a - b);
  if (arr1.length !== arr2.length) return true;
  return !arr1.every((v, i) => v === arr2[i]);
}

//https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript
function process2Arrays(arr1, arr2) {
  let c1 = [...new Set(arr1)].filter((v) => arr2.includes(v)).length;
  let c3 = [...new Set(arr1)].filter((v) => !arr2.includes(v)).length;
  let c4 = [...new Set(arr2)].filter((v) => !arr1.includes(v)).length;
  let c2 = c3 + c4;
  return [c1, c2, c3, c4];
}

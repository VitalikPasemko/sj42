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

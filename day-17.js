//https://www.codewars.com/kata/573023c81add650b84000429/train/javascript
function countGrade(scores) {
  const object = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
  scores.map((v) => {
    if (v >= 100) return object[`S`]++;
    if (v >= 90 && v < 100) return object[`A`]++;
    if (v >= 80 && v < 90) return object[`B`]++;
    if (v >= 60 && v < 80) return object[`C`]++;
    if (v >= 0 && v < 60) return object[`D`]++;
    if (v < 0) return object[`X`]++;
  });
  return object;
}


//

//https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript
function unusualFive() {
  return 'value'.length;
}
//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
function hero(bullets, dragons){
  return dragons * 2 <= bullets;
}

//https://www.codewars.com/kata/maximum-multiple/train/javascript
function maxMultiple(divisor, bound) {
  for (let N = bound; N >= divisor; --N) {
    if (N % divisor == 0) {
      return N;
    }
  }
}

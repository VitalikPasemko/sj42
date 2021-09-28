//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript
function whatNumberIsIt(n){
  if (n === Number.MAX_VALUE) return `Input number is Number.MAX_VALUE`;
  if (n === Number.MIN_VALUE) return `Input number is Number.MIN_VALUE`;
  if (n === Number.POSITIVE_INFINITY) return `Input number is Number.POSITIVE_INFINITY`;
  if (n === Number.NEGATIVE_INFINITY) return `Input number is Number.NEGATIVE_INFINITY`;
  if (Number(n)) return `Input number is ${n}`;
  else return `Input number is Number.NaN`;
}

//https://www.codewars.com/kata/57238ceaef9008adc7000603/train/javascript
function colorOf(r, g, b) {
  let colorRed = r.toString(16);
  let colorGreen = g.toString(16);
  let colorBlue = b.toString(16);

  colorRed = colorRed.length < 2 ? "0" + colorRed : colorRed;
  colorGreen = colorGreen.length < 2 ? "0" + colorGreen : colorGreen;
  colorBlue = colorBlue.length < 2 ? "0" + colorBlue : colorBlue;
  return "#" + colorRed + colorGreen + colorBlue;
}

//https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
function howManySmaller(arr, n) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].toFixed(2)) < n) {
      count++;
    }
  }
  return count;
}

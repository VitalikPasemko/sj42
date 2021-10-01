//https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
function cutIt(arr) {
  let minlength = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < minlength) {
      minlength = arr[i].length;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, minlength);
  }
  return arr;
}

//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
function firstToLast(str,c){
  return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}
//https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript
function splitAndMerge(string, separator) {
  return string
    .split("")
    .join(separator + "")
    .split(separator + " " + separator)
    .join(" ");
}

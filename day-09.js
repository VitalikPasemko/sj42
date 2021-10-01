//https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript
function cutIt(arr){
  let minlength = Infinity;
  for (let i=0; i<arr.length; i++) {
    if (arr[i].length < minlength) {
      minlength = arr[i].length;
    }
  }
  for (let i=0; i<arr.length; i++) {
    arr[i] = arr[i].slice(0,minlength);
  }
  return arr;
}

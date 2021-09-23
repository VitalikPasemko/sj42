//https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
function padIt(str, n) {
  while (n > 0) {
    str = n-- % 2 ? '*' + str : str + '*';
  }
  return str;
}

//https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
function pickIt(arr) {
  const odd = [],
    even = [];
  for (var i = 0; i < arr.length; i++) {
    arr[i] % 2 !== 0 ? odd.push(arr[i]) : even.push(arr[i]);
  }
  return [odd, even];
}

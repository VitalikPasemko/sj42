//https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
function padIt(str, n) {
  while (n > 0) {
    str = n-- % 2 ? '*' + str : str + '*';
  }
  return str;
}

//

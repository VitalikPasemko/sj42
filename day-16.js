//https://www.codewars.com/kata/572cb264362806af46000793/train/javascript
function threeInOne(array) {
  let lastIndex = 0;
  const finalArray = [];
  for (let i = 0; i < array.length; i += 3) {
    let sumArray = array.slice(lastIndex, lastIndex + 3).reduce((a, b) => {
      return a + b;
    });
    finalArray.push(sumArray);
    lastIndex += 3;
  }
  return finalArray;
}

//https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript
function sortIt(array) {
  return array.slice().sort((a, b) => {
    let countA = array.filter((v) => v === a).length;
    let countB = array.filter((v) => v === b).length;
    if (countA === countB) return b - a;
    else if (countA > countB) return 1;
    else return -1;
  });
}

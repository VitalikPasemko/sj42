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

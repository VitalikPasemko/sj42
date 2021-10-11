//https://www.codewars.com/kata/5735e39313c205fe39001173/train/javascript
function countAnimals(animals, count) {
  let res = [];
  for (let i = 0; i < count.length; i++)
    res.push(animals.split(count[i]).length - 1);
  return res;
}

https://www.codewars.com/kata/573975d3ac3eec695b0013e0/train/javascript
function findSimilarity(string, word) {
  const regularA = word[0] + word.slice(1, -1).replace(/./g, ".") + word.slice(-1);
  const regularB = new RegExp("^" + regularA + "$");
  return string
    .split(" ")
    .filter((v) => regularB.test(v))
    .join(" ");
}

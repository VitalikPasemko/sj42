//https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/solutions/javascript
function shuffleIt(array, ...el) {
  for (let i = 0; i < el.length; i++) {
    let [a, b] = [el[i][0], el[i][1]];
    [array[a], array[b]] = [array[b], array[a]];
  }
  return array;
}

//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/train/javascript
function loopArr(array, direction, steps) {
  for (let i = 1; i <= steps; i++) {
    if (direction === "left") {
      array.push(array.shift());
    }
    if (direction === "right") {
      array.unshift(array.pop());
    }
  }
  return array;
}

//https://www.codewars.com/kata/572af273a3af3836660014a1/train/javascript
function infiniteLoop(array, d, n) {
  for (let i = 1; i <= n; i++) {
    if (d === "left") {
      array[2].push(array[0].shift());
      array[1].push(array[2].shift());
      array[0].push(array[1].shift());
    }
    if (d === "right") {
      array[0].unshift(array[2].pop());
      array[1].unshift(array[0].pop());
      array[2].unshift(array[1].pop());
    }
  }
  return array;
}

//https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/solutions/javascript
function shuffleIt(array, ...el) {
  for (let i = 0; i < el.length; i++) {
    let [a, b] = [el[i][0], el[i][1]];
    [array[a], array[b]] = [array[b], array[a]];
  }
  return array;
}

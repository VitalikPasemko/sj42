//https://www.codewars.com/kata/573156709a231dcec9000ee8/train/javascript
function tailAndHead(array) {
  let m = [];
  for (let i = 0; i < array.length - 1; i++)
    m.push((array[i] % 10) + Number((array[i + 1] + "")[0]));
  return m.reduce((a, b) => a * b);
}


//https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript
function blackAndWhite(array) {
  let arrayType = "";
  if (!Array.isArray(array)) arrayType = "fake";
  else if (array.includes(5) && array.includes(13)) arrayType = "black";
  else if (!(array.includes(5) && array.includes(13))) arrayType = "white";
  return `It's a ${arrayType} array`;
}



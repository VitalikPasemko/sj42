//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript
function alienLanguage(str) {
  return str
    .split(" ")
    .map((v) => v.slice(0, -1).toUpperCase() + v.slice(-1).toLowerCase())
    .join(" ");
}

//https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript
function topSecret(str) {
  return str.replace(/[a-z]/gi, (char) =>
    String.fromCharCode(char.charCodeAt() + (`ABCabc`.includes(char) ? 23 : -3))
  );
}

//https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript
function fiveLine(string) {
  const s = string.trim();
  let result = "";
  for (let i = 1; i < 6; i++) {
    result += s.repeat(i) + "\n";
  }
  return result.trim();
}

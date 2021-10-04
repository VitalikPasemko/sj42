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

//https://www.codewars.com/kata/542106e2dda52658bf00001a/train/javascript
let exec = require("child_process").exec;

function execute(command, callback) {
  exec(command, function (err, stdout) {
    if (err) {
      callback(err);
    } else {
      callback(null, stdout);
    }
  });
}

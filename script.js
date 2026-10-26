// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

function prashantpromise(duration) {
  const div = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
  return div;
}

const ans = prashantpromise(2000);
ans.then(function () {
  console.log("timeout is done");
});

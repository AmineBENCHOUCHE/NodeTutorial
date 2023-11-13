const { log } = require("console");
const { readFile, writeFile } = require("fs");

//CALLBACK HELL
console.log("START");
readFile("../content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  // console.log(first);
  readFile("../content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "../content/result-async.txt",
      `Here is the result : ${first} , ${second} `,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("DONE WITH THIS TASK ");
      }
    );
  });
});
console.log("STARTING NEXT TASK");

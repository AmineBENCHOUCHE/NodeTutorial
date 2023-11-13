const { readFileSync, writeFileSync } = require("fs");

console.log("START");
const first = readFileSync("../content/first.txt", "utf8");
const second = readFileSync("../content/second.txt", "utf8");

console.log(first, second);

// By default it overwrite
writeFileSync(
  "../content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);

// If we want to append
writeFileSync(
  "../content/result-sync.txt",
  `Here is the result : ${first} , ${second} `,
  { flag: "a" }
);
console.log("DONE WITH THIS TASK");
console.log("STARTING THE NEXT ONE");

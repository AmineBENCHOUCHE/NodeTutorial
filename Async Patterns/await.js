//const { readFile, writeFile } = require("fs");
const { readFile, writeFile } = require("fs").promises;
const util = require("util");
//We use our own wrapper function
//const readFilePromise = util.promisify(readFile);
//const writeFilePromise = util.promisify(writeFile);
const start = async () => {
  try {
    //const first = await readFilePromise("./content/first.txt", "utf8");
    const first = await readFile("../content/first.txt", "utf8");
    //const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFile("../content/second.txt", "utf8");
    //const second = await readFilePromise("./content/second.txt", "utf8");
    await writeFile(
      "../content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${first} ,  ${second} `,
      { flag: "a" }
    );
    // await writeFilePromise(
    //   "./content/result-mind-grenade.txt",
    //   `THIS IS AWESOME: ${first}, ${second}`
    // );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

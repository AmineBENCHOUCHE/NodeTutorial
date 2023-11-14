const EventEmitter = require("events");

const customEmitter = new EventEmitter();
// FIRST WE LISTEN TO THE EVENT
// response is the name of the event
customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with ${id}`);
});
customEmitter.on("response", () => {
  console.log("some other logic received");
});
// SECOND WE EMIT
customEmitter.emit("response", "john", 34);

//OTHER EXAMPLE

const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);

// made it to path part just above
// 5. JSON Responses
// https://race.notion.site/Getting-Started-with-Express-js-Hello-Express-54d7dd9bf33a4ae99512ce3a2aa58d4b#b81c8cb695c94f56a4acf7886933bdb8

import express from "express";

const server = express();
const port = 3000;

server.get("/", (req, res) => {
  res.setHeader("content-type", "text/plain");
  res.status(200).send("it worked");
  res.send("Hello world");
});

server.post("/post", (req, res) => {
  res.send("Got a POST request");
});

server.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

server.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

server.listen(port, () => {
  console.log(`app listening from port, ${port}`);
});

const express = require("express");

const app = express();

app.use('/users', (req, res, next) => {
  console.log("Hello from middleware 1");
  res.send('<h1>Users page</h1>');
})

app.use('/', (req, res, next) => {
  console.log("Hello from middleware 2");
  res.send('<h1>My response</h1>');
})

app.listen(4000);
const express = require("express");
const todoRouter = require("./todo");

server = express();

server.use("/todo", todoRouter);

server.listen(3000, function()
{
    console.log("Server Up And Running");
});
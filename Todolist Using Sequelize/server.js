const express = require("express");
const databaseHandler = require("./database/databaseHandler"); 

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use("/", express.static("./public"));
server.set("view engine", "hbs");

var items = [];
server.get("/", function(req, res)
{
    databaseHandler.getItems()
    .then(function(listItems)
    {
        items=listItems;
        res.render("index", 
        {
            items
        });
    }); 
});

server.post("/", function(req, res)
{
    databaseHandler.addItem(req.body.item)
    .then(function(data)
    {
        res.redirect("/");
    });
});

server.patch("/", function(req, res)
{
    databaseHandler.toggleStrike(req.body.item).then();
    res.sendStatus(200);
});

server.delete("/", function(req, res)
{
    databaseHandler.deleteItems();
    res.sendStatus(200);
});

databaseHandler.syncDatabase()
.then(function()
{
    let port = 4000;
    server.listen(port, function()
    {
        console.log("Server Up And Running On 127.0.0.1:" + port);
    });
});


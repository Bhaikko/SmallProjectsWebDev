const express = require("express");
const fs = require("fs");
const router = express.Router();

router.use(express.urlencoded({extended: true}));
let todoList = [];

fs.readFile("./todo/data.dat", "utf8", function(err, data)
{
    if(err)
    {
        fs.writeFile("./todo/data.dat", "", function(err, done)
        {
            console.log("New Database Created");
        });
        return;
    }
    else 
    {
        if(data=="")
            return;

        todoList = JSON.parse(data);
    }
});

function writeFile(data, res)
{
    data = JSON.stringify(todoList);
    fs.writeFile("./todo/data.dat", data, function(err, done)
    {
        res.send(todoList);
    });
}


router.get("/", function(req, res)
{
    fs.readFile("./todo/data.dat", "utf8", function(err, data)
    {
        data = JSON.parse(data);
        res.send(data);
    });
    
});

router.post("/", function(req, res)
{
    let newEntry = 
    {
        name: req.body.name,
        id: todoList.length,
        bStriked: false,
        time: (new Date()).getHours() + ":" + (new Date()).getMinutes()
    }
    todoList.push(newEntry);
    
    writeFile(todoList, res);
});

router.patch("/:id", function(req, res)
{
    if(parseInt(req.params.id) < todoList.length + 1)
    {
        todoList[parseInt(req.params.id)].name = req.body.name;
        todoList[parseInt(req.params.id)].bStriked = !!req.body.bStriked;
    }
    writeFile(todoList, res);
});

router.delete("/:id", function(req, res)
{
    if(parseInt(req.params.id) < todoList.length + 1)
    {
        todoList.splice(parseInt(req.params.id), 1);
    }
    todoList.map(function(current, index)
    {
        if(index>=parseInt(req.params.id))
            current.id = current.id - 1;
    });

    writeFile(todoList, res);

});

module.exports = router;
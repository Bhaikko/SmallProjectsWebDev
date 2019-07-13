const Sequelize = require("sequelize");

const sequelize = new Sequelize("todoListDatabase", "root", "root",
{
    dialect: "sqlite",
    storage: "./database/todoListDatabase.sqlite",
    logging: false
});

const TodoList = sequelize.define("todoList", 
{
    item:
    {
        type: Sequelize.STRING,
        primaryKey: true, 
        allowNull: false
    },
    striked:
    {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
});

function getItems()
{
    return TodoList.findAll();
}

function addItem(itemToAdd)
{
    const newItem = {item: itemToAdd};
    return TodoList.create(newItem);
}

function toggleStrike(itemToToggle)
{
    let bStriked = false;
    TodoList.findAll(
        {
            where: {item:   itemToToggle}
        }
    )
    .then(function(item)
    {
        bStriked = item[0].dataValues.striked;
        let a = TodoList.update(
        {
            striked: !bStriked 
        },
        {
            where: {item: itemToToggle}
        });
        console.log(a);
    });    
}

function deleteItems()
{
    return TodoList.destroy(
        {
            where: {striked: true}
        }
    );
}

sequelize.authenticate()
.then(function()
{
    console.log("Connection Established To Database");
})
.catch(function()
{
    console.log("Error Connecting To Database");
});

function syncDatabase()
{
    return TodoList.sync();
}

module.exports = 
{
    getItems,
    addItem,
    toggleStrike,
    deleteItems,
    syncDatabase
};
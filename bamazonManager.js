var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Strawberry!234Pw",
    database:"bamazon"
});

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id" + connection.threadId);
});

function showInventory(){
    connection.query('SELECT * FROM Products', function(err, res){
        if(err){console.log(err)};
        var theDisplayTable = new Table({
            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
            colWidths: [10,25,25,10,14]
        });
        for(i=0; i<res.length;i++){
            theDisplayTable.push([res[i].item_id,res[i].product_name,res[i].department_name,res[i].price,res[i].stock_quantity]);
        }
        console.log(theDisplayTable.toString());
        manageInventory();
    });
};

function manageInventory(){
    inquirer.prompt([{
        name: "action",
        type: "list",
        message: "Choose an option below to manage current inventory:",
        choices: ["Restock Inventory", "Add New Product", "Remove An Existing Product"]
    }]).then(function(answers){
        switch(answers.action){
            case 'Restock Inventory':
                restockRequest();
                break;
            case 'Add New Product':
                addRequest();
                break;
            case 'Remove An Existing Product':
                removeRequest();
                break;
        }
    });
};

function restockRequest(){
    inquirer.prompt([
        {
            name:"ID",
            type:"input",
            message:"What is the item number of the item you would like to restock?"
        },
        {
            name:"Quantity",
            type:"input",
            message:"What is the quantity you would like to add?"
        },
    ]).then(function(answers){
        var quantityAdded = answers.Quantity;
        var IDOfProduct = answers.ID;
        restockInventory(IDOfProduct, quantityAdded);
    });
};

function restockInventory(id, quant){
    connection.query('SELECT * FROM Products WHERE item_id = '+id, function(err, res){
        if(err){console.log(err)};
        connection.query('UPDATE Products SET ? WHERE ?',
        [
            {
                stock_quantity: res[0].stock_quantity + quant
            },
            {
                item_id: id
            }
        ]);

        showInventory();
    });
};

function addRequest(){
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Add ID Number"
        },
        {
            name: "Name",
            type: "input",
            message: "What is the name of the product you would like to stock?"
        },
        {
            name: "Category",
            type: "input",
            message: "What is the category for the product?"
        },
        {
            name: "Price",
            type: "input",
            message: "What is the price for the item?"
        },
        {
            name: "Quantity",
            type: "input",
            message: "What is the quantity you would like to add?"
        },
    ]).then(function(answers){
        var id = answers.ID;
        var name = answers.Name;
        var category = answers.Category;
        var price = answers.Price;
        var quantity = answers.Quantity;
        addNewProduct(id, name, category, price, quantity);
    });
};

function addNewProduct(name, category, price, quantity){
    connection.query('INSERT INTO Products (item_id,product_name,department_name,price,stock_quantity) VALUES("' + id + '","' + name + '","' + category + '","' + price + '","' + quantity + ')');
    showInventory();
};

function removeRequest(){
    inquirer.prompt([{
        name:"ID",
        type:"input",
        message:"What is the item number of the item you would like to remmove?"
    }]).then(function(answer){
        var id = answer.ID;
        removeProduct(id);
    });
};

function removeProduct(id){
    connection.query('DELETE FROM Products WHERE item_id = ' + id);
    showInventory();
};

showInventory();
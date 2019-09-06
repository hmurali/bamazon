# Bamazon
## Overview
This application implements a simple command line based storefront using the npm [inquirer](https://www.npmjs.com/package/inquirer) package and the MySQL database backend together with the npm [mysql](https://www.npmjs.com/package/mysql) package. The application presents the user with two interfaces: **customer** and **manager**. The npm [cli-table](https://www.npmjs.com/package/cli-table) package displays the data in a neatly formatted table in the command line interface. 

You'll also need to have the MySQL database already set up on your machine in order to run this application. With MySQL, you will be able to create the *Bamazon* database and the *products* table with the SQL code found in [bamazon.sql](https://github.com/hmurali/bamazon/blob/master/bamazon.sql). Run this code inside your MySQL client to populate the database, then you will be ready to proceed with running the Bamazon customer and manager interfaces.

## Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.
When you launch the customer interface, before placing your order, you will see a table with the products currently available for purchase (see image below):
![Products table](https://github.com/hmurali/bamazon/blob/master/bamazonCustomerDisplayProducts.PNG)

The below image illustrates what happens when you place an order successfully:
![Success purchase](https://github.com/hmurali/bamazon/blob/master/bamazonCustomerPurchaseOrderSuccess.PNG)

The below image illustrates what happens when you specify a quantity greater than the current stock of the specified item:
![Unsuccessful purchase](https://github.com/hmurali/bamazon/blob/master/bamazonCustomerPurchaseOrderInsufficientQuantity.PNG)

## Manager Interface
The manager interface presents a list of three options, as below.
1. ![Inventory options](https://github.com/hmurali/bamazon/blob/master/bamazonManagerManageInventoryOptions.PNG)
1. ![Restock Inventory](https://github.com/hmurali/bamazon/blob/master/bamazonManagerRestockInventory.PNG)
1. ![Add New Product](https://github.com/hmurali/bamazon/blob/master/bamazonManagerAddNewProduct.PNG)
1. ![Remove an Existing Product](https://github.com/hmurali/bamazon/blob/master/bamazonManagerRemoveExistingProduct.PNG)

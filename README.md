# Bamazon

## Description
This application is a simple command line storefront using two npm packages [mysql](https://www.npmjs.com/package/mysql) and [inquirer](https://www.npmjs.com/package/inquirer).

## Customer Interface
The customer interface allows the user to view the current inventory of store items. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface, please follow the steps below:

```
git clone git@github.com:lclc68lclc/bamazon.git
cd bamazon
npm install
node bamazonCustomer.js
```

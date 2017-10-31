var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

var questions = [{
        name: "purchase",
        type: "input",
        message: "what is the ID of the product you would like?"
    },
    {
        name: "quantity",
        type: "input",
        message: "How many would you like?"
    }
];

connection.connect(function(err) {
    if (err) throw err;
    productSearch();
});

function productSearch() {
    var query = "SELECT item_id, product_name, price FROM products";
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " || Name: " + res[i].product_name + " || Price: " + res[i].price);
        }
        buyProducts();
    });
}

function buyProducts() {
    inquirer
        .prompt(questions).then(function(answer) {
            var query = "SELECT item_id, product_name, price, stock_quantity, stock_quantity - ? FROM products WHERE item_id = ?";
            connection.query(query, [answer.quantity, answer.purchase], function(err, res) {
                if (res[0].stock_quantity > answer.quantity) {
                    console.log("You ordered " + answer.quantity + " of the " + res[0].product_name);
                    var priceUpdate = parseFloat(res[0].price) * parseInt(answer.quantity);
                    console.log("Your total order price is : $" + priceUpdate);
                    var quantityUpdate = parseInt(res[0].stock_quantity) - parseInt(answer.quantity);
                    updateQuantity(quantityUpdate, res[0].item_id);
                } else {
                    console.log("Insufficient quantity!");
                }
                connection.end();
            });
        });
}

function updateQuantity(x, y) {

<<<<<<< HEAD
    var query = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";

    connection.query(query, [x, y], function(err, res) {
        //console.log("Updated quantity: " + res.rowsaffected);
    });
}
=======
    var query = connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: x
            },
            {
                item_id: y
            }
        ],
        function(err, res) {
            console.log("Updated quantity: " + res[0].stock_quantity);
        }
    );
}
>>>>>>> 10699bd25e2241391d53fc58ea8fb117adf63ba9

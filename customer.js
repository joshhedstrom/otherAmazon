const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  database: 'other_amazon_db',
});

function showItems() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) return console.log(`ERROR: ${err}`);
        console.log(res)
        res.forEach((elem, i) => {
        	// console.log(elem)
        	console.log('------------------------------------------------------------------------------');
        	console.log(`ID# : ${elem.id}`);
        	console.log(`Item: ${elem.product_name}`);
        	console.log(`price: ${elem.price}`);
        	console.log('------------------------------------------------------------------------------');
        });
        connection.end();
    })
}
showItems();

function updateQuantity(product, stock) {
    connection.query(
        "UPDATE other_amazon_db SET ? WHERE ?", [{
            stock_quantity: stock
        }, {
            product_name: product
        }],

        (err, res) => {
            if (err) return console.log(`ERROR: ${err}`);
        }
    );
}

function addProduct(name, department, price, stock) {
    var query = connection.query(
        "INSERT INTO other_amazon_db SET ?", {
            product_name: name,
            department_name: department,
            price: startingBid,
            stock_quantity: stock
        },
        (err, res) => {
            if (err) return console.log(`ERROR: ${err}`);
        }
    );
}
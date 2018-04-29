const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  database: 'other_amazon_db',
});

function showItems() {
    connection.query("SELECT * FROM other_amazon_db", (err, res) => {
        if (err) return console.log(`ERROR: ${err}`);
        console.log(res)
        // let items = res.map(i => i.item_name)
        // console.log(items)
        // connection.end();
    })
}

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
const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    database: 'other_amazon_db',
});


function showItems() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) return console.log(`ERROR: ${err}`);
        // console.log(res)
        res.forEach((elem, i) => {
            // console.log(elem)
            console.log('------------------------------------------------------------------------------');
            console.log(`ID# : ${elem.id}`);
            console.log(`Item: ${elem.product_name}`);
            console.log(`Department: ${elem.department_name}`);
            console.log(`price: ${elem.price}`);
            console.log('------------------------------------------------------------------------------');
        });
        // connection.end();
    })
}

function updateQuantity(id, stock) {
    connection.query(
        "UPDATE products SET ? WHERE ?", [{
            stock_quantity: stock
        }, {
            id: id
        }],

        (err, res) => {
            if (err) return console.log(`ERROR: ${err}`);
        }
    );
    connection.end();
}

function addProduct(name, department, price, stock) {
    connection.query(
        "INSERT INTO products SET ?", {
            product_name: name,
            department_name: department,
            price: startingBid,
            stock_quantity: stock
        },
        (err, res) => {
            if (err) return console.log(`ERROR: ${err}`);
        }
    );
    connection.end();
}

function getQuantity(id) {
    connection.query('SELECT stock_quantity FROM products WHERE ?', {
        id: id
    }, (err, res) => {
        if (err) return console.log(`ERROR: ${err}`);
        // console.log(res[0].stock_quantity)
        return res[0].stock_quantity;
    });
    connection.end();
}

function productSelection() {
showItems()
    inquirer.prompt([{
        type: 'input',
        name: 'productSelection',
        message: 'What product would you like to buy? Enter the ID!',

    }]).then((answer) => {
        // console.log(`answer: ${answer}`);
        // console.log(`productSelection: ${answer.productSelection}`)
        console.log(getQuantity(answer.productSelection))
            // console.log('quanity: ', quanity)

    })
}

productSelection()

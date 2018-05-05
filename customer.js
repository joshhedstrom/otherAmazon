const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    database: 'other_amazon_db',
});

let itemArray = [];
welcome()

function quantitySelection() {
    inquirer.prompt([{
        name: 'quantitySelection',
        type: 'input',
        message: 'How many would you like to buy?'
    }]).then((answer) => {
        console.log(answer)
    })
}

function productSelection() {
    inquirer.prompt([{
        name: 'productSelection',
        type: 'list',
        choices: itemArray,
        message: 'What product would you like to buy?'
    }]).then((answer) => {
        console.log(answer)
    })
}

function welcome() {
    loadItems();
    inquirer.prompt([{
        name: 'welcome',
        type: 'confirm',
        message: 'Welcome! Are you ready to buy something?'
    }]).then((answers) => {
        if (answers.welcome) {
            productSelection();
        } else {
            console.log('Thanks for coming!')
        }
    })
}

function loadItems() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) return console.log(`ERROR: ${err}`);
        res.forEach((elem, i) => {
            itemArray.push(`${elem.product_name} || Price: $${elem.price}`);
        });
        connection.end();
    })
}
// loadItems();

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

function getQuantity(id) {
    connection.query('SELECT stock_quantity FROM products WHERE ?', {
        id: id
    }, (err, res) => {
        if (err) return console.log(`ERROR: ${err}`);
        quantity = res[0].stock_quantity;
    });
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


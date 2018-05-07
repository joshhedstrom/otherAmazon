const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    database: 'other_amazon_db',
});

let itemArray = [];
let productSelected;
let quantitySelected;
let quantityAvailable;

welcome()

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
    })
}

function productSelection() {
    inquirer.prompt([{
        name: 'productSelection',
        type: 'list',
        choices: itemArray,
        message: 'What product would you like to buy?'
    }]).then((answer) => {
        productSelected = answer.productSelection;
        quantitySelection()
    })
}

function quantitySelection() {
    inquirer.prompt([{
        name: 'quantitySelection',
        type: 'input',
        message: 'How many would you like to buy?'
    }]).then((answer) => {
        quantitySelected = answer.quantitySelection;
        let splitArr = productSelected.split('||')
        let item = splitArr[0].trim();
        getQuantity(item)
    })
}

function updateQuantity(name, stock) {
    console.log(name)
    console.log(stock)
    connection.query(
        "UPDATE products SET ? WHERE ?", [{
            stock_quantity: stock
        }, {
            product_name: name
        }],

        (err, res) => {
            if (err) return console.log(`ERROR: ${err}`);
        }
    );
}

function getQuantity(name) {
    connection.query('SELECT stock_quantity FROM products WHERE ?', {
        product_name: name
    }, (err, res) => {
        if (err) console.log(err)
        if (res) {
            quantityAvailable = res[0].stock_quantity;
            if (quantitySelected =< quantityAvailable) {
                console.log('Order has been placed! Thank you for your business!')
                let newStock = quantityAvailable - quantitySelected
                updateQuantity(name, newStock)
            }
            else if(quantitySelected > quantityAvailable){
                console.log("I'm sorry, but the quantity you requested is not available. Please check back later")
            }
        }
    })
}
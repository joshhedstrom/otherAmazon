# otherAmazon
A demonstration of a CLI store inventory system using MySQL and Node.js

### Prerequisites

If you don't already have Node.js, you can download it [here](https://nodejs.org/en/download/)

You will also need MySQL workbench and server installed. If you don't already have it, [here is the link](https://dev.mysql.com/downloads/installer/). Download and install it to the default settings. 

### Installing

Once you've cloned or downloaded this repository to your local machine, navigate to it in the terminal to the directory and install the dependencies using:

```
npm install
```

Then, open up MySQL workbench and open a new database titled 'otherAmazon'. Then copy and paste the following code in the query box in the center of the screen:

```
DROP DATABASE IF EXISTS other_amazon_db;
CREATE DATABASE other_amazon_db;

USE other_amazon_db;

CREATE TABLE products(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30),
price INTEGER(10),
stock_quantity INTEGER(10),
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Vibrams', 'Shoes', 95, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Merrell Trailgloves', 'Shoes', 90, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Merrell Vaporgloves', 'Shoes', 105, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Nathan HPL 020 Race Pack', 'Hydration', 99, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Nathan QuikShot Handheld', 'Hydration', 19, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Bayleaf Pace Shorts', 'Clothing', 15, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Running Belt', 'Accessories', 5, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Xero Running Sandals', 'Shoes', 49, 6);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Runtastic', 'Apps', 5, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES('Ultramarathon Man', 'DVD', 9, 100productsproducts);
```

Run the file by clicking the lightning bolt button directly above the text you just pasted.

Go back to the directory and run the program in the terminal by typing:

```
node customer.js
```

![Step One](./one.JPG?raw=true "The Welcome Page")

![Step Two](./two.JPG?raw=true "Choose a product")

![Step Three](./three.JPG?raw=true "Choose a Quantity")

![Step Four](./four.JPG?raw=true "Continue Shopping")


If you 'buy' any products it will update the inventory accordingly.

Let me know if you have any questions or bugs that you notice!

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript server-side runtime environment 
* [MySQL](https://www.mysql.com/) - Database Management System

## Authors

* **Josh Hedstrom** - [jhedstrom.com](https://jhedstrom.com/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

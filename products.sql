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
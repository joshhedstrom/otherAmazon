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
}
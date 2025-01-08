const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "Product 1",
        },
    ];
    // response products
    res.send(products);
    // show products in json format
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express()

// app.use((req, res, next) => {
//     res.header({
//         "Access-Control-Allow-Origin": "http://localhost:3001",
//         "Access-Control-Allow-Methods": "POST, GET, UPDATE",
//         "Access-Control-Allow-Headers": "Content-Type, Authorization"
//     })
//     next();
// })

app.use(cors());

app.get("/", (req, res) => {
    // send a db query and store the data in a variable
    const data = [
        {
            name: "Product 1",
            desc: "Something about product"
        },
        {
            name: "Product 2",
            desc: "Something about product"
        },
        {
            name: "Product 3",
            desc: "Something about product"
        },
        {
            name: "Product 4",
            desc: "Something about product"
        }
    ]
    res.json(data)
});

app.listen(PORT, () => console.log(`Servier is running on http://localhost:${PORT}`));


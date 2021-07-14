const express = require("express");
const app = express();
const port = 3001;

const products = [{
    nama: 'Sepatu nike',
    harga: 1000000,
    warna: 'hitam',
    stok: 10
},{
    nama: 'Sepatu adidas',
    harga: 1000000,
    warna: 'hitam',
    stok: 10
}];

app.get('/', (req, res) => {

    products.forEach((d, i) => {

        res.send("nama :"+ d.nama);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
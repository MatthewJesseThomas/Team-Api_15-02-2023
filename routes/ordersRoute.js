const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) =>{
    try{
        con.query("SELECT * FROM Orders", (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
router.get("/:id", (req, res) =>{
    try{
        con.query(`SELECT * FROM Orders WHERE order_id=${req.params.id}`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
router.post("/", (req, res) =>{
    try{
        con.query(`INSERT INTO Orders(order_name, billing_address, default_shipping_address, product_id, id) VALUE ("${req.body.order_name}","${req.body.billing_address}","${req.body.default_shipping_address}","${req.body.product_id}","${req.body.id}")`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
router.patch("/", (req, res) =>{
    try{
        con.query(`UPDATE Orders SET order_name = "${req.body.order_name}", billing_address = "${req.body.billing_address}", default_shipping_address = "${req.body.default_shipping_address}", product_id"${req.body.product_id}", id = "${req.body.id}"`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
router.put("/:id", (req, res) =>{
    try{
        con.query(`UPDATE Orders SET order_name = "${req.body.order_name}",billing_address = "${req.body.billing_address}", default_shipping_address = "${req.body.default_shipping_address}", product_id = "${req.body.product_id}", id = "${req.body.id}"`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
router.delete("/:id", (req, res) =>{
    try{
        con.query(`DELETE FROM Orders WHERE Order_id= "${req.params.id}"`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

module.exports = router;

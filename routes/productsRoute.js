const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");
const { message } = require("../middleware/message");

router.get("/", message, (req, res) =>{
    try{
        con.query("SELECT * FROM Products", (err, results) =>{
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
        con.query(`SELECT * FROM Products WHERE product_id=${req.params.id}`, (err, results) =>{
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
        con.query(`INSERT INTO Products(product_name, price, Qty, category_id) VALUE ${req.body.product_name},${req.body.price},${req.body.Qty},${req.body.category_id}`, (err, results) =>{
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
        con.query(`UPDATE Products SET product_name = ${req.body.product_name},${req.body.price},${req.body.Qty},${req.body.category_id}`, (err, results) =>{
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
        con.query(`UPDATE Products SET product_name = ${req.body.product_name},${req.body.price},${req.body.Qty},${req.body.category_id}`, (err, results) =>{
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
        con.query(`DELETE FROM Products WHERE product_id=${req.params.id}`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

module.exports = router;
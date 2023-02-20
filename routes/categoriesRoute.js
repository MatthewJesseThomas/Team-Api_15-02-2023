const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

router.get("/", (req, res) =>{
    try{
        con.query("SELECT * FROM Category", (err, results) =>{
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
        con.query(`SELECT FROM Category WHERE category_id=${req.params.id}`, (err, results) =>{
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
        con.query(`INSERT INTO Category(order_name) VALUE ("${req.body.category_name}")`, (err, results) =>{
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
        con.query(`UPDATE Category SET category_name = "${req.body.category_name}"`, (err, results) =>{
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
        con.query(`UPDATE Category SET category_name = "${req.body.category_name}"`, (err, results) =>{
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
        con.query(`DELETE FROM Category WHERE category_id= "${req.params.category_id}"`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

module.exports = router;
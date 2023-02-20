const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

// Message Middleware
const { message } = require("../middleware/message");

router.get("/", message, (req, res, next) =>{
    try{
        con.query("SELECT * FROM Users", (err, results) =>{
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
        con.query(`SELECT * FROM Users WHERE id=${req.params.id}`, (err, results) =>{
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
        con.query(`INSERT INTO Users(email, password, full_name, billing_address, default_shipping_address, country, phone) VALUE ("${req.body.email}","${req.body.password}","${req.body.full_name}","${req.body.billing_address}","${req.body.default_shipping_address}","${req.body.country}","${req.body.phone}")`, (err, results) =>{
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
        con.query(`UPDATE Users SET email = "${req.body.email}", password = "${req.body.password}", full_name = "${req.body.full_name}", billing_address = "${req.body.billing_address}", default_shipping_address = "${req.body.default_shipping_address}", country = "${req.body.country}", phone = "${req.body.phone}" WHERE user_id = ${req.params.id}`, (err, results) =>{
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
        con.query(`UPDATE Users SET email = "${req.body.email}", password = "${req.body.password}", full_name = "${req.body.full_name}", billing_address = "${req.body.billing_address}", default_shipping_address = "${req.body.default_shipping_address}", country = "${req.body.country}", phone = "${req.body.phone}" WHERE user_id = ${req.params.id}`, (err, results) =>{
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
        con.query(`DELETE FROM Users WHERE id = "${req.params.id}"`, (err, results) =>{
            if(err) throw err;
            res.send(results);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});

module.exports = router;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
// Middleware ErrorHandling
const { errorHandling } = require("./middleware/ErrorHandling");

app.set("port", process.env.PORT || 6969);
app.use(express.json());

let corsOption = {
    origin: '*'
};
app.use(cors(corsOption));

const userRouter = require('./routes/userRoute');
const orderRouter = require('./routes/ordersRoute');
const categoriesRouter = require('./routes/categoriesRoute');
const productsRouter = require('./routes/productsRoute');

app.use('/users', userRouter, errorHandling);
app.use('/orders', orderRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);

app.get('/', (req, res) =>{
    res.json({ message: "Welcome To The Mein Hur!!!"});
});

app.listen(app.get("port"), () =>{
    console.log(`Listening For Calls On Port ${app.get("port")}`);
    console.log("Press Ctrl+C to exit server");
});

app.use(errorHandling);
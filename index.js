const express = require('express');
const cors = require('cors');
const app = express();

app.set("port", process.env.PORT || 6969);
app.use(express.json());

let corsOption = {
    origin: '*'
};
app.use(cors(corsOption));

const userRouter = require('./routes/userRoute');

app.use('/users', userRouter);

app.get('/', (req, res) =>{
    res.json({ message: "Welcome To The Store!!!"});
});

app.listen(app.get("port"), () =>{
    console.log(`Listening For Calls On Port ${app.get("port")}`);
    console.log("Press Ctrl+C to exit server");
});
const exp=require("express");
const app = exp();
const cors= require("cors");
const bodyPerser = require("body-parser");
const fu= require("express-fileupload");


const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://final-year-project:final-year-project@cluster0.c0rmdus.mongodb.net/?retryWrites=true&w=majority')

const java = require("./routes/Java");
const python= require("./routes/Python");




app.use(exp.static('public'));
// app.use(cors());
app.use(fu());

// parse application/x-www-form-urlencoded
app.use(bodyPerser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyPerser.json());

app.get("/",(req,res)=>{
    res.send("hello Express");
})

app.use("/java",java);
app.use("/python",python);



app.listen(2000);
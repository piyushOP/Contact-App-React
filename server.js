const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false}));


// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));



app.get("/", function(req,res){
    res.json({ msg : "Contact keeper API"});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT , function(){
    console.log("Server is on 5000");
})
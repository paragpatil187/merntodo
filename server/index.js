const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port
const port = process.env.PORT || 5500;

//use cors
app.use(cors());

//import routes
const TodoItemRoute = require("./routes/todoItems");



    mongoose.connect("mongodb+srv://paragpatil187:Parag21@cluster0.0ljsu.mongodb.net/?retryWrites=true&w=majority")
       
     .then(()=>{
      app.listen(port, () => console.log(`Server running on port ${port}`));
     })
     .catch((error) => console.log(`${error} did not connect`));
    

app.use("/", TodoItemRoute);



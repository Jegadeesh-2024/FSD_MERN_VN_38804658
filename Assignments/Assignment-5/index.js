const express = require("express")
const mongoose = require("mongoose");
const crudRouter = require('../Backend/Router/FormRouter')
const app = express()
const port = 3000;
// const cors = require('cors')


// middleware:
app.use(express.json())
app.use('/', crudRouter)

mongoose.connect("mongodb+srv://jegadeshjeg24341_db_user:Jegadeesh23.@cluster0.plfc9u4.mongodb.net/?appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log("error", err);
  });

  app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    
  })
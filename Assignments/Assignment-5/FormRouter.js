const express = require('express');
const crudRouter = express.Router()

const{postData,getData,updateData, deleteData} = require('../Controller/FormController')
crudRouter.get("/",getData)
crudRouter.post("/create",postData)
crudRouter.put("/update/:id",updateData)
crudRouter.delete("/delete/:id",deleteData)


module.exports = crudRouter
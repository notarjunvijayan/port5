require('dotenv').config()

const app = require('express')();

const PORT = 8080;

app.get('/projects',(req,res)=>{
    res.status(200).send({
        'Status':'Success'
    })
})

app.listen(PORT,()=>{
    console.log("Server is live on port 8080")
})
require('dotenv').config()

const {MongoClient} = require('mongodb')

const app = require('express')();
const mongourl = process.env.URI
const PORT = 8080;

const client = new MongoClient(mongourl)


app.get('/projects',async(req,res)=>{
    try{
        await client.connect()
        const data = await client.db('Portfolio').collection("Projects").findOne()
        console.log(data)
        res.status(200).send(data)
    }catch(e){
        console.log("Error")
    }
})

app.listen(PORT,()=>{
    console.log("Server is live on port 8080")
})
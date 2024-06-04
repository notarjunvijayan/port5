require('dotenv').config()
var cors = require('cors')

const {MongoClient} = require('mongodb')

const app = require('express')();
app.use(cors())
const mongourl = process.env.URI
const PORT = process.env.PORT || 3000;

const client = new MongoClient(mongourl)


app.get('/projects',async(req,res)=>{
    try{
        await client.connect()
        const data = await client.db('Portfolio').collection("Projects").find().toArray()
        console.log(data)
        res.status(200).send(data)
    }catch(e){
        console.log("Error")
    }
})

app.get('/blog-list', async(req,res)=>{
    try{
        await client.connect()
        const data = await client.db('Portfolio').collection("Blogs").find().toArray()
        console.log(data)
        res.status(200).send(data)
    }catch(e){
        console.log('ERROR')
    }
})


app.listen(PORT,()=>{
    console.log("Server is live on port 8080")
})

module.exports = app;
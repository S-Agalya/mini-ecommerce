//require the express
const express=require('express')
//create a moduke using express
const app=express()
const dotenv=require('dotenv')
const path=require("path")
const cors=require('cors')
const products=require('./routes/product')
const orders=require("./routes/order")
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname,"config",'config.env')})


connectDatabase()
//CREATING MIDDLEWARE

app.use(express.json()) //this is a middleware method that will set the data from req to the body
app.use(cors());
app.use('/api/v1',products)
app.use('/api/v1',orders)

//using app we are making the server to listen
app.listen(process.env.PORT,()=>{
    console.log(`server listening to the port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})
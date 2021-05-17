const mongoose = require('mongoose')
require('dotenv').config({path: './config/.env'})


connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true , useUnifiedTopology: true })
        console.log('DataBase connected')
    } catch (error) {
        console.log('DataBase not connected') 
    }
}

module.exports=connectDB
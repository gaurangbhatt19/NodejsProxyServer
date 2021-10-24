const express=require("express")
const app=express()
const rateLimit=require("express-rate-limit")
require('dotenv').config()
const cors=require("cors")



const port= process.env.PORT || 3030

// limit api windowMs time, max number of api
const limiter=rateLimit(
    {
        windowMs:10 * 2 * 1000,
        max:5
    }
)
// middleware
app.use(limiter)
app.set("trust proxy",1)
// Static folder
app.use(express.static('public'))

app.use(cors())

// .......................Routes....................
app.use("/api",require("./routes/index"))

app.listen(port,()=>{
    console.info("Server........")
})
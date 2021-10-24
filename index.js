const express=require("express")
const app=express()

require('dotenv').config()

const cors=require("cors")

const port= process.env.PORT || 3030

app.use(cors())

// .......................Routes....................
app.use("/api",require("./routes/index"))

app.listen(port,()=>{
    console.info("Server........")
})
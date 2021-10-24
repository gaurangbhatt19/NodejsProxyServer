const url= require('url')
const express=require("express")
const router=express.Router()
const needle= require('needle')
const apiCache=require("apicache")


// Environment variables
const API_BASE_URL= process.env.API_BASE_URL
const API_KEY_NAME=process.env.API_KEY_NAME
const API_KEY_VALUE=process.env.API_KEY_VALUE

// INIT cache

let cache=apiCache.middleware

router.route('').get(cache('2 minutes'),async (req, res) => {
    try{

        console.log(url.parse(req.url,true).query)

    const params= new URLSearchParams({
        [API_KEY_NAME]:API_KEY_VALUE,
        ...url.parse(req.url,true).query
        
    })
     const apiResponse= await needle('get',`${API_BASE_URL}?${params}`)
     const data =apiResponse.body

     res.status(200).json(data)
    }catch{
    res.status(500).json('Error.............')
    }

    })


module.exports =router
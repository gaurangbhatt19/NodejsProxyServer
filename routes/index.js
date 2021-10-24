const express=require("express")
const router=express.Router()
const needle= require('needle')
// Environment variables
const API_BASE_URL= process.env.API_BASE_URL
const API_KEY_NAME=process.env.API_KEY_NAME
const API_KEY_VALUE=process.env.API_KEY_VALUE

router.route('').get(async (req, res) => {
    try{
     const apiResponse= await needle('get',`${API_BASE_URL}`)
     const data =apiResponse.body

     res.status(200).json(data)
    }catch{
    res.status(500).json('Error.............')
    }

    })


module.exports =router
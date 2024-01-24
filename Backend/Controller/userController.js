const express = require("express")
const HomeDetails = require('../Model/HomepageDB');

const getDetails = (req,res)=>{
    try {
            res.status(200).json(HomeDetails)
    } catch (error) {
      console.log(error);  
    }
}


module.exports ={getDetails}
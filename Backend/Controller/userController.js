const express = require("express")
const {HomeDetails,HomeItems,MultiFeatureDetails} = require('../Model/HomepageDB');

const getDetails = async(req,res)=>{
    try {
      const details = await HomeItems.find()
        console.log(details)
            res.status(200).json(details)
    } catch (error) {
      console.log(error);  
    }
}


const ProductDetails = async(req,res)=>{
    try {
      
        
     res.status(200).json(MultiFeatureDetails)
    } catch (error) {
      console.log(error);  
    }
}


module.exports ={getDetails,ProductDetails}
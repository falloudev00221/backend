const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const axios = require("axios")

const app = express()
const Datauser = require('./model/data.model.js');
const userData = require('./model/data.model.js');
app.use(express.json())
app.use(axios)






app.get('/',cors(),(req,res)=>{




})


app.post("/inscription",async(req,res)=>{

const{email,mdp,mdp2}=req.body


const data_sin_in={

    email:email,
    mdp:mdp
}

try{

const check = await userData.findOne({email:email})

if(check){

    res.json("existe deja ")
}else{

    res.json("not existe")

    await userData.insertMany([data_sin_in])
}

}catch(e){

   res.json("not existe compt")



}

})


app.listen(5000 , ()=>{

console.log("serveur marche avec porte de 5000")

})

app.listen(3001,()=>{


    console.log("port connected")
})




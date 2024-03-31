const mongoose = require('mongoose')

const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

app.use(axios)


mongoose.connect('mongodb+srv://falloustar162:Rby8YZXG8rIvO0iD@cluster0.hxxlrsl.mongodb.net/mybook?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{



    console.log("bien connecte")
})




.catch(()=>{


    console.log("failed connection")
})


const Data = mongoose.Schema(


    {


        adressEmail:{

            type:String,
        },
        motDepasse:{

            type:String,
        },
        ConfirmeModepasse:{

            type:String,
        }




    }


)



const userData = mongoose.model("User_inscription",Data)


module.exports= userData
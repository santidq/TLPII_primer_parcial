const mongoose = require("mongoose")

const conectarDB =()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log("BD conectada"))
    .catch((error)=>console.log(error))
}

module.exports = conectarDB
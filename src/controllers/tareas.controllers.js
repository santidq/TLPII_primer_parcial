const Tareas = require("../models/tareas.model")
const ctrl = {}

ctrl.postTarea = async(req, res)=>{
    const {titulo, descripcion} = req.body

    const nuevaTarea = new Tareas({
        titulo,
        descripcion,
        userID: req.user._id
    })

    const guardarTarea = await nuevaTarea.save();

    if(!guardarTarea){
        res.json("No se pudo crear la tarea")
    }

    res.json("Tarea creada")
}

module.exports = ctrl
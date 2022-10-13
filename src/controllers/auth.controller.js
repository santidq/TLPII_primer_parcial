const Usuario = require("../models/usuarios.model")
const bcrypt = require("bcrypt")
const ctrl = {}


ctrl.registrarse = async(req, res)=>{
    const {usuario, correo, contraseña} = req.body

    const contraseñaCifrada = bcrypt.hashSync(contraseña, 10)

    const nuevoUsuario = new Usuario({
        usuario,
        correo,
        contraseña: contraseñaCifrada
    })

    const guardarUsuario = await nuevoUsuario.save()

    if(!guardarUsuario){
        res.json("Error al crear usuario")
    }

    res.json("Usuario creado")
}



module.exports = ctrl
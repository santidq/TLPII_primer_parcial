const router = require("express").Router()

const { registrarse } = require("../controllers/auth.controller")

router.post("/registro", registrarse)



module.exports = router
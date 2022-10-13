const router = require("express").Router();
const { postTarea } = require("../controllers/tareas.controllers");
const validarToken = require("../middlewares/validartoken");

router.post("/tareas", validarToken, postTarea)


module.exports = router;
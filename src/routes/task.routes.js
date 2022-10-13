const router = require("express").Router();
const { postTarea, getTarea, putTarea } = require("../controllers/tareas.controllers");
const validarToken = require("../middlewares/validartoken");

router.post("/tareas", validarToken, postTarea)

router.get("/tareas", validarToken, getTarea)

router.put("/tareas/:id", validarToken, putTarea)

module.exports = router;
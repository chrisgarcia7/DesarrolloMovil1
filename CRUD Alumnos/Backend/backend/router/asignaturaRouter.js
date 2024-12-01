const express = require('express')
const asignaturaController= require('../controller/AsignaturaController')


const router = express.Router();

router.get('/',asignaturaController.getAsignatura)
router.post('/',asignaturaController.postAsignatura)
router.put('/:idestudiante',asignaturaController.putAsignatura)

module.exports=router;
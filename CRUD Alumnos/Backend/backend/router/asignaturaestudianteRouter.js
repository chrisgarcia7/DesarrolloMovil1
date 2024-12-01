const express = require('express')
const asignaturaestudianteController= require('../controller/AsignaturaEstudianteController')


const router = express.Router();

router.get('/',asignaturaestudianteController.getAsignaturaEstudiante)
router.post('/',asignaturaestudianteController.postAsignaturaEstudiante)
router.put('/:id',asignaturaestudianteController.putAsignaturaEstudiante)
router.delete('/:id',asignaturaestudianteController.deleteAsignaturaEstudiante)


module.exports=router;
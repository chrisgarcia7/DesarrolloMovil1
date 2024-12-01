const AsignaturaEstudiante = require('../Modelos/AsignaturaEstudiante')

exports.getAsignaturaEstudiante = async (req,resp) =>{

    try {

        //select *from estudiante
        const asignaturaestudiante = await AsignaturaEstudiante.findAll();

        resp.status(200).send(asignaturaestudiante)
        
    } catch (error) {
        resp.status(500).send(error)
        console.log('error al traer los estudiantes')
    }

}


exports.postAsignaturaEstudiante = async (req,resp) =>{

    try {

        const result = await AsignaturaEstudiante.create({
            idestudiante: req.body.estudiante,
            idasignatura: req.body.asignatura
        });
        resp.json(result)
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}

exports.putAsignaturaEstudiante = async (req,resp) =>{
    try {
    
        const result =await AsignaturaEstudiante.findByPk(req.params.id);
    
        if(result){
          await result.update(req.body);
          resp.status(200).send("actualizado correctamente")
        }
        else{
          resp.status(402).send("No se encontraron registro")
        }
       
       
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }
}
exports.deleteAsignaturaEstudiante = async (req,resp) =>{

    try {
    
        const result =await AsignaturaEstudiante.findByPk(req.params.id);
    
        if(result){
          await result.destroy();
          resp.status(200).send("Elimado correctamente")
        }
        else{
          resp.status(402).send("No se encontraron registro")
        }
       
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}


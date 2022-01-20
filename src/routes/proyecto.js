const Router = require ('express');
const router = Router ();
const modelproyecto = require ('../models/proyecto');

router.get ('/', async (req, res) => {
  const consultaproyecto = await modelproyecto.find();
  res.json(consultaproyecto);
});


router.post ('/', async (req, res) => {
  const { IdProyecto, NombreProyecto, IdAreaDeInvestigacion, DescripProy, JustifProy, ResumProy, InfoTecProy, CvCoordinador, TelCoordinador, IdUsuarioRoll, IdPeriodo}
    = req.body;
  const nuevoproyecto = new modelproyecto ({
    IdProyecto, NombreProyecto, IdAreaDeInvestigacion, DescripProy, JustifProy, ResumProy, InfoTecProy, CvCoordinador, TelCoordinador, IdUsuarioRoll, IdPeriodo
  });

  console.log(nuevoproyecto);
  await nuevoproyecto.save();
  res.json(nuevoproyecto);
});

module.exports = router;

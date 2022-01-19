const Router = require ('express');
const router = Router ();
const modelproyrecursos = require ('../models/proyrecursos');

router.get ('/', async (req, res) => {
  const consultaproyrecursos = await modelproyrecursos.find();
  res.json(consultaproyrecursos);
});


router.post ('/', async (req, res) => {
  const { IdproyectoRecursos, IdRecursos, IdProyecto}
    = req.body;
  const nuevoproyrecursos = new modelproyrecursos ({
    IdproyectoRecursos, IdRecursos, IdProyecto
  });

  console.log(nuevoproyrecursos);
  await nuevoproyrecursos.save();
  res.json(nuevoproyrecursos);
});

module.exports = router;

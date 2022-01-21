const Router = require ('express');
const router = Router ();
const modelevaluacion = require ('../models/evaluacion');

router.get ('/', async (req, res) => {
  const consultaevaluacion = await modelevaluacion.find();
  res.json(consultaevaluacion);
});

router.post ('/', async (req, res) => {
  const { IdEvaluacion, CalidadPropu, Factyvial, NomyFirmaEval, SubtotalEva}
    = req.body;
  const nuevoevaluacion = new modelevaluacion ({
    IdEvaluacion, CalidadPropu, Factyvial, NomyFirmaEval, SubtotalEva
  });

  console.log(nuevoevaluacion);
  await nuevoevaluacion.save();
  res.json(nuevoevaluacion);
});

module.exports = router;

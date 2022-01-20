const Router = require ('express');
const router = Router ();
const modelevalproy = require ('../models/evalproy');

router.get ('/', async (req, res) => {
  const consultaevalproy = await modelevalproy.find();
  res.json(consultaevalproy);
});


router.post ('/', async (req, res) => {
  const { IdEvaluacion, IdProyecto, IdUsuarioRoll, TotalEval}
    = req.body;
  const nuevoevalproy = new modelevalproy ({
    IdEvaluacion, IdProyecto, IdUsuarioRoll, TotalEval
  });

  console.log(nuevoevalproy);
  await nuevoevalproy.save();
  res.json(nuevoevalproy);
});

module.exports = router;

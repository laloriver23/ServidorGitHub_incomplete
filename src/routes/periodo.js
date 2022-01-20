const Router = require ('express');
const router = Router ();
const modelperiodo = require ('../models/periodo');

router.get ('/', async (req, res) => {
  const consultaperiodo = await modelperiodo.find();
  res.json(consultaperiodo);
});


router.post ('/', async (req, res) => {
  const { IdPeriodo, Periodo}
    = req.body;
  const nuevoperiodo = new modelperiodo ({
    IdPeriodo, Periodo
  });

  console.log(nuevoperiodo);
  await nuevoperiodo.save();
  res.json(nuevoperiodo);
});

module.exports = router;

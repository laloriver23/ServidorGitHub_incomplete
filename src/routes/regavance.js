const Router = require ('express');
const router = Router ();
const modelregavance = require ('../models/regavance');

router.get ('/', async (req, res) => {
  const consultaregavance = await modelregavance.find();
  res.json(consultaregavance);
});

router.post ('/', async (req, res) => {
  const { Idregavance, IdActividadProyecto, Porcentaje}
    = req.body;
  const nuevoregavance = new modelregavance ({
    Idregavance, IdActividadProyecto, Porcentaje
  });

  console.log(nuevoregavance);
  await nuevoregavance.save();
  res.json(nuevoregavance);
});

module.exports = router;

const Router = require ('express');
const router = Router ();
const modelactivproye = require ('../models/activproye');

router.get ('/', async (req, res) => {
  const consultaactivproye = await modelactivproye.find();
  res.json(consultaactivproye);
});


router.post ('/', async (req, res) => {
  const { Idactivproye, IdProyecto, Nombreactividad, Unidad, cantidad, MesInicio, MesFin}
    = req.body;
  const nuevoactivproye = new modelactivproye ({
    Idactivproye, IdProyecto, Nombreactividad, Unidad, cantidad, MesInicio, MesFin
  });

  console.log(nuevoactivproye);
  await nuevoactivproye.save();
  res.json(nuevoactivproye);
});

module.exports = router;

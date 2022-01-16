const Router = require ('express');
const router = Router ();
const modelcronograma = require ('../models/cronograma');

router.get ('/', async (req, res) => {
  const consultacronograma = await modelcronograma.find();
  res.json(consultacronograma);
});


router.post ('/', async (req, res) => {
  const { Idcronograma, IdProyecto, Nombreactividad, Unidad, cantidad, Meses}
    = req.body;
  const nuevocronograma = new modelcronograma ({
    Idcronograma, IdProyecto, Nombreactividad, Unidad, cantidad, Meses
  });

  console.log(nuevocronograma);
  await nuevocronograma.save();
  res.json(nuevocronograma);
});

module.exports = router;






const Router = require ('express');
const router = Router ();
const modeloficio = require ('../models/oficio');

router.get ('/', async (req, res) => {
  const consultaoficio = await modeloficio.find();
  res.json(consultaoficio);
});


router.post ('/', async (req, res) => {
  const { Idoficio, NumOficio, FechaElav, FechaReun, IdProyecto}
    = req.body;
  const nuevooficio = new modeloficio ({
    Idoficio, NumOficio, FechaElav, FechaReun, IdProyecto
  });

  console.log(nuevooficio);
  await nuevooficio.save();
  res.json(nuevooficio);
});

module.exports = router;



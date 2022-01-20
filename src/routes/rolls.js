const Router = require ('express');
const router = Router ();
const modelrolls = require ('../models/rolls');

router.get ('/', async (req, res) => {
  const consultarolls = await modelrolls.find();
  res.json(consultarolls);
});

router.post ('/', async (req, res) => {
  const { IdRoll, Roll}
    = req.body;
  const nuevorolls = new modelrolls ({
    IdRoll, Roll
  });

  console.log(nuevorolls);
  await nuevorolls.save();
  res.json(nuevorolls);
});

module.exports = router;

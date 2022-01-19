const Router = require ('express');
const router = Router ();
const modeldivision = require ('../models/division');

router.get ('/', async (req, res) => {
  const consultadivision = await modeldivision.find();
  res.json(consultadivision);
});


router.post ('/', async (req, res) => {
  const { IdDivision, Nombredivision, Lineadeinvestigacion}
    = req.body;
  const nuevodivision = new modeldivision ({
    IdDivision, Nombredivision, Lineadeinvestigacion
  });

  console.log(nuevodivision);
  await nuevodivision.save();
  res.json(nuevodivision);
});

module.exports = router;

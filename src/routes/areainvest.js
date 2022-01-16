const Router = require ('express');
const router = Router ();
const modelAreaInvest = require ('../models/areainvest');

router.get ('/', async (req, res) => {
  const consultaAreaInvest = await modelAreaInvest.find();
  res.json(consultaAreaInvest);
});


router.post ('/', async (req, res) => {
  const { IdAreadeinvestigacion, AreaInvestigaciondelproyecto}
    = req.body;
  const nuevoAreaInvest = new modelAreaInvest ({
    IdAreadeinvestigacion, AreaInvestigaciondelproyecto
  });

  console.log(nuevoAreaInvest);
  await nuevoAreaInvest.save();
  res.json(nuevoAreaInvest);
});

module.exports = router;


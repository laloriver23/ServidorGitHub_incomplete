const Router = require ('express');
const router = Router ();
const modelrecursos = require ('../models/recursos');

router.get ('/', async (req, res) => {
  const consultarecursos = await modelrecursos.find();
  res.json(consultarecursos);
});


router.post ('/', async (req, res) => {
  const {   IdRecusos, HonariosPInterno, HonariosPExterno, Materiales, Servicios, BienesInmuebles}
    = req.body;
  const nuevorecursos = new modelrecursos ({
    IdRecusos, HonariosPInterno, HonariosPExterno, Materiales, Servicios, BienesInmuebles
  });

  console.log(nuevorecursos);
  await nuevorecursos.save();
  res.json(nuevorecursos);
});

module.exports = router;

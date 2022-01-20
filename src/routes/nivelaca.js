const Router = require ('express');
const router = Router ();
const modelnivelaca = require ('../models/nivelaca');

router.get ('/', async (req, res) => {
  const consultanivelaca = await modelnivelaca.find();
  res.json(consultanivelaca);
});

router.post ('/', async (req, res) => {
  const { IdNAcademico, NombreNivelAca}
    = req.body;
  const nuevonivelaca = new modelnivelaca ({
    IdNAcademico, NombreNivelAca
  });

  console.log(nuevonivelaca);
  await nuevonivelaca.save();
  res.json(nuevonivelaca);
});

module.exports = router;

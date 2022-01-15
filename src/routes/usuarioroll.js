const Router = require ('express');
const router = Router ();
const modelusuarioroll = require ('../models/usuarioroll');

router.get ('/', async (req, res) => {
  const consultausuarioroll = await modelusuarioroll.find();
  res.json(consultausuarioroll);
});


router.post ('/', async (req, res) => {
  const {Idusuarioroll, Idusuario, Idroll}
    = req.body;
  const nuevousuarioroll = new modelusuarioroll ({
    Idusuarioroll, Idusuario, Idroll
  });

  console.log(nuevousuarioroll);
  await nuevousuarioroll.save();
  res.json(nuevousuarioroll);
});

module.exports = router;


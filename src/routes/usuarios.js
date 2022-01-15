const Router = require ('express');
const router = Router ();
const modelusers = require ('../models/usuarios');
//const {boot} = require("jasmine-core");
//const {getIifeBody} = require("@angular/compiler-cli/ngcc/src/host/esm2015_host");

router.get ('/', async (req, res) => {
 const consultausuarios = await modelusers.find();
 // console.log('consulta de usuario');
 // res.send('consulta de usuarios');


 res.json(consultausuarios);


});


router.post ('/', async (req, res) => {
 // console.log(req.body);
  const { Idusuario, Nombre, Apaterno, Amaterno, Idivision, Usuario, Contraseña, IdNAcademico}
  = req.body;

  const nuevousuario = new modelusers ({
    Idusuario, Nombre, Apaterno, Amaterno, Idivision, Usuario, Contraseña, IdNAcademico
  });

  console.log(nuevousuario);

  await nuevousuario.save();
  res.json(nuevousuario);

});


module.exports = router;



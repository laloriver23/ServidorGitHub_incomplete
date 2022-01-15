const Router = require('express');
const router = Router();
module.exports = router;


router.get('/', (req, res) => {
  //res.send('hola mundo');
  res.send({"titulo":"HOLA MEXICO","nombre":"JUAN PACO PEDRO","edad":"18","sexo":"MACHO BETA"});
});



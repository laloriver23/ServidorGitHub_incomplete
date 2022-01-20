const express = require('express');
const app = express ();
const morgan = require('morgan');

app.set('port', process.env.PORT || 4000);
app.set('json spaces',2);
app.use(morgan('dev'));
//app.use(require('./routes/usuarios'));

//conectar la base de datos
require('../configuracion/basededatos');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(require('./routes/index'));
//app.use ('/registro', require ('./routes/usuarios'));
app.use ('/consulta', require ('./routes/usuarios'));
app.use ('/usuarios', require ('./routes/usuarios'));
app.use ('/consOficio', require ('./routes/oficio'));
app.use ('/regiOficio', require ('./routes/oficio'));
app.use ('/consUsuarioroll', require ('./routes/usuarioroll'));
app.use ('/regiUsuarioroll', require ('./routes/usuarioroll'));
app.use ('/consCronograma', require ('./routes/cronograma'));
app.use ('/regiCronograma', require ('./routes/cronograma'));
app.use ('/consAreaInvest', require ('./routes/areainvest'));
app.use ('/regiAreaInvest', require ('./routes/areainvest'));
app.use ('/consDivision', require ('./routes/division'));
app.use ('/regiDivision', require ('./routes/division'));
app.use ('/consProyrecursos', require ('./routes/proyrecursos'));
app.use ('/regiProyrecursos', require ('./routes/proyrecursos'));
app.use ('/consRecursos', require ('./routes/recursos'));
app.use ('/regiRecursos', require ('./routes/recursos'));
app.use ('/consActivproye', require ('./routes/activproye'));
app.use ('/regiActivproye', require ('./routes/activproye'));

//app.use (require ('./routes/index'));
//app.get('/', (req, res) => {
  //res.send('hola mundo');
 // res.send({"titulo":"HOLA MEXICO","nombre":"JUAN PACO PEDRO","edad":"18","sexo":"MACHO ALFA"});
//});

app.listen(app.get('port'), ()=>{
  ///Codigo ASCII del BackStick }alt+96
  console.log(`El Servidor esta abierto en el puerto {4000}`);
});



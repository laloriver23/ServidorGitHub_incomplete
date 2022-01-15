
const mongoose = require ("mongoose");
const cadena = 'mongodb+srv://eduardo:eduardo@cluster0.6ztgm.mongodb.net/bdpdm';
mongoose.connect(cadena,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

  .then(db => console.log('Base de Datos Conectada'))
  .catch(error => console.log('Base de Datos no Conectada'))

/*
mongodb+srv://eduardo:eduardo@cluster0.6ztgm.mongodb.net/test

const mongoose = require ("mongoose");
const cadena = 'mongodb+srv://wualfre:wualfre@cluster0.rn6yn.mongodb.net/bdspidet';
mongoose.connect(cadena,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

  .then(db => console.log('Base de Datos Conectada'))
  .catch(error => console.log('Base de Datos no Conectada'))
  */

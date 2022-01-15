
const {Schema,model} = require('mongoose');
const usuariorollschema = new Schema ({
  Idusuarioroll: {
    type: String,
    require: true,
  },
  Idusuario: {
    type: String,
    require: true,
  },
  Idroll:  {
    type: String,
    require: true,
  },

  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('usuariosRoll', usuariorollschema);




const {Schema,model} = require('mongoose');
const usuarioschema = new Schema ({
  Idusuario: {
    type: String,
    require: true,
  },
  Nombre: {
    type: String,
    require: true,
  },
  Apaterno:  {
    type: String,
    require: true,
  },
  Amaterno: {
    type: String,
    require: true
  },
  Idivision: {
    type: String,
    require: true
  },
  Usuario: {
    type: String,
    require: true
  },
  Contraseña: {
    type: String,
    require: true
  },
  IdNAcademico: {
    type: String,
    require: true
  },

  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('Usuarios', usuarioschema);


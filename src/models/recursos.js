
const {Schema,model} = require('mongoose');
const recursosschema = new Schema ({
  IdRecusos: {
    type: String,
    require: true,
  },
  HonariosPInterno: {
    type: String,
    require: true,
  },
  HonariosPExterno:  {
    type: String,
    require: true,
  },
  Materiales: {
    type: String,
    require: true
  },
  Servicios: {
    type: String,
    require: true
  },
  BienesInmuebles: {
    type: String,
    require: true
  },
  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('Recursos', recursosschema);


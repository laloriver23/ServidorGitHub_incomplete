const {Schema,model} = require('mongoose');
const nivelacaschema = new Schema ({
  IdNAcademico: {
    type: String,
    require: true,
  },
  NombreNivelAca: {
    type: String,
    require: true,
  },
  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('NivelAcademico', nivelacaschema);


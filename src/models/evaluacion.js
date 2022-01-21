const {Schema,model} = require('mongoose');
const evaluacionschema = new Schema ({
  IdEvaluacion: {
    type: String,
    require: true,
  },
  CalidadPropu: {
    type: String,
    require: true,
  },
  Factyvial:  {
    type: String,
    require: true,
  },
  NomyFirmaEval: {
    type: String,
    require: true
  },
  SubtotalEva: {
    type: String,
    require: true
  },
  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('Evaluacion', evaluacionschema);


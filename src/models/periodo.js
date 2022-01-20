
const {Schema,model} = require('mongoose');
const periodoschema = new Schema ({
  IdPeriodo: {
    type: String,
    require: true,
  },
  Periodo: {
    type: String,
    require: true,
  },
  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('Periodo', periodoschema);


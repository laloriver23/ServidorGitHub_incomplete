const {Schema,model} = require('mongoose');
const regavanceschema = new Schema ({
  Idregavance: {
    type: String,
    require: true,
  },
  IdActividadProyecto: {
    type: String,
    require: true,
  },
  Porcentaje:  {
    type: String,
    require: true,
  },
  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('RegistroAvances', regavanceschema);


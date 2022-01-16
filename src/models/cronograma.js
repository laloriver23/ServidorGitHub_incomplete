
const {Schema,model} = require('mongoose');
const cronogramaschema = new Schema ({
  Idcronograma: {
    type: String,
    require: true,
  },
  IdProyecto: {
    type: String,
    require: true,
  },
  Nombreactividad:  {
    type: String,
    require: true,
  },
  Unidad: {
    type: String,
    require: true
  },
  cantidad: {
    type: String,
    require: true
  },
  Meses: {
    type: String,
    require: true
  },
  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('Cronogramas', cronogramaschema);


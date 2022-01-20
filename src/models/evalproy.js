
const {Schema,model} = require('mongoose');
const evalproyschema = new Schema ({
  IdEvaluacion: {
    type: String,
    require: true,
  },
  IdProyecto: {
    type: String,
    require: true,
  },
  IdUsuarioRoll:  {
    type: String,
    require: true,
  },
  TotalEval: {
    type: String,
    require: true
  },
  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('EvaluacionProyecto', evalproyschema);


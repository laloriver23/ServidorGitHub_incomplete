
const {Schema,model} = require('mongoose');
const proyrecursosschema = new Schema ({
  IdproyectoRecursos: {
    type: String,
    require: true,
  },
  IdRecursos: {
    type: String,
    require: true,
  },
  IdProyecto:  {
    type: String,
    require: true,
  },
    fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('ProyectoRecursos', proyrecursosschema);


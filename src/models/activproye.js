
const {Schema,model} = require('mongoose');
const activproyeschema = new Schema ({
  Idactivproye: {
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
  MesInicio: {
    type: String,
    require: true
  },
  MesFin: {
    type: String,
    require: true
  },
  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('ActividadesProyecto', activproyeschema);


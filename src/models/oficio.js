
const {Schema,model} = require('mongoose');
const oficioschema = new Schema ({
  Idoficio: {
    type: String,
    require: true,
  },
  NumOficio: {
    type: String,
    require: true,
  },
  FechaElav:  {
    type: String,
    require: true,
  },
  FechaReun: {
    type: String,
    require: true
  },
  IdProyecto: {
    type: String,
    require: true
  },

  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('Oficios', oficioschema);


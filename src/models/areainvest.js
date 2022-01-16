
const {Schema,model} = require('mongoose');
const areainvestschema = new Schema ({
  IdAreadeinvestigacion: {
    type: String,
    require: true,
  },
  AreaInvestigaciondelproyecto: {
    type: String,
    require: true,
  },

  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('AreaInvestigacion', areainvestschema);



const {Schema,model} = require('mongoose');
const proyectoschema = new Schema ({
  IdProyecto: {
    type: String,
    require: true,
  },
  NombreProyecto: {
    type: String,
    require: true,
  },
  IdAreaDeInvestigacion:  {
    type: String,
    require: true,
  },
  DescripProy: {
    type: String,
    require: true
  },
  JustifProy: {
    type: String,
    require: true
  },
  ResumProy: {
    type: String,
    require: true
  },
  InfoTecProy: {
    type: String,
    require: true,
  },
  CvCoordinador:  {
    type: String,
    require: true,
  },
  TelCoordinador: {
    type: String,
    require: true
  },
  IdUsuarioRoll: {
    type: String,
    require: true
  },
  IdPeriodo: {
    type: String,
    require: true
  },
  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('Proyecto', proyectoschema);


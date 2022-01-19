
const {Schema,model} = require('mongoose');
const divisionschema = new Schema ({
  IdDivision: {
    type: String,
    require: true,
  },
  Nombredivision: {
    type: String,
    require: true,
  },
  Lineadeinvestigacion:  {
    type: String,
    require: true,
  },
  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('Division', divisionschema);


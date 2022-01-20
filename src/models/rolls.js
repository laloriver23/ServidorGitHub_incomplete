
const {Schema,model} = require('mongoose');
const rollsschema = new Schema ({
  IdRoll: {
    type: String,
    require: true,
  },
  Roll: {
    type: String,
    require: true,
  },
  fecha: {
    type: Date,
    default: Date.now(),
  }
})

module.exports = model('Rolls', rollsschema);


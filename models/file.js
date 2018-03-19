const { Schema, SchemaTypes } = require('mongoose')
const timestamps = require('mongoose-timestamp')

const ScriptSchema = new Schema({
    key: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true },
  })
  

ScriptSchema.plugin(timestamps)
module.exports = m => m.model('Script', ScriptSchema)

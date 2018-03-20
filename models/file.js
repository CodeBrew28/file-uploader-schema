const { Schema, SchemaTypes } = require('mongoose')
const timestamps = require('mongoose-timestamp')

const FileSchema = new Schema({
    name: { type: String, required: true, unique: true },
    url: { type: String, required: true, unique: true },
})
  
FileSchema.plugin(timestamps)
module.exports = m => m.model('File', FileSchema)

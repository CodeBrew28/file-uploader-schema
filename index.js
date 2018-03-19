const File = require('./models/file')
module.exports = mongoose => ({
  File: File(mongoose),
})
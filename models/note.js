// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var schema = mongoose.schema;

// Create the Note schema
var noteSchema = new schema({
  body: {
    type: String
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the notes
// These ids are referred to in the Article model

// Create the Note model with the NoteSchema
var note = mongoose.model("Note", noteSchema);

// Export the Note model
module.exports = note;
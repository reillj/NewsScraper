// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var schema = mongoose.Schema;

// Create article schema
var articleSchema = new schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },
  // link is a required string
  // todo save summary paragraph instead of link
  link: {
    type: String,
    required: true
  },
  // Saves array of notes.
  notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

// Create the Article model with the ArticleSchema
var article = mongoose.model("Article", articleSchema);

// Export the model
module.exports = article;
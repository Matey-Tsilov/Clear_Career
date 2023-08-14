const mongoose = require("mongoose");

const offersSchema = new mongoose.Schema({
  //example properties with mongooseValidations
  //Change when doing a project!
  title: {
    type: String,
    required: [true, "The title is mandatory!"]
  },
  imageUrl: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "The category is mandatory!"]
  },
  description: {
    type: String,
    required: [true, "The description is mandatory!"]
  },
  requirements: {
    type: String,
    required: [true, "The requirements is mandatory!"]
  }, 
  salary: {
    type: Number,
    required: [true, "The salary is one of the most important things, please note it!"],
    min: [1000, "Hmm, ai't that too low?"],
    max: [10000, "You must be the CEO - Matey Tsilov!"]
  }, 
  _ownerId: {
   type: mongoose.Types.ObjectId,
   ref: 'User'
  }
});

const OffersCollection = mongoose.model("Offer", offersSchema);

module.exports = OffersCollection;

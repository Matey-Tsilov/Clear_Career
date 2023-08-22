const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  //example properties with mongooseValidations
  //Change when doing a project!
  email: {
    type: String,
    required: [true, 'The email is required!'],
    unique: [true, 'Email is already taken'],
    minLength: [10, 'The email should be atleast 10 characters long!']
  },
  password: {
    type: String,
    required: [true, 'The password is required!'],
    minLength: [4, 'The password should be atleast 4 characters long!']
  },
  workExp: {
    type: Number,
    reuired: [true, "How will we find a job, if you don't tell us your experience?"],
    min: [0, "You are simply too young to start working"],
    max: [70, "Are you sure, you have worked so many years?"]
  },
  sex: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "Sorry, there are only 2 genders."
    }
  }
});



userSchema.pre("save", async function (next) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(this.password, saltRounds);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;

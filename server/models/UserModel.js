const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  //example properties with mongooseValidations
  //Change when doing a project!
  username: {
    type: String,
    required: [true, 'The username is required!'],
    minLength: [5, 'The username should be atleast 5 characters long!']
    //add custom msgs: [true, 'Username field is mandatory!']
  },
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
});

userSchema.pre("save", async function (next) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(this.password, saltRounds);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;

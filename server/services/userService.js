const bcrypt = require("bcrypt");
const User = require('../models/UserModel')
const jwt = require("../utils/jwt");
const { SECRET } = require("../constants");

const blackList = []

exports.findUser = async (id) => await User.findById(id).populate("userPosts");

exports.findAndUpdateUser = async (id, updatedUser) => await User.findByIdAndUpdate(id, updatedUser)

exports.register = async (userData) => {
  const registeredUser = await User.create(userData)

  return await generateSession(registeredUser)
}
exports.login = async (email, password) => {
const existing = await User.findOne({email})
if (!existing) {
  throw new Error('Incorrect email or password!')
}
const isSame = await bcrypt.compare(password, existing?.password)
if (!isSame) {
  throw new Error('Incorrect email or password!')
}
return await generateSession(existing)
}
exports.validateToken = async (token) => {
  if (blackList.includes(token)) {
    console.log('Token is blacklisted!');
    throw new Error()
  }
  //With the secret we check if the token has been changed!
  //it might be changed, we need to handle those kind of errors!
   const valid = await jwt.verify(token, SECRET)
   return valid
}
exports.logout = (token) => blackList.push(token)

async function generateSession(user) {
    const payload = { 
      _id: user._id,
      username: user.username,
      email: user.email
    };
    const options = {expiresIn: '2d'}
  
    //use promisified version
    const token = await jwt.sign(payload, SECRET, options)
  
  return {
    _id: user._id,
    email: user.email, 
    workExp: user.workExp,
    sex: user.sex,
    profileImg: user.profileImg,
    accessToken: token
  }
} 
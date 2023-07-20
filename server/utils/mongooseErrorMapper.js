module.exports = (err) => {
  //if it doesn't meet mongoose valiadtion + is not filled
  if (err.name == "ValidationError") {
    const mongooseError = Object.values(err.errors)
    .map(err => err.properties.message)
    .join('\n')
    return mongooseError
  //if email already has a duplicate value
  }else if(err.name == "MongoServerError") {
   return 'Email is already taken!'
  }
  //if it is a normal error
  else {
    return err.message
  }
};

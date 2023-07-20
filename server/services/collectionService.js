const Collection = require('../models/CollectonModel')

exports.getAll = () => Collection.find({})
exports.getById = (id) => Collection.findById(id)
exports.create = (recordData) => Collection.create(recordData)
exports.updateById = (id, updatedItem) => Collection.findByIdAndUpdate(id, updatedItem) 
exports.deleteById = (id) => Collection.findByIdAndDelete(id) 


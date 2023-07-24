const OffersCollection = require('../models/OffersModel')

exports.getAll = () => OffersCollection.find({})
exports.getById = (id) => OffersCollection.findById(id)
exports.create = (recordData) => OffersCollection.create(recordData)
exports.updateById = (id, updatedItem) => OffersCollection.findByIdAndUpdate(id, updatedItem) 
exports.deleteById = (id) => OffersCollection.findByIdAndDelete(id) 


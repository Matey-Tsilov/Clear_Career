const router = require('express').Router()
const userController = require('./controllers/userController')
const collectionController = require('./controllers/collectionController')

router.use('/data/offers', collectionController)
router.use('/users', userController)

module.exports = router
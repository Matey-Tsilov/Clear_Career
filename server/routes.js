const router = require('express').Router()
const userController = require('./controllers/userController')
const collectionController = require('./controllers/collectionController')

router.use('/catalog', collectionController)
router.use('/', userController)

module.exports = router
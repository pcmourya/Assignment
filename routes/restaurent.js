const express = require('express')
const { getRestaurent,saveRestaurent} = require('../controllers/restaurent')
const router = express.Router()

router.route('/').post(getRestaurent)
router.route('/save').post(saveRestaurent)

module.exports = router
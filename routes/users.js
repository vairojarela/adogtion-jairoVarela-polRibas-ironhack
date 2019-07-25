const express = require('express')
const router = express.Router()
const { isNotLoggedIn } = require('../middlewares/authMiddlewares')

module.exports = router

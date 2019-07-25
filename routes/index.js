const express = require('express')
const router = express.Router()

const User = require('../models/User.js')

/* GET home page. */
router.get('/', async (req, res, next) => {
  if (req.session.currentUser) {
    const lastScripts = await User.find({})
    console.log(lastScripts)
    return res.render('home', { lastScripts })
  }
  res.render('index', { title: 'Grizzly' })
})

module.exports = router

const express = require('express')
const router = express.Router()
const User = require('../models/User.js')
const Chat = require('../models/Chat.js')
const fs = require('fs')
const login = require('facebook-chat-api')

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findById(req.session.currentUser._id).populate({
      path: 'chat',
      populate: {
        path: 'chatUsers'
      }
    })

    console.log(user)
    res.render('Chats/chats', { user })
  } catch (err) {
    next(err)
  }
})

router.get('/create', async (req, res, next) => {
  res.redirect('/')
})

router.get('/:id', (req, res, next) => {
  res.redirect('/')
})

router.post('/:id/newMessage', (req, res, next) => {
  login({ appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8')) }, (err, api) => {
    if (err) return console.error(err)

    var yourID = '000000000000000'
    var msg = { body: 'Hey!' }
    api.sendMessage(msg, yourID)
  })
})

module.exports = router

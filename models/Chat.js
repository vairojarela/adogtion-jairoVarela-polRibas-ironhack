'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const chatSchema = new Schema({
  chatUsers: [{
    type: ObjectId,
    ref: 'User'
  }],
  message: [{
    text: String,
    idUser: {
      type: ObjectId,
      ref: 'User'
    },
    data: Date
  }]
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat

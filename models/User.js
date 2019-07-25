'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  surName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  recipes: [{
    type: ObjectId,
    ref: 'Recipe'
  }],
  chat: [{
    type: ObjectId,
    ref: 'Chat'
  }]
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User

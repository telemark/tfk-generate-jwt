'use strict'

const jwt = require('jsonwebtoken')

module.exports = options => {
  if (!options) {
    throw new Error('Missing required input: options object')
  }

  if (!options.key) {
    throw new Error('Missing required input: options.key')
  }

  if (!options.payload) {
    throw new Error('Missing required input: options.payload')
  }

  return jwt.sign(options.payload, options.key)
}

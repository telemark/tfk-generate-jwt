'use strict'

const tap = require('tap')
const jwt = require('jsonwebtoken')
const generateToken = require('../index')
const secret = 'NeverShareYourSecret'
const payload = {
  name: 'zrrrzt',
  description: 'general nice guy'
}
const options = {
  expiresIn: '1h',
  issuer: 'https://auth.t-fk.no'
}
const expected = jwt.sign(payload, secret)
const expectedWithOptions = jwt.sign(payload, secret, options)
const token = generateToken({ key: secret, payload: payload })
const tokenWithOptions = generateToken({ key: secret, payload: payload, options: options })

tap.equal(expected, token, 'Generates expected token')

tap.equal(expectedWithOptions, tokenWithOptions, 'Generates expected token with options')

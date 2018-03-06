[![Build Status](https://travis-ci.org/telemark/tfk-generate-jwt.svg?branch=master)](https://travis-ci.org/telemark/tfk-generate-jwt)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-generate-jwt/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-generate-jwt?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-generate-jwt.svg)](https://greenkeeper.io/)

# tfk-generate-jwt

Generate jwt-token

## Installation

```sh
$ npm i tfk-generate-jwt
```

## Usage

```JavaScript
const generateToken = require('tfk-generate-jwt')
const secret = 'NeverShareYourSecret'
const payload = {
  name: 'zrrrzt',
  description: 'general nice guy'
}
const options = {
  expiresIn: '1h',
  issuer: 'https://auth.t-fk.no'
}
const token = generateToken({key: secret, payload: payload, options: options})

console.log(token)

//Options are optional

const tokenWithoutOptions = generateToken({key: secret, payload: payload})

console.log(tokenWithoutOptions)

```

## License

[MIT](LICENSE)

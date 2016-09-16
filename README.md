[![Build Status](https://travis-ci.org/telemark/tfk-generate-jwt.svg?branch=master)](https://travis-ci.org/telemark/tfk-generate-jwt)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-generate-jwt/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-generate-jwt?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
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
const token = generateToken({key: secret, payload: payload})

console.log(token)
```

## License
[MIT](LICENSE)

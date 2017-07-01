const { not, equals, compose, propOr, ifElse, identity } = require('ramda')
not(equals(process.env.NODE_ENV, 'production')) && require('dotenv').config()
const cors = require('micro-cors')()
const jwt = require('micro-jwt-auth')
const query = require('micro-query')
const fetch = require('isomorphic-fetch')

module.exports = compose(cors, jwt(process.env.JWT))(handler)

async function handler(req, res) {
  const s = propOr('batman', 'q', query(req))
  return await searchMovies(s)
}

function searchMovies(s) {
  return fetch(`${process.env.OMDB}&s=${encodeURI(s)}`).then(res => res.json())
}

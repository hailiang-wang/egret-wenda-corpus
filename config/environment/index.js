'use strict'

var path = require('path'),
  _ = require('lodash')

var env = process.env.NODE_ENV || 'development'
env = env.toLowerCase()

var all = {
  env: process.env.NODE_ENV,
  root: path.normalize(__dirname + '/../..'),
  // Usage
  // https://github.com/ParsePlatform/parse-server/wiki/Parse-Server-Guide#usage
  app: {
    appId: 'chatbot', // A unique identifier for your app.
    serverURL: 'http://localhost:1337/parse',
    restAPIKey: null, // The REST API key for your app. (optional)
    javascriptKey: null, // The JavaScript key for your app. (optional)
    // The default entry point for your Cloud Code is at ./cloud/main.js.
    // cloud: '/home/myApp/cloud/main.js', // Absolute path to your Cloud Code
    sessionLength: 31536000, // one year,
    allowClientClassCreation: false, // Set to false to disable client class creation. Defaults to true.
    logLevel: 'info'
  }
}
module.exports = _.merge(all, require('./' + env + '.js') || {})

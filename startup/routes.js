const express = require('express');
const error = require('../middleware/error');
const users = require('../routes/users');
const auth = require('../routes/auth');

module.exports = function(app) {
  app.use(express.json());
  app.use(error);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
};

var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-grunt-wiredep'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-grunt-wiredep-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'express-grunt-wiredep'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-grunt-wiredep-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-grunt-wiredep'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/express-grunt-wiredep-production'
  }
};

module.exports = config[env];

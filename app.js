'use strict';

const boom = require('boom');

module.exports = app => {
  app.boom = boom;
  app.beforeStart(async () => {
    await app.model.sync();
  });
};

'use strict';

const Boom = require('boom');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1538205301053_542';

  config.security = {
    csrf: false,
  };

  // add your config here
  config.middleware = [ 'auth' ];

  // 数据库配置
  config.sequelize = {
    dialect: 'mysql',
    database: 'selftimer',
    host: '0.0.0.0',
    port: '3306',
    username: 'root',
    password: '12345',
    define: {
      underscored: false,
      paranoid: true,
      charset: 'utf8',
      freezeTableName: true,
    },
  };

  config.onerror = {
    errorPageUrl: (err, ctx) => ctx.errorPageUrl || '/500',
    accepts: function accepts(ctx) {
      if (ctx.get('Accept') === 'application/json') return 'json';
      return 'html';
    },
    json: (error, ctx) => {
      if (Boom.isBoom(error)) {
        ctx.status = error.output.statusCode;
        ctx.body = error.output.payload;
        return;
      }
      ctx.status = error.status || 500;
      ctx.body = { error: error.message, statusCode: ctx.status };
    },
  };

  return config;
};

'use strict';

module.exports = () => async (ctx, next) => {
  if (ctx.session && ctx.session.user) {
    await next();
  } else {
    ctx.throw(ctx.Boom.unauthorized());
  }
};

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('users', '/users', controller.user);
  router.resources('tasks', '/tasks', controller.task);
  router.post('/login', controller.user.login);
  router.get('/logout', controller.user.logout);
};

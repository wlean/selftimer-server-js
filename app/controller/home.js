'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    return this.ctx.render('index.html', this);
  }
}

module.exports = HomeController;

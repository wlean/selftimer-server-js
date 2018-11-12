'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.index();
  }
  async show() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    ctx.body = await ctx.service.user.show(id);
  }
  async create() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.create(body);
  }
  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.update({ id, body });
  }
  async login() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.login(body);
  }

  async logout() {
    this.ctx.session = null;
    this.ctx.body = 'ok';
  }
}

module.exports = UserController;

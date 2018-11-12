'use strict';

const Controller = require('egg').Controller;

class TaskController extends Controller {
  async index() {
    const ctx = this.ctx;
    const userid = ctx.query.userid;
    ctx.body = await ctx.service.task.index(userid);
  }
  async show() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    ctx.body = await ctx.service.task.show(id);
  }
  async create() {
    const ctx = this.ctx;
    const body = ctx.request.body;
    ctx.body = await ctx.service.task.create(body);
  }
  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const body = ctx.request.body;
    ctx.body = await ctx.service.task.update({ id, body });
  }
}

module.exports = TaskController;

'use strict';

const Service = require('egg').Service;

class TaskService extends Service {
  async index() {
    const { ctx } = this;
    const recoreds = await ctx.model.Task.findAll({
      attributes: [ 'title', 'id', 'is_done', 'duration' ],
      where: {
        user_id: ctx.session.user.id,
      },
      order: [[ 'is_done' ], [ 'createdAt', 'DESC' ]],
      // attributes: [ 'id' ,'createdAt' ],
    });
    return recoreds;
  }
  async show(id) {
    const { ctx } = this;
    const recored = await ctx.model.Task.show(id);
    if (!recored.length) {
      ctx.throw(ctx.boom.badRequest('invalid id'));
    }
    return recored;
  }
  async create(body) {
    const { ctx } = this;
    body.user_id = ctx.session.user.id;
    const rst = await ctx.model.Task.create(body);
    return rst;
  }

  async update({ id, body }) {
    const { ctx } = this;
    const Task = await this.ctx.model.Task.findById(id);
    if (!Task) {
      this.ctx.throw(ctx.boom.badRequest('invalid id'));
    }
    return Task.update(body);
  }
}

module.exports = TaskService;

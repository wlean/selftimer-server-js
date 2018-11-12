'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async index() {
    const { ctx } = this;
    const recoreds = await ctx.model.User.findAll({
      order: [ 'createdAt', [ 'createdAt', 'DESC' ]],
      // attributes: [ 'id' ,'createdAt' ],
    });
    return recoreds;
  }
  async show(id) {
    const { ctx } = this;
    const recored = await ctx.model.User.findById(id);
    if (!recored) {
      ctx.throw(ctx.boom.badRequest('invalid id'));
    }
    return recored;
  }
  async create(body) {
    const { ctx } = this;
    const rst = await ctx.model.User.create(body);
    // const parse = await User.parse.User.call(User, this.config.rsaKey.public, UserId);
    return rst;
  }

  async update({ id, body }) {
    const { ctx } = this;
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(ctx.boom.badRequest('invalid id'));
    }
    return user.update(body);
  }

  async login(body) {
    const user = await this.ctx.model.User.findAll({
      where: body,
    });
    this.ctx.session.user = user[0];
    return user[0];
  }
}

module.exports = UserService;

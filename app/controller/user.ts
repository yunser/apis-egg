import { Controller } from 'egg'

export default class UserController extends Controller {

    async users() {
        const { ctx } = this
        ctx.body = []
    }
}

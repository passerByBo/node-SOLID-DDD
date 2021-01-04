import { controller, httpGet, interfaces, TYPE } from 'inversify-koa-utils'
import { IIndex } from '../interfaces'
import { inject } from 'inversify'
import TAGS from '../constant/tags'
import { IRouterContext } from 'koa-router'
import { provideThrowabe } from '../ioc'
import { UserProperties, UserService } from '../services/UserService'
//防止每个路由都跑到，需要加条件运行到该路由才会运行该controler
@provideThrowabe(TYPE.Controller, 'IndexController')
@controller('/')
export default class IndexController implements interfaces.Controller {
    private indexService: IIndex
    //修饰符和装饰器，可以添加在变量前
    //标识想要插入的对象
    // @inject(TAGS.UserService) userService: UserProperties
    constructor(@inject(TAGS.IndexService) indexService: IIndex, ) {
        this.indexService = indexService
    }

    @httpGet('/')
    //ctx 基于koa-router @types/koa-router
    private async index(ctx: IRouterContext, next: () => Promise<unknown>): Promise<void> {
    const data = await this.indexService.getUser(1)
    const user_service = UserService.register('xxuujs-xxxsa-ddasw','sxb', 'ssssssss@qq.com')
    console.log(user_service)
    ctx.body = {
        data
    }
}
}
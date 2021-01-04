import { provide } from "inversify-binding-decorators";
import TAGS from "../constant/tags";
import { IIndex } from "../interfaces";
import { Model } from "../models/User";

//service 加入到容器，起了一个symbol类型的名称
@provide(TAGS.IndexService)
export class IndexService implements IIndex {

    private userStorage: Model.User[] = [
        {
            email: '2235444@qq.com',
            name: '张三'
        },
        {
            email: '5675444@qq.com',
            name: '李四'
        }
    ]


    public getUser(id: number): Model.User {
        let result: Model.User
        result = this.userStorage[id]
        return result
    }

}
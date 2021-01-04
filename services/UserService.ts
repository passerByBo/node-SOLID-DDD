import { AggregateRoot } from '@node-ts/ddd'
import { AggregateRootProperties, Uuid } from '@node-ts/ddd-types'
import { provide } from 'inversify-binding-decorators'
import TAGS from '../constant/tags'
import { UserDisabled, UserRegistered } from './users'
//用户属性
export interface UserProperties extends AggregateRootProperties {
    isEnable: boolean,
    email: string,
    passwordChangeAt: Date | undefined
}

@provide(TAGS.UserService)
export class UserService extends AggregateRoot implements UserProperties {
    version: number
    id: string
    isEnable: boolean
    email: string
    passwordChangeAt: Date | undefined

    //可以通知
    static register(id: Uuid, name:string, email: string) {
        const userRegistered = new UserRegistered(id, name, email, true)
        const user = new UserService(id)
        user.when(userRegistered)
        return user
    }

    disable():void{
        const userDisabled = new UserDisabled(this.id, false)
        super.when(userDisabled)
    }


    protected whenUserRegistered(event: UserRegistered){
        this.email =event.email
        this.isEnable = event.isEnable
    }

    protected whenUserDisabled(event: UserRegistered){
        this.isEnable = event.isEnable
    }
}
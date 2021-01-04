import { Event } from '@node-ts/bus-messages'
import { Uuid } from '@node-ts/ddd-types'
export class UserRegistered extends Event {
    static readonly NAME = 'user/accout/user-registered'
    $name = UserRegistered.NAME
    $version = 0
    constructor(readonly userId: Uuid, readonly email:string, readonly name:string,readonly isEnable: boolean) {
        super()

     }
}
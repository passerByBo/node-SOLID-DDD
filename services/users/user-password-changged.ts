import { Event } from '@node-ts/bus-messages'
import { Uuid } from '@node-ts/ddd-types'
export class UserPasswordChangged extends Event {
    static readonly NAME = 'user/accout/user-password-changged'
    $name = UserPasswordChangged.NAME
    $version = 0
    constructor(readonly userId: Uuid, readonly passwordChangeAt: Date) {
        super()

     }
}
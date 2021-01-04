import { id } from 'inversify'
import {fluentProvide} from 'inversify-binding-decorators'

let provideThrowabe = (identifier:symbol, name:string) => {
    //流式provide,判断当满足条件的时候才运行对应controller
    return  fluentProvide(identifier).whenTargetNamed(name).done()
}

export {
    provideThrowabe
}
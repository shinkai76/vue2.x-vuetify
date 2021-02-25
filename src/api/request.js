import {get , post} from "./service"

export function name1(params) {
    return get('', params)
}
export function name2(params) {
    return post('', params)
}
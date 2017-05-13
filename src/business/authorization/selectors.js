import {name} from './reducer'

export const get = state => state[name]

export const me = state => state[name].me
export const isAuthorized = state => state[name].isAuthorized

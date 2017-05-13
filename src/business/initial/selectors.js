import {name} from './reducer'

export const get = defaultData => state => {
  const {data, initializing} = state[name]

  return {
    ...defaultData,
    ...data,
    initializing
  }
}

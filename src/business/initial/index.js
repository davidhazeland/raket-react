import * as actions from './actions'
import * as selectors from './selectors'
import reducer, {name} from './reducer'
import sagas from './sagas'

export {
  name,
  reducer,
  actions,
  sagas,
  selectors
}

export default {
  [name]: reducer
}

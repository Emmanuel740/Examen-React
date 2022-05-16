import {createStore} from 'redux'
import reducer from '../Reducers'

const store = createStore(reducer)

// store.subscribe((str) => console.log(str))

export default store;

//Crear nuestro store ya que es nuestro estado principal de la app
import {createStore} from 'redux'
import reducer from '../Reducers';

const store = createStore(reducer)

// store.subscribe(() => console.log(store))

export default store;
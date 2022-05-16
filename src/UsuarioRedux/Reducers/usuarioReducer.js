//Importar todas nuestras acciones que utilizaremos
<<<<<<< HEAD
import { GUARDAR_USUARIO,BORRAR_USUARIO } from "../Types/types";
//Crear nuestros reducers para manipular nuestro estado
const initialState = [];
export default function usuarioReducer(state = initialState, action){
switch(action.type){
    case GUARDAR_USUARIO:
        state = [...state, action.payload] 
        console.log(state)
        return state
    case BORRAR_USUARIO:
        let pos = action.payload
        console.log(pos)
        console.log(state[pos])
        state.splice(pos,1)
        console.log(state)

        return state
    default:
        return state;
}
=======
import { GUARDAR_USUARIO, BORRAR_USUARIO } from "../Types/types";
//Crear nuestros reducers para manipular nuestro estado
const initialState = [];
export default function usuarioReducer(state = initialState, action) {
    switch (action.type) {
        case GUARDAR_USUARIO:
            state = [...state, action.payload]
            console.log(state)
            return state
        case BORRAR_USUARIO:
            state.splice(action.payload,1)
            console.log(state)
            return state
        default:
            return state;
    }
>>>>>>> 040683f4e960bdab53167a2ea4e05bc70c81d338
};
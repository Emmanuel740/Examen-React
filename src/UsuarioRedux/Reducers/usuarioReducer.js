//Importar todas nuestras acciones que utilizaremos
import { GUARDAR_USUARIO } from "../Types/types";
//Crear nuestros reducers para manipular nuestro estado
const initialState = [];
export default function usuarioReducer(state = initialState, action){
switch(action.type){
    case GUARDAR_USUARIO:
        state = [...state, action.payload] 
        console.log(state)
        return state
    default:
        return state;
}
};
//4.- Crear Nuestro reducer y exportarlo, como index.js
//Establecer nuestro reducer importanto las funciones con el switch
import { combineReducers } from "redux";
import usuarioReducer from "./usuarioReducer";
import contadorReducer from "../../EjemploRedux/Reducers/contadorReducer";
const reducer = combineReducers({
    usuarios: usuarioReducer,
    contador: contadorReducer
});

export default reducer;
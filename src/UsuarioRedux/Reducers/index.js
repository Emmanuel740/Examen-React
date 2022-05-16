//Establecer nuestro reducer importanto las funciones con el switch
import { combineReducers } from "redux";
import usuarioReducer from "./usuarioReducer";
import contadorReducer from "../../EjemploRedux/Reducers/contadorReducer";
const reducer = combineReducers({
    usuario: usuarioReducer,
    contador: contadorReducer
});

export default reducer;
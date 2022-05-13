//Establecer nuestro reducer importanto las funciones con el switch
import { combineReducers } from "redux";
import usuarioReducer from "./usuarioReducer";

const reducer = combineReducers({
    usuario: usuarioReducer
});

export default reducer;
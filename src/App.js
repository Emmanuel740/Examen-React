import './assets/css/App.css';
import React,{useState} from 'react';
import { Provider } from 'react-redux';
// import store from './EjemploRedux/store/store';
import store from './UsuarioRedux/store/store';
import { Contador } from './EjemploRedux/Contador/Contador';
import { Contador2 } from './EjemploRedux/Contador/Contador2';
import { MostrarContador } from './EjemploRedux/MostrarContador/MostrarContador';
import { FormularioComponent } from './UsuarioRedux/FormularioComponent/FormularioComponent';
function App() {
  return (
    <Provider store={store}>
            <Contador />
            <Contador2 />

            <FormularioComponent />
    </Provider>
    // <Provider store={store}>
    //   <MostrarContador />
    // </Provider>
  );
}

export default App;

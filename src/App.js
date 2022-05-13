import './assets/css/App.css';
import React,{useState} from 'react';
import { Provider } from 'react-redux';
// import store from './EjemploRedux/store/store';
import store from './UsuarioRedux/store/store';
import { Contador } from './EjemploRedux/Contador/Contador';
import { MostrarContador } from './EjemploRedux/MostrarContador/MostrarContador';
import { FormularioComponent } from './UsuarioRedux/FormularioComponent/FormularioComponent';
function App() {
  return (
    <Provider store={store}>
            <FormularioComponent />
    </Provider>
    // <Provider store={store}>
    //   <Contador />
    //   <MostrarContador />
    // </Provider>
  );
}

export default App;

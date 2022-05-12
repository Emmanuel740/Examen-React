import './assets/css/App.css';
<<<<<<< HEAD
import { Formulario } from './componentes/Formulario';
import { ContextProvider } from './context/context';
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Formulario />
      </ContextProvider>
    </div>
=======
import React,{useState} from 'react';
import { Provider } from 'react-redux';
import store from './EjemploRedux/store/store';
import { Contador } from './EjemploRedux/Contador/Contador';

function App() {
  return (
    <Provider store={store}>
      <h1>Redux</h1>
      <Contador />
    </Provider>
>>>>>>> e8716ab211ada08875343f63c55145199c5a28ce
  );
}

export default App;

import './assets/css/App.css';
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
  );
}

export default App;

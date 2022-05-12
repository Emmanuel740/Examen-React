import './assets/css/App.css';
import { Formulario } from './componentes/Formulario';
import { ContextProvider } from './context/context';
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Formulario />
      </ContextProvider>
    </div>
  );
}

export default App;

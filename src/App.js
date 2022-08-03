import logo from './logo.svg';
import './App.css';
import ContactosDisponibles from './components/container/contactos_disponibles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactosDisponibles></ContactosDisponibles>
      </header>
    </div>
  );
}

export default App;

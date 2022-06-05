import './App.css';
import ContactoComponent from './components/contacto';
import { Contacto } from './models/Contacto.class';

function App() {
  const contacto = new Contacto("Mengano", "De tal", "correo@sitio.com", false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contacto:</h1>
        <ContactoComponent contacto={contacto}/>
      </header>
    </div>
  );
}

export default App;

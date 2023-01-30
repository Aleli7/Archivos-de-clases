import './App.css';
import Titulo from './Titulo';
import Welcome from './Welcome';

const titulo =  <h1>Primer APP React</h1>;

function App() {
  return (
    <div>
     <Titulo nombre="Miguel" apellido="Cicha"/>
     <Welcome nombre="Maria"/>
    </div>
  );
}

export default App;

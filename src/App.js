import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import Navigate from './components/Navigation'
import Datos from './components/DataFetching'

import toDos from './tareas.json'

//React los muestra a travez de los estados. Cuando el componente empieza se crea un constructor. 
//constructor(){  super(); this.state={title: "aplicaciond e tareas" nTareas: 10}} // Se ejecuta antes de que inicie lo demas.  Se lo puede colcar para que herede los datos de React
//Se detalla el estado de los datos. 
//Con los hooks useState ya no se necesita la clase. 



function App() {
  const [tDos, setToDos] = useState(toDos.ToDos);
  return (
    <div className="App">
      <Navigate title="Tareas" tareas={tDos.length} />
      <img src={logo} className="App-logo" alt="Logo" />

      <div className="container">
        <div className="row">
          {tDos.map(tDo => (
            <Datos
              id={tDo.id}
              title={tDo.title}
              responsable={tDo.Responsable}
              prioridad={tDo.Prioridad}
              descripcion={tDo.descripcion}
            />
          ))}
        </div>
      </div>



    </div>

  );
}


export default App;

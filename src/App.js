import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import Navigate from './components/Navigation'
import Datos from './components/DataFetching'
import Formulario from './components/Formulario'

import toDos from './tareas.json'

//React los muestra a travez de los estados. Cuando el componente empieza se crea un constructor. 
//constructor(){  super(); this.state={title: "aplicaciond e tareas" nTareas: 10}} // Se ejecuta antes de que inicie lo demas.  Se lo puede colcar para que herede los datos de React
//Se detalla el estado de los datos. 
//Con los hooks useState ya no se necesita la clase. 



function App() {

  const [tDos, setToDos] = useState(toDos.ToDos);

  console.log(tDos);

  const handlerAddTask = (task) => {
    console.log(tDos);
    setToDos(tDos => [...tDos, task])  //Esta es la forma de mantener el array. Si no se vuelve un objeto: tDos=>[] . oldArray=>[...oldArray, NewElement]
  }

  const removeItemtaks = (indexItemRemove) => {
    console.log(indexItemRemove);
    if (window.confirm('Estas seguro de eliminar')){
      setToDos(
        tDos.filter(function(item,index) {
          const a=index == indexItemRemove
          console.log(index+ "remover los "+indexItemRemove+" y "+a)
          return index != indexItemRemove
        })
      );
    }
  }


  return (
    <div className="App">
      <Navigate title="Tareas" tareas={tDos.length} />
      <img src={logo} className="App-logo" alt="Logo" />

      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-4">
            <Formulario onAddToDo={handlerAddTask} /> {/*Esta funcion se ejecutara desde el componente hijo */}
          </div>
          <div className="col-md-9">
            <div className="row">
              {/*tDos.map(tDo => (
                <Datos
                  id={tDo.id}
                  title={tDo.title}
                  responsable={tDo.Responsable}
                  prioridad={tDo.Prioridad}
                  descripcion={tDo.descripcion}
                  removeItem={removeItemtaks}
                />
              ))*/}
              {tDos.map(function (item, index) {
                return (
                  <Datos
                    index={index}
                    id={item.id}
                    title={item.title}
                    responsable={item.Responsable}
                    prioridad={item.Prioridad}
                    descripcion={item.descripcion}
                    removeItem={removeItemtaks}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>



    </div>

  );
}


export default App;

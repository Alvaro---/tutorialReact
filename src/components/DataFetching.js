import React from 'react'


function DataFetching(props) {
    //    const [tDos, setToDos] = useState(toDos.ToDos);

    /* 
  UseEffect no llama de nuevo al recargar la pagina. 
    useEffect(() => {
          darDatos();
      }, [])
  
      const darDatos = async () =>{
          setToDos(toDos.ToDos);
      }*/

    const removeToDo =(e)=>{
        //props.removeItem(e.target.getAttribute("data-index"))
        props.removeItem(e.target.getAttribute("data-index"))
    }

    return (
        //tDos.map(tDo =>
        <div className="col-md-4">
            <div className="card mt-4" id={props.id}> {/*mt es marge top */}
                <div className="card-header">
                    <h3>{props.title}</h3>
                    <span className="badge badge-pill bg-danger ml-2">
                        {props.prioridad}
                    </span>
                </div>
                <div className="card-body">
                    <p>{props.descripcion}</p>
                    <p><mark>Enargado: {props.responsable}</mark></p>
                </div>
                <div className="card-footer">
                    <button key={props.index} data-index={props.index} className="btn btn-danger" onClick={removeToDo}>Borrar</button>
                </div>
            </div>
        </div>
        // )
    );
}

export default DataFetching
import React, { useState } from 'react'
import '../App.css'

export default function Formulario(props) {

    const [estado, setEstado] = useState({
        id:10,
        title: '',
        Responsable: '',
        descripcion: '',
        Prioridad: 'baja'
    });


    const handleInput = (e) => {
        //console.log(e.target.value)
        //console.log(e.target.value, e.target.name);
        const { value, name } = e.target;
        setEstado({ ...estado, [name]: value });
        //console.log(estado);

        
    }

    const handleSubmit =(e)=>{
        //alert("Enviando");
        e.preventDefault(); //Para que no se recargue la pagina
        //console.log(estado);

        //Este estado viene del componente padre:
        props.onAddToDo(estado);
    }

    return (
        <div className="card">
            <div className="card-header">
                <h4>Registra una tarea</h4>
            </div>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-group input-group input-group-sm mb-3">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                        onChange={handleInput}
                    />
                </div>

                <div className="form-group input-group input-group-sm mb-3">
                    <input
                        type="text"
                        name="Responsable"
                        className="form-control"
                        placeholder="Responsable"
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group input-group input-group-sm mb-3">
                    <input
                        type="text"
                        name="descripcion"
                        className="form-control"
                        placeholder="Descripcion"
                        onChange={handleInput}
                    />
                </div>

                <div className="form-group input-group input-group-sm mb-3">
                    <select
                        name="Prioridad"
                        className="form-control"
                        defaultValue="baja"
                        onChange={handleInput}
                    >
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baja">Baja</option>
                    </select>
                </div>

                <div className="form-group input-group input-group-sm mb-3">
                    <button className="submit btn btn-primary">Enviar</button>
                </div>
            </form>

        </div >
    )

}



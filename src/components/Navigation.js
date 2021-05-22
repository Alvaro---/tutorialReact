import React from 'react';


const navigation = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">Tareas App -- {props.title}</a>
            <span className="badge rounded-pill bg-light text-dark ml-2">
              {props.tareas}
            </span>
        </nav>
    );
}

/* 
const navigation = (props)

{props.title}   No es necesario props. Puede ser una palabra cualquiera. 


const navigation = ({title})
{title}


*/


/*
class Navigation extends Component{
  render(){
    return (
      <nav...

      // Al traer props solo colcoar. this.props.titulo Nada mas. 
    )
  }
}

*/ 
export default navigation;

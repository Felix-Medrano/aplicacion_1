import React, { Component } from "react";
import PropTypes from 'prop-types';

class Task extends Component{
  
    Completado(){
        return{
            fontSize: '20px',
            color: this.props.tarea.terminado ? 'gray' : 'red',
            textDecoration: this.props.tarea.terminado ? 'line-through' : 'none'
        }
    }

    render(){
        const{tarea}=this.props;
        return <p style={this.Completado()}>
            {tarea.titulo} / 
            {tarea.descripcion} / 
            {tarea.terminado} / 
            {tarea.id}
            <input type="checkbox" onChange={this.props.terminado.bind(this, tarea.id)}/>
            <button style={btnBorrar} onClick = {this.props.eliminarTarea.bind(this, tarea.id)} >
                X
            </button>
        </p>
    }
}

Task.propTypes = {
    tarea: PropTypes.object.isRequired
}

const btnBorrar ={
    fontSize: "18px",
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
}

export default Task;
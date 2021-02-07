import React, { Component } from "react";

class Task extends Component{

    Completado(){
        return{
            // TODO: Continuar en 2:00:00
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
            <input type="checkbox"/>
            <button style={btnBorrar}>
                X
            </button>
        </p>
    }
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
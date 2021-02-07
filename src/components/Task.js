import React, { Component } from "react";
import "./Task.css";

class Task extends Component{
    render(){
        const{tarea}=this.props
        return <p className="red">
            {tarea.titulo} / 
            {tarea.descripcion} / 
            {tarea.terminado} / 
            {tarea.id}
            <input type="checkbox"/>
            <button>
                X
            </button>
        </p>
    }
}

export default Task;
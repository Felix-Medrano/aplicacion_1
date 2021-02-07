import React, { Component } from "react";

import Task from "./Task";

class Tasks extends Component{
    render(){
        return this.props.tarea.map(task => <Task tarea={task} key={task.id}/> ) 
    }
    // TODO: Prueba
}

export default Tasks;
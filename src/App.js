
import './App.css';
import React, {Component} from 'react';

import tareas from "./sample/tareas.json";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import Pokes from './components/Pokes'

class App extends Component{

  state={
    tareas:tareas
  }

  agregarTarea =(titulo, desc)=>{
    const nuevaTarea ={
      titulo: titulo,
      descripcion: desc,
      id: this.state.tareas.length
    }

    this.setState({
      tareas: [...this.state.tareas, nuevaTarea]
    })
    
  }

  eliminarTarea = (id)=>{
    const eliminar = this.state.tareas.filter(tarea => tarea.id !== id);
    this.setState({tareas: eliminar})
  }
  
  terminado = (id) => {
    const terminado = this.state.tareas.map(tareas => {
      if (tareas.id === id){
        tareas.terminado = !tareas.terminado
      }
      return tareas;
    })
    this.setState({tareas: terminado})
  }

  render(){
    return <div>
      <TaskForm agregarTarea={this.agregarTarea}/>
      <Tasks tarea={this.state.tareas} eliminarTarea={this.eliminarTarea} terminado={this.terminado}/>
      <Pokes/>
    </div>
  }
}


export default App;


import './App.css';
import React, {Component} from 'react';

import tareas from "./sample/tareas.json";
import Tasks from "./components/Tasks";

console.log(tareas);
class App extends Component{

  estado={
    tareas:tareas
  }

  render(){
    return <div>
      <Tasks tarea={this.estado.tareas}/>
      {/* <Tasks desc={this.estado.desc}/>
      <Tasks terminado={this.estado.terminado}/>
      <Tasks id={this.estado.id}/> */}
    </div>
  }
}


export default App;

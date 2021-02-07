
import './App.css';
import React from 'react';

// function Holamundo(props) {
//   return(
//     <div id="hola">
//       <h3>{props.subtitulo}</h3>
//       {props.texto}
//     </div>
//   );
// }

class Holamundo extends React.Component {
  state={
    show: true
  }
  cambiarEstado = () =>{
    this.setState({show: !this.state.show})
  }
  render(){
    if (this.state.show) {
      return(
        <div id="hola">
          <h3>{this.props.subtitulo}</h3>
          {this.props.texto}
          <button onClick={this.cambiarEstado}>Cambiar estado</button>
        </div>
      );
    }
    else{
      return <h1>
          En Blanco
          <button onClick={this.cambiarEstado}>Cambiar estado</button>
        </h1>
    }
  }
}

// const App = () => <div>El componente: <Holamundo/></div>

// class App extends React.Component{
//   render(){
//     return <div>El componente: <Holamundo/></div>
//   }
// }

function App() {
  return (
    <div>
      El Componente: 
      <Holamundo texto="Hola Sck" subtitulo="subTitulo 1"/>
      <Holamundo texto="Hola Manuelito" subtitulo="subTitulo 2"/>
      <Holamundo texto="Hola Mayra" subtitulo="subTitulo 3"/>
    </div>
  );
}

export default App;

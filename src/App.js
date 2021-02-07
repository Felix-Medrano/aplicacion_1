
import './App.css';
import React from 'react';

function Holamundo(props) {
  return(
    <div id="hola">
      <h3>{props.subtitulo}</h3>
      {props.texto}
    </div>
  );
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
      <Holamundo texto="Hola Sck" subtitulo="subTitulo1"/>
      <Holamundo texto="Hola Manuelito"/>
      <Holamundo texto="Hola Mayra"/>
    </div>
  );
}

export default App;

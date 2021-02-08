import React, { Component } from 'react'

export default class Pokes extends Component {

    state={
        pokes: []
    }

    async componentDidMount(){
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
        const datos = await resp.json();
        this.setState({pokes: datos.results})
        
    }
    

    render() {
        return (
            <div>
                <h1>Pokes</h1>
                {                
                    
                    this.state.pokes.map(poke=>{
                        return <div>
                        <h2>{poke.name}</h2>
                        </div>
                    })
                
                }
            </div>
            
        )
    }
}






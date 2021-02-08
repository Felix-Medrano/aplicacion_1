import React, { Component } from 'react'

export default class TaskForm extends Component {

    state ={
        titulo: '',
        desc: ''
    }

    onSubmit = e => {
        this.props.agregarTarea(this.state.titulo, this.state.desc)
        e.preventDefault()
    }

    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
            
        })   
    }

    render() {
        return (
            <form onSubmit = { this.onSubmit }>
                <input type='text' name='titulo' placeholder="Escribe el Texto" onChange = { this.onChange } value = {this.state.titulo}/>
                <br/>
                <br/>
                <textarea placeholder='Escribe la descripcion' name='desc' onChange = {this.onChange} value = {this.state.desc}/>
                <button type='submit'>
                    Guardar
                </button>
            </form>
        )
    }

}
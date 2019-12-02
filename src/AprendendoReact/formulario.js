import React from 'react';
import '../App.css';

class formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: null,
            idade: null,
            estadoCivil: null,
        }
    }
    nome = (ev) => {
        console.log(ev.target.value);
        this.setState({
            nome: ev.target.value,
        });
    }
    idade = (ev) => {
        console.log(ev.target.value);
        this.setState({
            idade: ev.target.value,
        });
    }
    estadoCivil = (ev) => {
        console.log(ev.target.value);
        this.setState({
            estadoCivil: ev.target.value,
        });
    }
    render() {
        return (
            <form>
                <label>
                    Nome:
                    <input
                    type='text'
                    onChange={this.nome}
                    value={this.state.nome}
                    />
                </label>
                <p>{this.state.nome}</p>
                <label>
                    Idade:
                    <input
                    type='text'
                    onChange={this.idade}
                    value={this.state.idade}
                    />
                </label>
                <p>{this.state.idade}</p>
                <label>
                    Estado Civil:
                    <input
                    type='text'
                    onChange={this.estadoCivil}
                    value={this.state.estadoCivil}
                    />
                </label>
                <p>{this.state.estadoCivil}</p>
            </form>
        )
    }
}
export default formulario;
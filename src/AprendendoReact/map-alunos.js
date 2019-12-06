import React from 'react';
import { connect } from 'tls';

class Alunos extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
         alunos: [
            {
                nome: 'Cicero',
                idade: 24,
            },
            {
                nome: 'Cassio',
                idade: 21,
            },
            {
                nome: 'Erlane',
                idade: 24,
            },
            {
                nome: 'Cleiton',
                idade: 19,
            },
            {
                nome: 'Luan',
                idade: 25,
            },
            {
                nome: 'Jorge',
                idade: 58,
            },
            {
                nome: 'Carol',
                idade: 19,
            },
            {
                nome: 'Rhuan',
                idade: 20,
            },
            {
                nome: 'Geysa',
                idade: 20,
            },
            {
                nome: 'Maycon',
                idade: 23,
            },
            {
                nome: 'Lucas',
                idade: 24,
            },
        ]
    }
}

render() {
    return (
        <div>
            {this.state.alunos.map((aluno,index)=> {
                console.log(aluno.nome);
                return (
                      <div className='ibagem' key={index}>
                        <h1>{aluno.nome}</h1>
                        <p>{aluno.idade}</p>
                      </div>
                    );
                })}
            </div>
        )
    }
}

export default Alunos;
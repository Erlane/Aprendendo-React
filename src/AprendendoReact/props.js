import React from 'react';
import { connect } from 'tls';
import App from '../App';

class Props extends React.Component {

listarProps = (meuprops) => {
    console.log(meuprops)
}

render () {
    return (
     <div>
         <button onClick={() => this.listarProps('Quero que apareça')}>Clicar me</button>
     </div>
        )
    }
}

export default Props;
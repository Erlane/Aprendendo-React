import React from 'react';
import Menu from './Menu';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            components: [
                'imagem1',
                'imagem2',
                'imagem3',
            ],
            renderizado: '',
        }
    }

    render() {
        return (
            <div className="App">
                <Menu components={this.state.components}/>
            </div>
        )
    }
}        
            
export default App;
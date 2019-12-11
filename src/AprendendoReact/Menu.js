import React from 'react';

class Menu extends React.Component {
    render () {
        return (
            <div>
                <p>&#10051;</p>
                {this.props.components.map(imagem => {
                 return   (
                     <p>{imagem}</p>
                )
              })}
            </div>
        )
    }
}

export default Menu;
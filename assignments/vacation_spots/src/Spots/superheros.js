import React, { Component } from 'react';
import superheros from './superheroes.json';

class App extends Component {
    constructor(props){
        super()
        this.state = {
            superheroes: superheros
        }
        this.display = this.display.bind(this)
    }

    display(i){
        alert(this.state.superheroes[i].catchphrase);
    }


    render() {
        return (
            <div>
                {superheros.map((hero, index) => {
                    return <Superhero {...hero, index} display={this.display}/>
                })}
            </div>
        )
    }
}
import React, { Component } from 'react';
import Counter from './Counter';
import Characters from './Characters';
import Header from './Header';


class App extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <Characters></Characters>
                {/* <Counter></Counter> */}
            </div>
        )
    }
}

export default App;
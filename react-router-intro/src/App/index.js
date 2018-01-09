import React, { Component } from 'react';
import Counter from './Counter';
import Characters from './Characters';


class App extends Component {
    render(){
        return (
            <div>
                <Characters></Characters>
                {/* <Counter></Counter> */}
            </div>
        )
    }
}

export default App;
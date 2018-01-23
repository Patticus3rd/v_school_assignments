import React from 'react';
import InputForm from '../App/InputForm';
import Uglies from '../App/Uglies';
import { Header } from 'semantic-ui-react'

function App(props) {
    return (
        <div>
            <Header>Input Ugly Things Here:</Header>
            <InputForm add />
            <Header>Ugly Things Go Below:</Header>
            <Uglies />
        </div>
    )
}

export default App;

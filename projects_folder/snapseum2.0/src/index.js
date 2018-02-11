import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux';
//create redux store -> reducers -> actions/action-types ->
// reducers return state and given to the store and combined by the store as a 
//single reducer | applyMiddleware(thunk)this will help us maka axios calls 


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
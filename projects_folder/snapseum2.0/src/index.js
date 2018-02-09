import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { dotenv } from 'dotenv';
import App from './App';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/store.js';

//create store
const store = createStore()
;
//provide the store to react



//create redux store -> reducers -> actions | applyMiddleware(thunk)this will help us maka axios calls 


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
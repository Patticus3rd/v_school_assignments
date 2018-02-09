import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { dotenv } from 'dotenv';
import App from './App';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import  rootReducer  from './redux/reducers';
//create store
const store = createStore(rootReducer, applyMiddleware(thunk));
// provide the store to react



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
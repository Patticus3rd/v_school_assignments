import React, { Component } from 'react';
import './App.css';

import FriendList from '../Friends/FriendList';


function App () {
    return (
      <div>
        <h1 className="title">Pets With Friends!</h1>
        <FriendList />
      </div>
    );
  }

export default App;

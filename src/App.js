import React, { Component } from 'react';
import Login from './components/signIn';
import SignIn from './components/authentication';
import Authentication from './components/authentication';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Homepage />
      </div>

    </div>
  );
}

export default App;

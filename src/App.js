import React, { Component } from 'react';
import Authentication from './webPages/authentication.js';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { Route, Switch } from 'react-router';
import BlogPage from './pages/BlogPage';
import { BrowserRouter } from 'react-router-dom';
import Buy from './components/Products/Buy';
import Sell from './components/Products/Sell';
/*
function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Homepage />
      </div>

    </div>
 */

function App() {
  return (
    // <Login/>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Authentication />
        </Route>
        <Route path='/blogs'>
          <BlogPage />
        </Route>
        <Route path='/buy'>
          <Buy />
        </Route>
        <Route path='/sell'>
          <Sell />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

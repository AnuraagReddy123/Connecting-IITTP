import React, { Component } from 'react';
import Login from './components/signIn';
import SignIn from './components/authentication';
import Authentication from './components/authentication';
import { Route, Switch } from 'react-router';
import BlogPage from './pages/BlogPage';
import { BrowserRouter } from 'react-router-dom';
import Buy from './components/Products/Buy';
import Sell from './components/Products/Sell';

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
        <Route path="/buy">
          <Buy/>
        </Route>
        <Route path="/sell">
          <Sell/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

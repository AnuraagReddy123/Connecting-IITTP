import React, { Component } from 'react';
import Authentication from './components/authentication';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { Route, Switch } from 'react-router';
import BlogPage from './pages/Blog/BlogPage';
import { BrowserRouter } from 'react-router-dom';
import Buy from './components/Products/Buy';
import Sell from './components/Products/Sell';

function App() {
  return (
    // <Login/>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/home' exact>
          <Homepage />
        </Route>
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

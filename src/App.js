import React, { Component } from 'react';
import Authentication from './components/authentication';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { Route, Switch } from 'react-router';
import BlogPage from './pages/Blog/BlogPage';
import { BrowserRouter } from 'react-router-dom';
import Buy from './components/Products/Buy';
import Sell from './components/Products/Sell';
import SingleBlog from './pages/Blog/SingleBlog';
import WriteBlog from './pages/Blog/WriteBlog';
<<<<<<< HEAD
import Userprofile from './components/Userprofile';
import Pwdchange from './components/pwdchange';

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
        <Route path='/singleBlog'>
          <SingleBlog />
        </Route>
        <Route path='/writeBlog'>
          <WriteBlog />
        </Route>
        <Route path='/Userprofile'>
          <Userprofile />
        </Route>
        <Route path='/pwdchange'>
          <Pwdchange />
        </Route>
    
      </Switch>
    </BrowserRouter>
=======
import Shopping from './pages/Shopping/shopping';
import Travelling from './pages/Travel/travelling';

import Food from './pages/Food/food';

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Switch>
    //     <Route path='/home' exact>
    //       <Homepage />
    //     </Route>
    //     <Route path='/' exact>
    //       <Authentication />
    //     </Route>
    //     <Route path='/blogs'>
    //       <BlogPage />
    //     </Route>
    //     <Route path='/buy'>
    //       <Buy />
    //     </Route>
    //     <Route path='/sell'>
    //       <Sell />
    //     </Route>
    //     <Route path='/singleBlog'>
    //       <SingleBlog />
    //     </Route>
    //     <Route path='/writeBlog'>
    //       <WriteBlog />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    // <Shopping/>
    // <Travelling/>
    <Food/>
>>>>>>> 1f84aacc736e0efde3f4f5204123bad8385838d7
  );
}

export default App;

import React from 'react';
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
import Shopping from './pages/Shopping/shopping';
import Travelling from './pages/Travel/travelling';


import Pwdchange from './components/pwdchange';
import Userprofile from './components/Userprofile';


import Home from './pages/Home/home';

import Food from './pages/Food/food';

function App() {

  return (
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
        <Route path='/shopping'>
        <Shopping/>
        </Route>
        <Route path='/travelling'>
        <Travelling/>
        </Route>
        <Route path='/food'>
        <Food/>
        </Route>
        <Route path='/pwdchange'>
        <Pwdchange/>
        </Route>
        <Route path='/Userprofile'>
        <Userprofile/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
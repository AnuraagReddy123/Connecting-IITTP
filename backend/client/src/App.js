import React from 'react';
import Authentication from './components/authentication';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router';
import BlogPage from './pages/Blog/BlogPage';
import { BrowserRouter } from 'react-router-dom';
import Buy from './components/Products/Buy';
import Sell from './components/Products/Sell';
import SingleBlog from './pages/Blog/SingleBlog';
import WriteBlog from './pages/Blog/WriteBlog';
import Homepage0 from './pages/Homepage/Homepage0';
import Electricity from './pages/Energy/Electricity/Electricity';
import Shopping from './pages/Shopping/shopping';
import Travelling from './pages/Travel/travelling';
import Pwdchange from './components/pwdchange';
import Userprofile from './components/Userprofile';

import Home from './pages/Home/home';

import Food from './pages/Food/food';
import { AuthProvider } from './components/firebase/context';

function App() {
  return (
   <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/homeCategory'>
          <Home />
        </Route>
        <Route path='/authentication'>
          <Authentication />
        </Route>
        {/* <Route path = '/travelling'>
          <Travelling />
        </Route> */}
        <Route path='/electricity'>
          <Electricity />
        </Route>
        <Route path='/blogspage'>
          <BlogPage />
        </Route>
        <Route path='/buy'>
          <Buy />
        </Route>
        <Route path='/sell'>
          <Sell />
        </Route>
        <Route path='/singleBlog/:id' component={SingleBlog} />
        <Route path='/writeBlog'>
          <WriteBlog />
        </Route>
        <Route path='/shopping'>
          <Shopping />
        </Route>
        <Route path='/travelling'>
          <Travelling />
        </Route>
        <Route path='/food'>
          <Food />
        </Route>
        <Route path='/pwdchange'>
          <Pwdchange />
        </Route>
        <Route path='/userprofile'>
          <Userprofile />
        </Route>
      </Switch>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;

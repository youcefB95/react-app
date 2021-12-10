import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import SignUp from './components/pages/SignUp';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/react-app' exact component={Home} />
          <Route path='/about-me' component={AboutMe} />
          <Route path='/portfolios' component={Portfolio} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/resume' component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

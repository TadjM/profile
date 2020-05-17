import React from 'react';
import Header from './Component/Home'
import {BrowserRouter as Router,
        Route, 
        Switch,
        Link
       } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Portofolio from './Component/Portofolio';
import Resume from './Component/Resume';
import Layout from './Component/Layout';
import Navigation from './Component/Navigation'


function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/Portofolio" component={Portofolio}/>
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;

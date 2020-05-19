import React from 'react';
import {BrowserRouter as Router,
        Route, 
        Switch,
       } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Portofolio from './Component/Portofolio';
import Resume from './Component/Resume';
import Layout from './Component/Layout';
import Navigation from './Component/Navigation';
import './index.css';

function App() {
  return (
    <React.Fragment>
        <Router>
        <Navigation />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/Portofolio" component={Portofolio}/>
          </Switch>
        
          <footer className='footer'>
            <ul>
              <li><a href="https://twitter.com/home" class="fa fa-twitter"></a></li>
              <li><a href="https://github.com/TadjM" class="fa fa-github"></a></li>
              <li><a href="https://www.linkedin.com/in/tadj/" class="fa fa-linkedin"></a></li>
            </ul>
            <p>Copyright &copy; 2020 Tadj</p>
            </footer>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;

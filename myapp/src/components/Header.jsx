import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../images/logo.png';

// function Home() {
//     return <h2>Home</h2>;
//      }
     let Home = () => <div>logo</div>
     let Program = () => <div>Πρόγραμμα</div>
     let Reservation = () => <div>Κρατήσεις</div>
     


function Header() {
    return (
        <Router>
        <div>
          <nav className= 'header'>
            <ul>
              <li>
                <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
              </li>
              <li>
                <Link to="/program">Προγραμμα</Link>
              </li>
              <li>
  
                <Link to="/reservation">Κρατησεις</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/program">
              <Program />
            </Route>
            <Route path="/reservation">
              <Reservation />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
     
    );
  } export default Header;
  

  
 
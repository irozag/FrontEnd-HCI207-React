import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import logo from '../images/logo.png';
import Home from './Home';
import Program from './Program';
import Reservation from './Reservation';
import Play from './Play';


// let Home = () => <div>logo</div>
// let Program = () => <div>Πρόγραμμα</div>
// let Reservation = () => <div>Κρατήσεις</div>

function Header() {
  return (

    <Router>
      <div>
        <nav className='header'>
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
            <Route path="/program" exact component={() => <Program/>} />
            <Route path="/reservation" exact component={() => <Reservation/>} />
            <Route path="/reservation/:playId" exact component={() => <Reservation/>} />
            <Route path="/" exact component={() => <Home/>} />
            <Route path="/:playId" children={<PlayPage />} />
        
        </Switch>
      </div>
    </Router>
  );

} export default Header;

function PlayPage() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { playId } = useParams();

  return (
    <Play url={playId} />
  );
}

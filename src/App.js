import React from "react";
import {
  MemoryRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Router>
        <header className="App-header">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/list">
                List of Articles
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/new-article">
                New Article
              </NavLink>
            </li>
          </ul>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/list" exact component={List} />
            <Route path="/new-article" exact component={Form} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;

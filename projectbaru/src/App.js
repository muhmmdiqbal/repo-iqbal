import React from "react";
import {
  
  Navbar,
  NavbarText,
  NavbarBrand,
  Nav,
  Collapse,
  NavLink,
  NavItem

} from 'reactstrap';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import { Switch, Route } from "react-router-dom";
import "./styles.css";

const App = () => {
  return (
    
      <div>
      
      <Navbar color="light" light expand="md">
      <Collapse navbar>
      <Nav className="mr-auto" navbar>
      
      <NavItem>
          <NavbarBrand href="/">Home</NavbarBrand>
          </NavItem>
          <NavItem> 
          <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/article">Article</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
        <NavItem>
        <NavbarText>
          <h2> YabSite</h2>
          
          </NavbarText>
        </NavItem>
        </Collapse>
        </Navbar>
      

      
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/article">
          <Article />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <footer class="py-5 bg-dark" >
    <div class="container">
      
      <p class="m-0 text-center text-white">Copyright &copy; YabSite 2020</p>
      
    </div>
    
  </footer>
    </div>
  );
};

export default App;

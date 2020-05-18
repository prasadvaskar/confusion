import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menucomponent';
import './App.css';

function App() {
  return (
    <div>
     <Navbar color="Primary">
       <div className="container">
         <NavbarBrand href ="/">Prasad Vaskar</NavbarBrand>
       </div>
     </Navbar>
     <Menu/>
    </div>
  );
}

export default App;

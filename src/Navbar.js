import React, {Component} from 'react';
import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import './Navbar.css';
export default class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      mazes: false,
    };
  }

  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">pathviz</Navbar.Brand>
          <Nav className="mr-auto">
            <Button className="navbtn" variant="outline-secondary">
              Select start node
            </Button>
            <Button className="navbtn" variant="outline-secondary">
              Select finish node
            </Button>
          </Nav>
        </Navbar>
      </>
    );
  }
}

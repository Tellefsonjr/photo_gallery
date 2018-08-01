import React, { PureComponent } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * CustomNavBar
 */
export class CustomNavBar extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Navbar default collapseOnSelect pullLeft>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              Brand
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/gallery" to="/gallery">
              Gallery
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavBar;

import React, { PureComponent } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// font-awesome icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
//
import "../assets/styles/app.css";
import "../assets/styles/navbar.css";

library.add(faCameraRetro)
/**
 * CustomNavBar
 */
export class CustomNavBar extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Navbar inverse fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <p className="brand-top">
                Katie Marie's
              </p>
              <p className="brand-bottom">
                Photography
              </p>
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

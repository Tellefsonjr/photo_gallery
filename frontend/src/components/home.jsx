import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import PropTypes from 'prop-types';
import { Grid, Row, Col, PageHeader, Image, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import '../assets/styles/home.css';
import thumb1 from '../assets/Cover.jpg';
import { GalleryCarousel } from './galleryCarousel.jsx';

// font-awesome icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
//

/**
 * Home
 */
export class Home extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="home_gallery_container">
        <GalleryCarousel />
        <div id="banner_text" className="foreground text-center pulse">
          <h1>
            ~ Katie Marie's Photography ~
          </h1>
        </div>

        { /* Left and right promos */ }
        <Grid fluid>
          <hr />
          <Row className="show-grid">
            <Col xs={8} xsOffset={2} md={3} mdOffset={0} mdPush={1}>
              <Image src={thumb1} height={360} width={360} circle className="pull-left align-bottom" />
            </Col>
            <Col xs={12} md={8} mdPush={1}>
              <h1 className="promo-header">
                A little about me..!
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus.
              </p>
            </Col>
          </Row>
          <hr />
          <Row className="show-grid">
            <Col xs={8} xsOffset={2} mdPush={8} md={3} mdOffset={0} >
              <Image src={thumb1} rounded responsive className="pull-left align-bottom" />
            </Col>
            <Col xs={12} md={8} mdPull={2}>
              <h1 className="promo-header">
                What I do:
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus.
              </p>
            </Col>
          </Row>
          <hr />
            <Row className="show-grid">
              <Col xs={8} xsOffset={2} md={3} mdOffset={0} mdPush={1} className="text-center">
                <Image src={thumb1} height={220} width={220} circle className="align-center" />
            </Col>
              <Col xs={12} md={8} mdPush={1}>
                <h1 className="promo-header">
                  Need any photos taken?
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus.
                </p>
              </Col>
            </Row>
            <Row className="show-grid text-center">
              <Col xs={6} xsOffset={3} md={4} mdOffset={4}>
                <Button href="#" bsStyle="primary" bsSize="large">Book an Appointment!</Button>
                <h3>or message me on social media:</h3>
                <ButtonToolbar className="social-btn-group">
                  <ButtonGroup className="">
                    <Button href="#" bsStyle="link" className="social-btn">
                       <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </Button>
                    <Button href="#" bsStyle="link" className="social-btn">
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </Button>
                    <Button href="#" bsStyle="link" className="social-btn">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

// Home.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Home;

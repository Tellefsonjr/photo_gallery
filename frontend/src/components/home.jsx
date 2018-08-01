import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import PropTypes from 'prop-types';
import '../assets/styles/home.css';
import { GalleryCarousel } from './galleryCarousel.jsx';
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
            ~ Katie's Photography ~
          </h1>
        </div>
      </div>
    );
  }
}

// Home.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Home;

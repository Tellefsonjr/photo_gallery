import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel, Image } from 'react-bootstrap';
import "../assets/styles/galleryCarousel.css";
import cover from "../assets/Cover.jpg";
import slide1 from "../assets/slide1.jpg";
/**
 * Carousel
 */
export class GalleryCarousel extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <Carousel interval={7000}>
          <Carousel.Item>
            <Image alt="900x500" src={cover} responsive />
          </Carousel.Item>
          <Carousel.Item>
            <Image alt="900x500" src={slide1} responsive />
          </Carousel.Item>
          <Carousel.Item>
            <Image alt="900x500" src={cover} responsive />
          </Carousel.Item>
        </Carousel>
    );
  }
}

// Carousel.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default GalleryCarousel;

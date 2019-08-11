import React from "react";
import ReactDOM from "react-dom";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = ({ children }) => <Carousel>{children}</Carousel>;

export default ImageCarousel;

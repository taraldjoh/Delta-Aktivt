import React from "react";
import ImageCarousel from "../carousel/Carousel";
import carousel_1 from "../../images/carousel_1.png";

const Landing = () => {
    const carouselItems = (
        <div>
            <img src={carousel_1} />
        </div>
    );

    return (
        <div>
            <ImageCarousel {...carouselItems} />
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
            <h1>hello</h1>
        </div>
    );
};

export default Landing;

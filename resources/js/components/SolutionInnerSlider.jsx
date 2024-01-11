import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../css/slider.css";

export default function SolutionInnerSlider({ colorName, data, scrollNumber }) {
    var settings = {
        infinite: true,
        slidesToShow: scrollNumber,
        slidesToScroll: scrollNumber,
        speed: 500,

    };
    return (
        <div className="col-8 mt-5">
            <Slider {...settings}>
                {data?.map((item) => (
                    <div key={item.title} className="homepage-slider_image-container">
                        <Link to={`${item.slug}`} style={{ textDecoration: "none" }}>
                            <img src={item.image} className="homepage-slider-image" />
                            <h4 className={`${colorName} mt-2`}>{item.name}</h4>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
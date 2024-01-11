import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../css/slider.css";

export default function ({ colorName, data, scrollNumber }) {

    var settings = {
        infinite: true,
        slidesToShow: scrollNumber,
        slidesToScroll: scrollNumber,
        speed: 500,
    };

    return (
        <div className="col-12 mt-5">
            <Slider {...settings}>
                {data?.map((item) => {
                    if (item.title != "Referanslar") {
                        return <div key={item.title} className="homepage-slider_image-container">
                            <Link to={`/sektorler/${item.slug}`} style={{ textDecoration: "none" }}>
                                <img src={item.image} alt={item.title} className="homepage-slider-image" />
                                <h4 className={`${colorName} mt-2`}>{item.title}</h4>
                            </Link>
                        </div>
                    }
                })}
            </Slider>
        </div>
    )
}
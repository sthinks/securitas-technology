import React from "react";
import Slider from "react-slick";
import "../css/careerslider.css";

export default function ({ colorName, data }) {
    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="col-12 mt-5">
            <Slider {...settings}>
                {data?.map((item) => (
                    <div key={item.title}>
                        <img src={item.image} className="career-slider-image" />
                        <p style={{ paddingRight: "20px" }} className={`${colorName} mt-2`}>{item.description}</p>
                        <h4 className={`${colorName} mt-2`}>{item.title}</h4>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
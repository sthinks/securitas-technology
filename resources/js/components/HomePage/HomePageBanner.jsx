import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../css/homepagebanner.css";
import imageTemp from "../../images/banner/banner-afet.jpg";
import axiosClient from "../AxiosClient";

export default function HomePageBanner() {
    const [autoplay, setAutoPlay] = useState(false);
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true
    };

    useEffect(() => {
        setAutoPlay(true)
    }, [])

    useEffect(() => {
        axiosClient
            .get("api/slider")
            .then(function (response) {
                const items = response.data
                setData(items)
                console.log(items)
            })
        setLoading(false)
    }, [])
    return (
        <>
            <div className="homebanner">
                <Slider {...settings}>
                    {data?.map((item) => (
                        <div style={{ position: "relative" }} className="slider-self">
                            <img src={item.image} alt="Anasayfa Slider" autoplay={autoplay} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
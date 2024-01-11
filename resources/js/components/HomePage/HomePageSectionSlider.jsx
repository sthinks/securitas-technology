import React from "react";
import "../../css/homesectionslider.css";
import Slider from "../Slider";
import { useState } from "react";
import { useEffect } from "react";
import axiosClient from "../AxiosClient";

export default function HomePageSectionSlider() {
    const [size, setSize] = useState(4);
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosClient
            .get("api/category/sektorler")
            .then(function (response) {
                const items = response.data.children;
                setData(items)
            })
    }, [])

    const getWindowDimensions = () => {
        const { innerWidth: width } = window;
        if (width < 480) {
            setSize(1)
        }
    }

    useEffect(() => {
        getWindowDimensions()
    }, [])

    return (
        <>
            <div className="homesectionslider sec-blue-bg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <span className="mini-subtitle" style={{ color: "white" }}>12 farklı sektörde ihtiyaca özel çözümler geliştiriyoruz</span>
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <p className="sec-white">Herkese uygun tek bir güvenlik ya da iş zekası çözümü olmadığını biliyoruz. İşinizin kendine has risklerini ve ihtiyaçlarını, o sektörde uzmanlaşmış ekibimiz ile analiz ediyoruz. Yenilikçi ve sürdürülebilir teknolojileri ihtiyaçlarınıza ve tercihlerinize göre kurgulayarak çözüm üretiyoruz.</p>
                        </div>
                        <div className="col-12 mt-5 slider-main_container">
                            <Slider colorName="sec-white" data={data} scrollNumber={size} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
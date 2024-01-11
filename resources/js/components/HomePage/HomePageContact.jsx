import React from "react";
import "../../css/homepagecontact.css";
import 'reactjs-popup/dist/index.css';

export default function HomePageContact() {
    return (
        <>
            <div className="homecontact section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <span className="mini-subtitle">En uygun çözümü<br />birlikte tasarlamaya<br />ne dersiniz?</span>
                        </div>
                        <div className="col-7">
                            <p className="sec-blue">Uzman ekibimiz ile görüşme talep ederek <br /> size özel çözümleri birlikte kurgulayabiliriz.</p>
                            <div className="homecontact-button_container mt-3">
                                <button className="contact-us-button sec-purple-bg"><a href="/bize-ulasin" target="_blank" style={{ color: "white" }}>Hemen iletişime geçin</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
import React, { useEffect, useState } from "react";
import "../../css/homepagebrandlist.css";
import axiosClient from "../AxiosClient";

export default function HomePageBrandList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosClient
            .get("api/reviews")
            .then(function (response) {
                const items = response.data;
                setData(items);
            })
    }, [])

    return (
        <div className="sec-white-bg homepagebrandlist section-padding">
            <div className="container ">
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <span className="mini-subtitle">Farklı sektörlerden <br /> birçok markanın güvenliğine, <br /> verimliliğine ve kazancına <br />katkı sağlıyoruz</span>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <div className="homepagebrandlist-list">
                            <ul>
                                {data.map((brand) => (
                                    <li>{brand.desc}
                                        <p style={{ fontWeight: "600" }} className="sec-blue">{brand.reviewer}</p>
                                        <img src={brand.image} alt="Marka Logo" width="100" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
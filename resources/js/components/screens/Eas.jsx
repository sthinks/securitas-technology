import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Bread from "../Bread";
import TitleDescription from "../TitleDescription";
import "../../css/solutioninner.css";
import HomePageForm from "../HomePage/HomePageForm";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Line from "../Line";
import temassiz from "../../images/temassiz.png";
import axiosClient from "../AxiosClient";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Eas() {
    const [data, setData] = useState([]);
    const [solution, setSolution] = useState([]);
    const [more, setMore] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosClient
            .get("api/category/elektronik-urun-takip-cozumleri")
            .then(function (response) {
                const solution = response.data;
                const items = response.data.children;
                setSolution(solution)
                setData(items);
                setLoading(false)
            })
    }, [])

    const moreHandler = () => {
        setMore(!more)
    }

    const itemListElement = data?.breadcrumb && Object.entries(data.breadcrumb).map(([key, value], index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": value,
        "item": key
    }));

    const json = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement
    };

    const jsonString = JSON.stringify(json);

    return (
        !loading && <>
            <Helmet>
                <title>{solution.title} | Securitas Technology</title>
                <meta name="description" content={solution.meta_description} />
                <meta name="keywords" content={solution.meta_keywords} />
                <link rel="canonical" href={solution.full_url} />
                <script type="application/ld+json">
                    {`
                    ${jsonString}
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={solution.breadcrumb} colorName="#031f30" />
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <h1
                                className="sec-blue"
                                dangerouslySetInnerHTML={{ __html: solution.title }}
                            />
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div>
                                <div className={`sector-body_description ${more ? "more" : ""}`}>
                                    <p
                                        className="sec-blue"
                                        dangerouslySetInnerHTML={{ __html: solution.body }}
                                    />
                                </div>
                                <p onClick={moreHandler} className="sec-blue more-button" style={{ fontWeight: "bold", color: "gray" }}>
                                    {more
                                        ?
                                        <>
                                            <BsChevronUp style={{ fontSize: "25px", marginRight: "10px" }} />
                                        </>
                                        :
                                        <>
                                            <BsChevronDown style={{ fontSize: "25px", marginRight: "10px" }} />
                                            Devamını okumak için tıklayın
                                        </>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={temassiz} alt={solution.meta_title} style={{ width: "100%", height: "317px", backgroundColor: "#031f30" }} />
                </div>
                <div className="container section-padding">
                    <div className="row">
                        {data.map((item) => (
                            <div className="col-sm-12 col-md-6">
                                <Link to={item.slug} style={{ textDecoration: "none" }}>
                                    <div className="solution-list-item">
                                        <IoIosArrowDroprightCircle style={{ marginRight: "5px", color: "#55419e" }} />
                                        <p className="sec-blue">{item.title}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <Line />
                <HomePageForm />
            </div>
        </>
    )
}
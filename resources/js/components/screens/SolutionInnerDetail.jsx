import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/solutioninner.css";
import HomePageForm from "../HomePage/HomePageForm";
import { BsArrowRightCircleFill, BsChevronDown, BsChevronUp, BsDownload, BsXLg } from "react-icons/bs";
import Line from "../Line";
import axiosClient from "../AxiosClient";
import { Link, useParams } from "react-router-dom";
import YoutubeFrame from "../YoutubeFrame";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function SolutionInnerDetail() {
    const [data, setData] = useState([]);
    const { slug } = useParams();
    const [more, setMore] = useState(false);
    const [file, setFile] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shown, setShown] = useState(false);
    const [company, setCompany] = useState([]);

    useEffect(() => {
        axiosClient
            .get("api/category/" + slug)
            .then(function (response) {
                const items = response.data;
                const brosur = response.data.meta.files;
                setData(items);
                setFile(brosur);
            })
            .then(() => {
                setLoading(false);
            })
    }, [])

    const filterItem = (categItem) => {
        const updatedItems = data?.partners.filter((curElem) => {
            return curElem.company === categItem;
        });
        setCompany(updatedItems[0].description);
        setShown(true);
    }

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
                <title>{data?.title} | Securitas Technology</title>
                <meta name="description" content={data.meta_description} />
                <meta name="keywords" content={data.meta_keywords} />
                <link rel="canonical" href={data.full_url} />
                <script type="application/ld+json">
                    {`
                    ${jsonString}
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={data.breadcrumb} colorName="#031f30" />
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <h1
                                className="sec-blue"
                                dangerouslySetInnerHTML={{ __html: data.title }}
                            />
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div>
                                <div className={`sector-body_description ${more ? "more" : ""}`}>
                                    <p
                                        className="sec-blue"
                                        dangerouslySetInnerHTML={{ __html: data.body }}
                                    />
                                </div>
                                {more ? <p onClick={moreHandler} className="sec-blue more-button" style={{ fontWeight: "bold", color: "gray" }}>
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
                                </p> : <p></p>}

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={data.banner} alt={data.title} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div className="container section-padding">
                    <div className="row">
                        {data.children.map((item) => (
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
                {file.length &&
                    <>
                        <div className="container section-padding">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <span className="video-subtitle">İlgili Dökümanlar</span>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <ul className="solution-inner-list">
                                        {file.map((item) => (
                                            <li><a className="sec-blue" href={item.file} target="_blank">{item.title} broşürü indirin <BsDownload /></a></li>
                                        ))}
                                        {data.videos?.length && <li>Videoyu İzleyin</li>}
                                        <li>
                                            {data.videos?.map((video, index) => {
                                                return <YoutubeFrame key={index} url={video} />
                                            })}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Line />
                    </>
                }
                {data.partners?.length &&
                    <>
                        <div className="container section-padding">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <span className="subtitle">Alanında kendini kanıtlamış markalar ile iş birliği yapıyoruz</span>
                                    {
                                        shown ?
                                            <div className="solution-inner-company_description">
                                                <p className="sec-blue" style={{ marginTop: "10px" }}>{company}</p>
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="container">
                                        <div className="row">
                                            {data.partners.map((item) => (
                                                <div className="col-sm-12 col-md-4">
                                                    <div className="solution-inner-brands-item" style={{ position: "relative" }}>
                                                        <div>
                                                            <p>{item.company}</p>
                                                        </div>
                                                        <div>
                                                            <p onClick={() => filterItem(item.company)} style={{ cursor: "pointer" }}><BsArrowRightCircleFill style={{ color: "#031f30", cursor: "pointer" }} />Detaylı Bilgi</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Line />
                    </>
                }
                <HomePageForm />
            </div>
        </>
    )
}
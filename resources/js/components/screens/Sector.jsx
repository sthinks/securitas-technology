import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useParams } from "react-router-dom";
import axiosClient from "../AxiosClient";
import Bread from "../Bread";
import HomePageBrandList from "../HomePage/HomePageBrandList";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import SolutionList from "../SolutionList";
import "../../css/sector.css";
import { RiDownloadLine } from "react-icons/ri";
import "../../css/homepagebrandlist.css";

export default function Sector() {
    const [sector, setSector] = useState([]);
    const [solution, setSolution] = useState([]);
    const { slug } = useParams();
    const [more, setMore] = useState(false);
    const [references, setReferences] = useState([]);
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient
            .get("api/category/" + slug)
            .then(function (response) {
                console.log(response.data)
                const items = response.data;
                const reference = response.data.meta.references;
                const file = response.data.meta.files;
                setSector(items);
                setReferences(reference);
                setFiles(file);
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        axiosClient
            .get("api/category/cozumler-ve-hizmetler/")
            .then(function (response) {
                const solutions = response.data.children;
                setSolution(solutions);
            })
    }, [])

    const moreHandler = () => {
        setMore(!more)
    }
    return (
        !loading && <>
            <Helmet>
                <title>{sector.title} | Securitas Technology</title>
                <meta name="description" content={sector.meta_description} />
                <meta name="keywords" content={sector.meta_keywords} />
                <link rel="canonical" href={sector.full_url} />
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={sector.breadcrumb} colorName="#031f30" />
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <h1
                                className="sec-blue"
                                dangerouslySetInnerHTML={{ __html: sector.title }}
                            />
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div>
                                <div className={`sector-body_description ${more ? "more" : ""}`}>
                                    <p
                                        className="sec-blue"
                                        dangerouslySetInnerHTML={{ __html: sector.body }}
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
                <div>
                    <img src={sector.banner} alt={sector.title} style={{ width: "100%", height: "auto" }} />
                </div>
                <div className="container section-padding">
                    <div className="row">
                        <SolutionList data={solution} colorName="#55419e" />
                    </div>
                </div>
                <Line />
                {files.length &&
                    <>
                        <div className="container section-padding">
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <h2 className="sec-blue">İlgili dökümanlar</h2>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <ul className="solution-inner-list">
                                        {files.map((file) =>
                                            <li><a href={file.file} target="_blank">{file.title} kataloğunu indirin.<RiDownloadLine /></a></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Line />
                    </>
                }
                {references.length &&
                    <>
                        <div className="sec-white-bg homepagebrandlist section-padding">
                            <div className="container ">
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <h3 className="sec-blue">Farklı sektörlerden <br /> birçok markanın güvenliğine, <br /> verimliliğine ve kazancına <br />katkı sağlıyoruz</h3>
                                    </div>
                                    <div className="col-sm-12 col-md-7">
                                        <div className="homepagebrandlist-list">
                                            <ul>
                                                {references.map((brand) => (
                                                    <li>
                                                        {brand.company}
                                                    </li>
                                                ))}
                                            </ul>
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
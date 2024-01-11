import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Bread from "../Bread";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import AxiosClient from "../AxiosClient";
import { useParams } from "react-router-dom";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/basari-hikayeleri/': 'Başarı Hikayeleri'
}

export default function Story() {
    const [data, setData] = useState([]);
    const [more, setMore] = useState(false);
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AxiosClient
            .get("api/story/" + slug)
            .then(function (response) {
                const items = response.data;
                setData(items);
                breadcrumb[items.slug] = items.title;
                setLoading(false);
            })
    }, [])

    const moreHandler = () => {
        setMore(!more)
    }
    console.log(data)
    return (
        !loading && <>
            <Helmet>
                <title>{data.title} | Securitas Technology</title>
                <meta name="description" content={data.meta_description} />
                <meta name="keywords" content={data.meta_keywords} />
                <link rel="canonical" href={`/basari-hikayeleri/${data.slug}`} />
            </Helmet>
            <div className='sec-white-bg'>
                <Bread data={breadcrumb} colorName="#031f30" />
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
                                        dangerouslySetInnerHTML={{ __html: data.desc }}
                                    />
                                </div>
                                <p onClick={moreHandler} className="sec-blue more-button" style={{ fontWeight: "bold", color: "gray" }}>
                                    {more ? <BsChevronUp style={{ fontSize: "25px", marginRight: "10px" }} /> : <BsChevronDown style={{ fontSize: "25px", marginRight: "10px" }} />}
                                    Devamını okumak için tıklayın
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={data.image} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <Line />
                <HomePageForm />
            </div>
        </>
    )
}
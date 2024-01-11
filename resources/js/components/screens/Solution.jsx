import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Bread from "../Bread";
import TitleDescription from "../TitleDescription";
import "../../css/solution.css";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import teknoloji from "../../images/teknoloji.png";
import axiosClient from "../AxiosClient";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Solution() {
    const [data, setData] = useState([]);
    const [dataChild, setDataChild] = useState([]);
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient
            .get("api/category/" + slug)
            .then(function (response) {
                const items = response.data;
                const itemsChild = response.data.children;
                setData(items);
                setDataChild(itemsChild);
                setLoading(false);
            })
    }, [])
    return (
        !loading && <>
            <Helmet>
                <title>{data.title} | Securitas Technology</title>
                <meta name="description" content={data.meta_description} />
                <meta name="keywords" content={data.meta_keywords} />
                <link rel="canonical" href={data.full_url} />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Ana Sayfa",
                            "item": "https://www.securitastechnology.com.tr/"
                          },{
                            "@type": "ListItem", 
                            "position": 2, 
                            "name": ${data.meta_title},
                            "item": ${data.full_url}  
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className='sec-white-bg'>
                <Bread data={data.breadcrumb} colorName="#031f30" />
                <div className="container section-padding">
                    <div className="row">
                        <TitleDescription
                            colorName="sec-blue"
                            title={data.title}
                        />
                    </div>
                </div>

                <div>
                    <img src={teknoloji} alt={data.title} style={{ width: "100%", height: "auto" }} />
                </div>

                <div className="container section-padding">
                    <div className="row">
                        {dataChild.map((item) => (
                            item.title !== "Temassız Görüntüleme Çözümleri" &&
                            <div className="col-sm-12 col-md-6">
                                <Link to={item.slug} style={{ textDecoration: "none" }}>
                                    <div className="solution-list-item">
                                        <IoIosArrowDroprightCircle style={{ color: "#55419e" }} />
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
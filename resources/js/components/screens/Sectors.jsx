import { Helmet } from "react-helmet";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Bread from "../Bread";
import HomePageForm from "../HomePage/HomePageForm";
import TitleDescription from "../TitleDescription";
import Line from "../Line";
import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";

export default function Sectors() {
    const [sectors, setSectors] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient
            .get("api/category/sektorler")
            .then(function (response) {
                const items = response.data.children;
                setSectors(items);
                setCategory(response.data);
                setLoading(false);
            })
    }, [])

    return (
        !loading && <>
            <Helmet>
                <title>{category.title} | Securitas Technology</title>
                <meta name="description" content={category.meta_description} />
                <meta name="keywords" content={category.meta_keywords} />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/sektorler" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Sektörler",
                            "item": "https://www.securitastechnology.com.tr/sektorler"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={category.breadcrumb} colorName="#031f30" />
                <div className="container section-padding">
                    <div className="row">
                        <TitleDescription
                            colorName="sec-blue"
                            title="12 farklı sektörde ihtiyaca özel çözümler geliştiriyoruz"
                            description="Farklı sektörlerin ihtiyaçları farklı yeteneklere sahip ekipler oluşturuyoruz.
                            Bu alanlarda uzmanlaşmış mühendislerimiz ile en doğru ve verimli çözümleri tasarlıyoruz."/>
                        <div className="col-sm-12 col-md-5">
                        </div>
                    </div>
                </div>

                <div className="container section-padding">
                    <div className="row">
                        {sectors.map((sector) => {
                            if (sector.title != "Referanslar") {
                                return <div className="col-sm-12 col-md-3 mb-4">
                                    <Link to={sector.slug}>
                                        <div>
                                            <img src={sector.image} alt={sector.title} style={{ width: "100%", height: "auto", display: "block" }} />
                                            <p className="sec-blue video-subtitle">{sector.title}</p>
                                        </div>
                                    </Link>
                                </div>
                            }
                        })}
                    </div>
                </div>
                <Line />
                <HomePageForm />
            </div>
        </>
    )
}
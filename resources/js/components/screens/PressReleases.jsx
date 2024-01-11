import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/referances.css";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "../../css/pressreleases.css";
import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";
import { Link } from "react-router-dom";

export default function PressReleases() {
    const [newsItem, setNewsItem] = useState([]);
    const [category, setCategory] = useState(null);
    useEffect(() => {
        axiosClient
            .get("api/category/basin-bultenleri")
            .then(function (response) {
                const items = response.data.meta.blogs;
                items.map((item) => {
                    item.created_at = (new Date(item.created_at)).toLocaleDateString();;
                })
                setNewsItem(items)
                setCategory(response.data);
            })
    }, [])

    return (
        category && <>
            <Helmet>
                <title>Basın Bültenleri | Securitas Technology</title>
                <meta name="Basın Bültenleri" content="Nested component" />
                <meta name="description" content="Basın bültenimizde yayınladığımız en güncel içerikleri okuyabilmek ve sektöre dair merak ettiklerinizi öğrenebilmek için şimdi tıklayın!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/haberler/basin-bultenleri" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Haberler",
                            "item": "https://www.securitastechnology.com.tr/haberler"
                          },
                          {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Basın Bültenleri",
                            "item": "https://www.securitastechnology.com.tr/haberler/basin-bultenleri"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className='sec-white-bg'>
                <Bread data={category.breadcrumb} colorName="#031f30" />
                <div className="container">
                    <h1 className="sec-blue">Basın Bültenleri</h1>
                </div>
                <div className="container section-padding">
                    <ul className="list" >
                        <li className="list__section">
                            <div className="list__title">
                                <span className="subtitle">2023</span>
                            </div>
                            <ul>
                                {newsItem.map((item) => (
                                    <li className="list__item">
                                        <div className="list__info">{item.created_at}</div>
                                        <div className="list__main">
                                            <div className="label">
                                                <Link to={item.slug}>{item.title}</Link>
                                            </div>
                                            <p>Basın Bülteni</p>
                                        </div>
                                        <a>
                                            <BsArrowRightCircleFill style={{ color: "#031f30", fontSize: "30px" }} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
                <Line />
                <HomePageForm />
            </div>
        </>
    )
}
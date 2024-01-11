import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/referances.css";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import NewsList from "../NewsList";
import BlogBanner from "../../images/blog-banner.jpg";
import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";
import Esensoruim from "../../images/news/sensoriumbanner.png";

const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/haberler/e-sensorium': 'E-Sensorium'
}

export default function Ebulten() {
    const [sensorium, setSensorium] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient
            .get("api/sensorium")
            .then(function (response) {
                const sensorium = response.data;
                setSensorium(sensorium)
                setLoading(false);
            })
    }, [])

    return (
        !loading &&
        <>
            <Helmet>
                <title>E-Sensorium | Securitas Technology</title>
                <meta name="description" content="2004 yılından beri devam eden E-Sensorium'un tüm sayılarına sayfamızdan ulaşabilir ve merak ettiğiniz her şeyi okuyabilirsiniz!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/haberler/e-sensorium" />
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
                            "name": "E-Sensorium",
                            "item": "https://www.securitastechnology.com.tr/haberler/e-sensorium"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className='sec-white-bg'>
                <Bread data={breadcrumb} colorName="#031f30" />
                <div className="container">
                    <h1 className="sec-blue">E-Sensorium</h1>
                </div>
                <div className="section-padding">
                    <img src={Esensoruim} alt="E-Sensorium" height="auto" width="100%" />
                </div>
                <div className="section-padding">
                    <NewsList data={sensorium} />
                </div>
                <Line />
                <HomePageForm />
            </div>
        </>
    )
}
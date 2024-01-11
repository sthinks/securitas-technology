import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Bread from "../Bread";
import TitleDescription from "../TitleDescription";
import "../../css/storieslist.css"
import CustomTabs from "../CustomTabs";
import HomePageForm from "../HomePage/HomePageForm";
import axiosClient from "../AxiosClient";

export default function Stories() {
    const [referances, setReferances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [bread, setBread] = useState([]);

    useEffect(() => {
        axiosClient
            .get("api/category/sektorler")
            .then(function (response) {
                const referances = response.data.children;
                setReferances(referances);
            })
    }, [])


    useEffect(() => {
        axiosClient
            .get("api/category/basari-hikayeleri")
            .then(function (response) {
                const breadItem = response.data;
                setBread(breadItem);
                setLoading(false);
            })
    }, [])

    return (
        !loading && referances.length && <>
            <Helmet>
                <title>{bread.title} | Securitas Technology</title>
                <meta name="description" content={bread.meta_description} />
                <meta name="keywords" content={bread.meta_keywords} />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/basari-hikayeleri" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Başarı Hikayeleri",
                            "item": "https://www.securitastechnology.com.tr/basari-hikayeleri"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={bread.breadcrumb} colorName="#031f30" />
                <div className="container section-padding">
                    <div className="row">
                        <TitleDescription
                            colorName="sec-blue"
                            title="Dünyalarını daha güvenli hale getiriyoruz"
                            description="Tecrübe ve uzmanlığımızla tasarladığımız çözümler ile farklı sektörde birçok seçkin
                        markanın güvenliğini ve verimliliğini artırmaya yardımcı oluyoruz. Kurulum sonrasında verdiğimiz
                        hizmetlerle de kurguladığımız sistemlerin ilk günkü performanslarını sürdürmelerini sağlıyoruz
                        "/>
                    </div>
                </div>
                <div className="section-padding">
                    <CustomTabs data={referances} />
                </div>
                <HomePageForm />
            </div>
        </>
    )
}
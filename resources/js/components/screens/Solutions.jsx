import { Helmet } from "react-helmet";
import Bread from "../Bread";
import TitleDescription from "../TitleDescription";
import Slider from "../Slider";
import HomePageForm from "../HomePage/HomePageForm";
import cozumler from "../../images/cozumler.png";
import Line from "../Line";
import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";

export default function Solutions() {
    const [size, setSize] = useState(3);
    const [solutionMain, setSolutionMain] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const [loading, setLoading] = useState(true);

    const getWindowDimensions = () => {
        const { innerWidth: width } = window;
        if (width < 480) {
            setSize(1);
        }
    };

    useEffect(() => {
        axiosClient
            .get("api/category/cozumler-ve-hizmetler")
            .then(function (response) {
                const solutionMain = response.data;
                const solution = response.data.children;
                setSolutionMain(solutionMain);
                setSolutions(solution);
                setLoading(false);
            });
    }, []);

    console.log(solutionMain);
    useEffect(() => {
        getWindowDimensions();
    }, []);

    return (
        !loading && (
            <>
                <Helmet>
                    <title>
                        {solutionMain.meta_title} | Securitas Technology
                    </title>
                    <meta
                        name="description"
                        content={solutionMain.meta_description}
                    />
                    <meta
                        name="keywords"
                        content={solutionMain.meta_keywords}
                    />
                    <link rel="canonical" href={solutionMain.full_url} />
                    <script type="application/ld+json">
                        {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Çözüm ve Hizmetlerimiz",
                            "item": "https://www.securitastechnology.com.tr/cozum-ve-hizmetler"
                          }
                        ]
                      }
                `}
                    </script>
                </Helmet>
                <div className="sec-white-bg">
                    <Bread data={solutionMain.breadcrumb} colorName="#031f30" />
                    <div className="container section-padding">
                        <div className="row">
                            <TitleDescription
                                colorName="sec-blue"
                                title="Sizi dinliyor,<br /> ihtiyacınıza özel<br /> çözümler tasarlıyoruz"
                                description="Herkese uygun tek bir güvenlik ya da iş zekası çözümü
                            olmadığını biliyoruz. İşinizin kendine has risklerini
                            ve ihtiyaçlarını, o sektörde uzmanlaşmış ekibimiz ile
                            analiz ediyoruz. Yenilikçi ve sürdürülebilir teknolojileri
                            ihtiyaçlarınıza ve tercihlerinize göre kurgulayarak çözüm
                            üretiyoruz."
                            />
                            <div className="col-12 mt-5 pb-5 slider-main_container">
                                <Slider
                                    colorName="sec-blue"
                                    data={solutions}
                                    scrollNumber={size}
                                />
                            </div>
                        </div>
                    </div>
                    <Line />
                    <HomePageForm />
                </div>
            </>
        )
    );
}

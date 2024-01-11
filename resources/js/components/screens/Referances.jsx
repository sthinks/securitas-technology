import { Helmet } from "react-helmet";
import Bread from "../Bread";
import ReferanceList from "../ReferanceList";
import TitleDescription from "../TitleDescription";
import "../../css/referances.css";
import CustomerQuestion from "../CustomerQuestion";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";

const sliderData = [
    {
        title: "KPMG",
        description: "Sürdürülebilir<br />Çözüm Odaklı<br />İş birliğine açık"
    },
    {
        title: "Arçelik",
        description: "Öncü<br />Tecrübeli<br />Trendleri Takip Eden"
    },
    {
        title: "Anadolu Sigorta",
        description: "Teknolojik<br />Yenilikçi<br />Lider"
    },
    {
        title: "Richemont",
        description: "Hızlı<br />Kaliteli<br />Titiz"
    },
    {
        title: "Eczacıbaşı Holding",
        description: "Lider<br />Kaliteli<br />Güvenilir"
    },
    {
        title: "Büyükhanlı İnşaat",
        description: "Tecrübeli<br />İşini Bilen<br />Kaliteli"
    },
    {
        title: "Guess",
        description: "İyi Satış Sonrası Teknik Destek<br />Güvenilir<br />İyi İletişim"
    },
    {
        title: "Gizia",
        description: "Güven<br />Kalite<br />Süreklilik"
    },
    {
        title: "Özyeğin Üniversitesi",
        description: "Lider<br />Kaliteli<br />Güvenilir"
    },
    {
        title: "QNB Finansbank",
        description: "Güvenilir<br />Profesyonel<br />Kaliteli Hizmet"
    },
    {
        title: "Doğuş Holding",
        description: "Çözüm Odaklı<br />Kaliteli<br />Güvenilir"
    },
    {
        title: "Aksa Akrilik",
        description: "Hızlı<br />Kaliteli<br />Güvenilir"
    },
    {
        title: "Mayen",
        description: "Güçlü<br />İletişimi İyi<br />Hızlı"
    },
    {
        title: "YDA",
        description: "Çalışkan<br />Dürüst<br />Bilgili"
    },
    {
        title: "Nivak Express",
        description: "Doğru Çözüm<br />İyi Satış Sonrası Destek<br />İyi İletişim"
    },
    {
        title: "Nike",
        description: "İyi İletişim<br />Çözüm Odaklı<br />Tecrübeli"
    },
    {
        title: "Levi's",
        description: "Güvenilir<br />Hızlı<br />Çözüm Odaklı"
    },
    {
        title: "Hotiç",
        description: "Kaliteli<br />Güvenilir<br />Teknolojik"
    },
    {
        title: "Mudo",
        description: "Kaliteli Ürün<br />Kaliteli Satış Sonrası Servis<br />Ulaşılabilir"
    },
    {
        title: "Global Kahve",
        description: "Hızlı<br />Kaliteli<br />İlgili"
    },
]

const data = [
    {
        title: "Sektörler",
    },
    {
        title: "Referanslar"
    }
]

export default function Referances() {
    const [size, setSize] = useState(2)
    const [referances, setReferances] = useState([]);
    const [refData, setRefData] = useState();
    const [loading, setLoading] = useState(true);
    const getWindowDimensions = () => {
        const { innerWidth: width } = window;
        if (width < 480) {
            setSize(1)
        }
    }

    useEffect(() => {
        getWindowDimensions()
    }, [])

    useEffect(() => {
        axiosClient
            .get("api/category/sektorler")
            .then(function (response) {
                setRefData(response.data)
                const referances = response.data.children;
                setReferances(referances)
                setLoading(false);
            })
    }, [])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: size,
        slidesToScroll: 1
    };

    return (
        !loading && <>
            <Helmet>
                <title>Referanslar | Securitas Technology</title>
                <meta name="description" content={referances.meta_description} />
                <meta name="keywords" content={referances.meta_keywords} />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/referanslar" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Referanslar",
                            "item": "https://www.securitastechnology.com.tr/referanslar"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className='sec-white-bg'>
                <Bread data={refData?.breadcrumb} colorName="#031f30" />
                <div className="container section-padding">
                    <div className="row">
                        <TitleDescription
                            colorName="sec-blue"
                            title="Güvenliğe, verimliliğe ve kazanca katkı sağlıyoruz"
                            description="İş yerinizde güvenlik gereken alanların veya ürünlerin ötesini görüyoruz.
                            Değerlerinizi tutkunuzu, çalışanlarınızın hayallerini, müşterilerinizin size olan güvenini
                            koruyoruz.Dünyanızın daha güvenli hale gelmesine yardımcı oluyoruz."/>
                    </div>
                </div>
                <div className="section-padding">
                    <ReferanceList data={referances} />
                </div>
                <Line />
                <CustomerQuestion data={sliderData} settings={settings} />
                <Line />
                <HomePageForm />
            </div>
        </>
    )
}
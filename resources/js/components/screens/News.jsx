import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/referances.css";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import BasinBultenleri from "../../images/news/basin-bultenleri.png";
import NewsBanner from "../../images/news/news-banner.png";
import Sensorium from "../../images/news/sensorium.png";
import SosyalMedya from "../../images/news/sosyal-medya.png";
import { Link } from "react-router-dom";

const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/haberler/': 'Haberler'
}
const solutions = [
    {
        title: "E-Sensorium",
        slug: "e-sensorium",
        image: Sensorium
    },
    {
        title: "Basın Bültenleri",
        slug: "basin-bultenleri",
        image: BasinBultenleri
    },
    {
        title: "Sosyal Medya",
        slug: "sosyal-medya",
        image: SosyalMedya
    },
]

export default function News() {

    return (
        <>
            <Helmet>
                <title>Haberler | Securitas Technology</title>
                <meta name="description" content="E-Sensorium, Sosyaş Medya ve Basın bültenimiz hakkında merak ettiğiniz her şey için sayfamızı ziyaret edebilirsiniz!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/haberler" />
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
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className='sec-white-bg'>
                <Bread data={breadcrumb} colorName="#031f30" />
                <div className="container">
                    <h1 className="sec-blue">Haberler</h1>
                </div>
                <div className="section-padding">
                    <img src={NewsBanner} alt="Haberler" height="auto" width="100%" />
                </div>
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {solutions.map((item) => (
                                    <div className="item1 sol-sm-12 col-md-4 mb-4">
                                        <div className="card">
                                            <Link to={item.slug}>
                                                <img className="card-img-top" src={item.image} alt={item.title} />
                                                <div className="news-list-text">
                                                    <p className="card-title sec-blue video-subtitle">{item.title}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Line />
                <HomePageForm />
            </div>
        </>
    )
}
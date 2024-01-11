import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/referances.css";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import BlogBanner from "../../images/blog-banner.jpg";
import "../../css/social.css";
import { BsFillInfoCircleFill } from "react-icons/bs";
import SosyalMedyaBanner from "../../images/news/sosyal-medya-banner.png";

const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/haberler/sosyal-medya/': 'Sosyal Medya'
}

export default function Social() {
    return (
        <>
            <Helmet>
                <title>Sosyal Medya | Securitas Technology</title>
                <meta name="description" content="Sosyal medya hesaplarımıza ulaşabilmek ve bizi daha yakından takip edebilmek için şimdi sayfamızı ziyaret edebilirsiniz!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/haberler/sosyal-medya" />
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
                            "name": "Sosyal Medya",
                            "item": "https://www.securitastechnology.com.tr/haberler/sosyal-medya"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className='sec-white-bg'>
                <Bread data={breadcrumb} colorName="#031f30" />
                <div className="container">
                    <h1 className="sec-blue">Sosyal Medya</h1>
                </div>
                <div className="section-padding">
                    <img src={SosyalMedyaBanner} height="auto" width="100%" />
                </div>
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6"></div>
                            <div className="col-sm-12 col-md-6">
                                <h3 className="sec-blue">Securitas Technology’i aşağıdaki sosyal medya hesaplarımızdan takip edebilirsiniz </h3>
                                <ul className="social-list">
                                    <li>
                                        <BsFillInfoCircleFill />
                                        <a href="https://www.facebook.com/Securitas.Technology.TR" target="_blank">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <BsFillInfoCircleFill />
                                        <a href="https://www.instagram.com/securitastechnologytr/" target="_blank">
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <BsFillInfoCircleFill />
                                        <a href="https://www.linkedin.com/company/securitas-tech-tr/" target="_blank">
                                            Linkedin
                                        </a>
                                    </li>
                                    <li>
                                        <BsFillInfoCircleFill />
                                        <a href="https://twitter.com/securitastechtr" target="_blank">
                                            Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <BsFillInfoCircleFill />
                                        <a href="https://www.youtube.com/channel/UCEr5uaW3No3urPOhhSBTYPQ" target="_blank">
                                            Youtube
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Line />
                <HomePageForm />
            </div >
        </>
    )
}
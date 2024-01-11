import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/career.css";
import Line from "../Line";
import HomePageForm from "../HomePage/HomePageForm";
import { useEffect } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { HashLink as Link } from 'react-router-hash-link';

const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/neden-securitas-technology/': 'Neden Securitas Technology',
    'https://www.securitastechnology.com.tr/neden-securitas-technology/rakamlarla-biz': 'Rakamlarla Biz'
}

const list = [
    {
        title: "28 yıl",
        description: "Deneyim"
    },
    {
        title: "300",
        description: "Çalışan"
    },
    {
        title: "12",
        description: "Sektörde deneyim"
    },
    {
        title: "40 binden fazla",
        description: "Kurulum"
    },
    {
        title: "81 il",
        description: "Hizmet ağı"
    },
    {
        title: "80'den fazla",
        description: "Marka ile iş birliği"
    },
    {
        title: "5 binden fazla",
        description: "Kurumsal müşteri"
    },
    {
        title: "20 yıl",
        description: "Müşteri ile ortalama çalışma süresi"
    },
]

const list2 = [
    {
        title: "Amacımız",
        slug: "amacimiz"
    },
    {
        title: "Değerlerimiz",
        slug: "degerlerimiz"
    },
    {
        title: "Tarihçemiz",
        slug: "tarihcemiz"
    },
    {
        title: "Securitas Grup",
        slug: "securitas-grup"
    },
]

export default function RakamlarlaBiz() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>Rakamlarla Biz | Securitas Technology</title>
                <meta name="description" content="28 yıllık deneyimimiz, çalışan sayımız, hizmet ağımız ve çok daha fazlasını öğrenebilmek için sayfamızı ziyaret edebilirsiniz!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/neden-securitas-technology/rakamlarla-biz" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Neden Securitas Technology",
                            "item": "https://www.securitastechnology.com.tr/neden-securitas-technology"
                          },
                          {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Rakamlarla Biz",
                            "item": "https://www.securitastechnology.com.tr/neden-securitas-technology/rakamlarla-biz"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={breadcrumb} colorName="#031f30" />
                <div className="container">
                    <h1 className="sec-blue">Rakamlarla Biz</h1>
                </div>

                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-6"></div>
                        <div className="col-sm-12 col-md-6">
                            <div className="d-flex align-items-center">
                                <IoIosArrowDroprightCircle style={{ color: "#55419e", fontSize: "27px", marginRight: "8px" }} />
                                <p className="sec-blue" style={{ fontWeight: "bold", fontSize: "25px" }}><a href="/neden-securitas-technology/deger-onerimiz">Değer Önerimiz</a></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6"></div>
                        <div className="col-sm-12 col-md-3 mt-3">
                            <div style={{ height: "210px", width: "100%", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", border: "2px solid #ddd0d0" }}>
                                <div>
                                    <p style={{ fontWeight: "bold" }} className="sec-blue">Mühendislik becerimiz <br /><span style={{ color: "#55419e", fontWeight: "bold" }}>Doğru tasarım</span></p>
                                </div>
                                <div>
                                    <span style={{ color: "gray" }}>
                                        Doğru güvenlik çözümünü
                                        tasarlamanın temelinde
                                        projenin en başında yapılan
                                        risk analizi yer alıyor.
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <IoIosArrowDroprightCircle style={{ color: "#55419e", fontSize: "15px", marginRight: "8px" }} />
                                    <p className="sec-blue"><a href="/neden-securitas-technology/deger-onerimiz">Detaylı bilgi</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-3">
                            <div style={{ height: "210px", width: "100%", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", border: "2px solid #ddd0d0" }}>
                                <div>
                                    <p style={{ fontWeight: "bold" }} className="sec-blue">Deneyim merkezimiz <br /><span style={{ color: "#55419e", fontWeight: "bold" }}>Bilgi birikimi</span></p>
                                </div>
                                <div>
                                    <span style={{ color: "gray" }}>
                                        Güvenlik teknolojileri alanında Türkiye'deki ilk deneyim merkezine sahip olan firmayız.
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <IoIosArrowDroprightCircle style={{ color: "#55419e", fontSize: "15px", marginRight: "8px" }} />
                                    <p className="sec-blue"><Link to="/neden-securitas-technology/deger-onerimiz#deneyim-merkezimiz">Detaylı bilgi</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6"></div>
                        <div className="col-sm-12 col-md-3 mt-3">
                            <div style={{ height: "210px", width: "100%", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", border: "2px solid #ddd0d0" }}>
                                <div>
                                    <p style={{ fontWeight: "bold" }} className="sec-blue">Teknoloji Yönetimimiz <br /><span style={{ color: "#55419e", fontWeight: "bold" }}>Doğru teknoloji</span></p>
                                </div>
                                <div>
                                    <span style={{ color: "gray" }}>
                                        Müşterilerimiz için en doğru teknolojileri buluyoruz. En iyi ve en yeni teknolojileri sektöre ilk sunan firmayız.
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <IoIosArrowDroprightCircle style={{ color: "#55419e", fontSize: "15px", marginRight: "8px" }} />
                                    <p className="sec-blue"><Link to="/neden-securitas-technology/deger-onerimiz#teknoloji-yonetimimiz">Detaylı bilgi</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 mt-3">
                            <div style={{ height: "210px", width: "100%", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", border: "2px solid #ddd0d0" }}>
                                <div>
                                    <p style={{ fontWeight: "bold" }} className="sec-blue">Satış sonrası hizmetlerimiz<br /><span style={{ color: "#55419e", fontWeight: "bold" }}>Sürdürülebilirlik</span></p>
                                </div>
                                <div>
                                    <span style={{ color: "gray" }}>
                                        Sektördeki ilk ve tek gerçek zamanlı servis takibini yapan firma olarak servis kalitemizle ön plandayız.
                                    </span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <IoIosArrowDroprightCircle style={{ color: "#55419e", fontSize: "15px", marginRight: "8px" }} />
                                    <p className="sec-blue"><Link to="/neden-securitas-technology/deger-onerimiz#satis-sonrasi-hizmetlerimiz">Detaylı bilgi</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6"></div>
                        <div className="col-sm-12 col-md-6">
                            {list2.map((item) => (
                                <Link to={`/neden-securitas-technology/${item.slug}`} style={{ textDecoration: "none" }}>
                                    <div className="solution-list-item">
                                        <IoIosArrowDroprightCircle style={{ marginRight: "5px", color: "#55419e" }} />
                                        <p className="sec-blue">{item.title}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Line />
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 mb-3">
                            <div>
                                <h2 className="sec-blue" style={{ fontSize: "1.5rem" }}>Rakamlarla Securitas Technology</h2>
                            </div>
                        </div>
                        {list.map((item) => (
                            <div className="col-md-3 col-sm-12 mt-2">
                                <div style={{ height: "180px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "15px 23px", background: "#D7D8D6" }}>
                                    <div>
                                        <p className="sec-blue" style={{ fontSize: "35px" }}>{item.title}</p>
                                    </div>
                                    <div>
                                        <p className="sec-blue" style={{ fontSize: "20px" }}>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Line />
            <HomePageForm />
        </>
    )
}
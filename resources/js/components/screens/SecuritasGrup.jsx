import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Bread from "../Bread";
import HomePageForm from "../HomePage/HomePageForm";
import SecuritasGrupBanner from "../../images/grup.png"
import Line from "../Line";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { HashLink as Link } from 'react-router-hash-link';
const list = [
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
]
export default function SecuritasGrup() {
    const breadcrumb = {
        'https://www.securitastechnology.com.tr/': 'Anasayfa',
        'https://www.securitastechnology.com.tr/neden-securitas-technology/': 'Neden Securitas Technology',
        'https://www.securitastechnology.com.tr/neden-securitas-technology/securitas-grup': 'Securitas Grup'
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Helmet>
                <title>Securitas Grup | Securitas Technology</title>
                <meta name="description" content="Securitas Global, 345 bin çalışanı ile 47 ülkede faaliyet gösteren dünya lideri teknolojilere ve uzmanlığa sahip güvenlik çözümleri iş ortağıdır!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/neden-securitas-technology/securitas-grup" />
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
                                "name": "Securitas Grup",
                                "item": "https://www.securitastechnology.com.tr/neden-securitas-technology/securitas-grup"
                            }
                            ]
                        }
                        `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={breadcrumb} colorName="#031f30" />
                <div className="container">
                    <h1 className="sec-blue">Securitas Grup</h1>
                </div>

                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-6"></div>
                        <div className="col-sm-12 col-md-6">
                            <div className="d-flex align-items-center">
                                <IoIosArrowDroprightCircle style={{ color: "#55419e", fontSize: "27px", marginRight: "8px" }} />
                                <p className="sec-blue" style={{ fontWeight: "bold", fontSize: "25px" }}><a href="/neden-securitas-technology/rakamlarla-biz">Rakamlarla biz</a></p>
                            </div>
                        </div>
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
                            {list.map((item) => (
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
                        <div className="col-sm-12 col-md-5">
                            <h2 className="sec-blue">
                                Geleceğin güvenliğini şekillendiriyoruz
                            </h2>
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div>
                                <div>
                                    <p className="sec-blue">
                                        Securitas Global, 345 bin çalışanı ile 47 ülkede faaliyet gösteren
                                        dünya lideri teknolojilere ve uzmanlığa sahip güvenlik çözümleri iş ortağıdır.
                                        1934 yılında kurulan bu köklü şirketin merkezi İsveç'te bulunuyor. Dünya çapında
                                        153 bin müşterisine hizmet sunuyor. Müşterileriyle uzun soluklu iş birlikleri gerçekleştiren
                                        şirket, her yıl mevcut müşteri sözleşelerinin %90'ını yeniliyor.
                                    </p>
                                    <p className="sec-blue mt-3">
                                        Securitas Technology, Securitas Global'ın tüm dünyada güvenlik teknolojileri sunan şirketidir.
                                        Securitas Technology, Türkiye'nin de içinde olduğu 19 pazarda faaliyet gösteriyor. Toplamda 13 bin çalışanı
                                        ile dünyanın en büyük 3. güvenlik teknolojileri entegratörüdür. 2022 yılında Stanley Security ve Healthcare'i satın aldı.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={SecuritasGrupBanner} style={{ width: "100%", height: "auto" }} />
                </div>
                <HomePageForm />
            </div>
        </>
    )
}
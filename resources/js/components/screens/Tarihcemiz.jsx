import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Bread from "../Bread";
import HomePageForm from "../HomePage/HomePageForm";
import TarihcemizBanner from "../../images/tarihcemiz.jpg"
import { HashLink as Link } from 'react-router-hash-link';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Line from "../Line";

export default function Tarihcemiz() {
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
            title: "Securitas Grup",
            slug: "securitas-grup"
        },
    ]
    const breadcrumb = {
        'https://www.securitastechnology.com.tr/': 'Anasayfa',
        'https://www.securitastechnology.com.tr/neden-securitas-technology/': 'Neden Securitas Technology',
        'https://www.securitastechnology.com.tr/neden-securitas-technology/tarihcemiz': 'Tarihçemiz'
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Helmet>
                <title>Tarihçemiz | Securitas Technology</title>
                <meta name="description" content="1994 yılında Sensormatic ismiyle yolculuğumuza başladık. O günden bu yana her daim sizin yanınızda olarak en güncel teknolojileri size sunuyoruz!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/neden-securitas-technology/tarihcemiz" />
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
                            "name": "Tarihçemiz",
                            "item": "https://www.securitastechnology.com.tr/neden-securitas-technology/tarihcemiz"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={breadcrumb} colorName="#031f30" />
                <div className="container">
                    <h1 className="sec-blue">Tarihçemiz</h1>
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
                                        1994 yılında Sensormatic ismiyle yolculuğumuza başladık.
                                        İlk günden itibaren Türkiye'nin elektronik güvenlik sektörüne
                                        liderlik ettik. Bu süreçte edindiğimiz tecrübeyi en yeni teknolojileri
                                        kullanarak değer  nerilerine dönüştürdük. 12 farklı sektörün
                                        ihtiyaçları konusunda uzmanlaştık ve Türkiye pazarında birçok ilki
                                        gerçekleştirdik.
                                    </p>
                                    <p className="sec-blue mt-3">
                                        Dünyanın en köklü güvenlik şirketlerinden biri olan Securitas Grup ile 2011 yılında, iki marka için de son derece önemli
                                        bir birleşme gerçekleştirdik. Elektronik güvenlik ve iş zekası entegratörü olarak tüm
                                        hizmetlerimizi Securitas'ın global gücüyle birlikte sunmaya başladık. Bu aynı zamanda
                                        geleceğin güvenlik anlayışının da temellerini oluşturuyordu.
                                    </p>
                                    <p className="sec-blue mt-3">
                                        Securitas dünya çağında uzun yıllardır uzmanı olduğu elemanlı güvenlik yanında elektronik güvenlik alanında
                                        çalışmalar gerçekleştiriyor. Bugün ise dünyanın en büyük 2 elektronik güvenlik entegratörü arasında
                                        yer alıyor. Bu oluşum artık tüm dünyada Securitas Technology ismiyle faaliyet gösteriyor.
                                    </p>
                                    <p className="sec-blue mt-3">
                                        Biz de 2022 yılı itibarıyla "Tek Securitas" stratejisi dahilinde yeni ismimiz Securitas Technology ile bugüne kadar en üst standartlarda
                                        sürdürdüğümüz faaliyetlerimize devam edeceğiz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={TarihcemizBanner} style={{ width: "100%", height: "auto" }} />
                </div>
                <HomePageForm />
            </div>
        </>
    )
}
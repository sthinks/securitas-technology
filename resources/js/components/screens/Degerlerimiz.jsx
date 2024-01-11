import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Bread from "../Bread";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import Durust from "../../images/durust.png"
import Dikkatli from "../../images/dikkatli.png"
import Yardimsever from "../../images/yardimsever.png"
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { HashLink as Link } from 'react-router-hash-link';
const list = [
    {
        title: "Amacımız",
        slug: "amacimiz"
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
export default function Degerlerimiz() {

    const breadcrumb = {
        'https://www.securitastechnology.com.tr/': 'Anasayfa',
        'https://www.securitastechnology.com.tr/neden-securitas-technology/': 'Neden Securitas Technology',
        'https://www.securitastechnology.com.tr/neden-securitas-technology/degerlerimiz': 'Değerlerimiz'
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Helmet>
                <title>Değerlerimiz | Securitas Technology</title>
                <meta name="description" content="Mühendislik becerimiz, deneyim merkezimiz, teknoloji yönetimimiz ve tüm değer önerilerimiz için sayfamızı ziyaret edebilirsiniz!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/neden-securitas-technology/degerlerimiz" />
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
                            "name": "Değerlerimiz",
                            "item": "https://www.securitastechnology.com.tr/neden-securitas-technology/degerlerimiz"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={breadcrumb} colorName="#031f30" />
                <div className="container">
                    <h1 className="sec-blue">Değerlerimiz</h1>
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
                                Bizi biz <br /> yapan değerlerimiz
                            </h2>
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div>
                                <div>
                                    <p className="sec-blue">
                                        Kim olduğumuzu tanımlayan değerlere sahibiz. Kurum kültürümüzü üzerinde
                                        inşa ettiğimiz bu değerler ışığında, dünyanızın daha güvenli hale gelmesine yardımcı
                                        oluyoruz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="mt-3">
                                <img src={Durust} style={{ width: "100%", height: "auto", display: "block" }} />
                                <h2 className="sec-blue mt-2">Dürüst</h2>
                                <p className="sec-blue mt-2">
                                    Dürüstüz. Amacımız sadece sonucuna ulaşmak değil, verdiğimiz
                                    sözleri tam ve zamanında, dikkatle yerine getirmiş olmak.
                                    İşimizin ehli, sözümüzün eriyiz.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="mt-3">
                                <img src={Dikkatli} style={{ width: "100%", height: "auto", display: "block" }} />
                                <h2 className="sec-blue mt-2">Dikkatli</h2>
                                <p className="sec-blue mt-2">
                                    Her zaman dikkatle hareket ediyoruz.
                                    Başkalarının göremediği ayrıntıları fark ediyoruz.
                                    Müşterilerimizin iş yerlerindeki olası risk ve
                                    istenmeyen olayları öngörecek dikkate sahibiz.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="mt-3">
                                <img src={Yardimsever} style={{ width: "100%", height: "auto", display: "block" }} />
                                <h2 className="sec-blue mt-2">Yardımsever</h2>
                                <p className="sec-blue mt-2">
                                    İhtiyaç duyulduğunda yardıma hazırız. Yıllar içinde sahip olduğumuz
                                    birikimi, yetkinliklerimizle birleştirerek müşterilerimize değer olarak
                                    sunuyoruz.
                                </p>
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
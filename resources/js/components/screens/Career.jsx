import { Helmet } from "react-helmet";
import Bread from "../Bread";
import KariyerBanner from "../../images/banner/kariyer.png";
import basari from "../../images/career/basari.png";
import basvurbanner from "../../images/career/basvur-banner.png";
import dahaguvenli from "../../images/career/daha-guvenli.png";
import ikilisol from "../../images/ikilisol.jpg";
import ikilisag from "../../images/ikilisag.jpg";
import tekli from "../../images/career/tekli.png";
import "../../css/career.css";
import SecuritasLogo from "../../images/logo/securitas.png"
import Line from "../Line";
import ReactPlayer from 'react-player'

const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/kariyer/': 'Kariyer'
}

export default function Career() {
    return (
        <>
            <Helmet>
                <title>Kariyer | Securitas Technology</title>
                <meta name="description" content="Kariyer sayfamıza göz atarak özgeçmiş gönderebilir ve yarının dünyasını inşa eden ekibe katılmak için bugün başvurabilirsiniz!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/kariyer" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Kariyer",
                            "item": "https://www.securitastechnology.com.tr/kariyer"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <div className="career-image-container">
                    <img src={KariyerBanner} alt="Kariyer" style={{ width: "100%", height: "auto", display: "block" }} />
                    <div className="career-image-text">
                        <Bread data={breadcrumb} colorName="white" />
                        <div className="container">
                            <h1 className="sec-white">Kariyer</h1>
                        </div>
                        <div className="career-image-text-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 mt-5">
                                        <div className="career-image-title_first">
                                            <span className="subtitle" style={{ color: "white" }}>Farklı bir dünya görüyoruz</span>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                        <div className="career-image-title_second">
                                            <p>
                                                Güvende olması gerekenlerin elle tutulur şeylerin ötesinde olduğunu biliyoruz
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                        <div className="career-image-title_third">
                                            <p>
                                                İş yerinizin güvenliğini sağlarken görünenlerin ötesindeki
                                                hayallerinizi, tutkularınızı, değerlerinizi ve gelecek planlarınızı
                                                da koruyoruz.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                        <div className="career-image-title_third">
                                            <p>
                                                Sunduğumuz akıllı önleyici elektronik güvenlik ve iş zekası
                                                çözümleriyle dünyanızın daha güvenli hale gelmesine yardımcı oluyoruz.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <span className="subtitle">Dünyanın daha güvenli hale gelmesine yardımcı oluyoruz</span>
                            <p className="mt-4 sec-blue">Bu bizim varoluş amacımız ve her gün işimize azimle devam etmemizin sebebi.</p>
                            <p className="mt-2 sec-blue">Amacımız ve değerlerimiz rehberliğinde herkes için huzurlu, özgür ve kaliteli bir yaşam için çalışıyoruz.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="career-image-container">
                                <img src={dahaguvenli} alt="Konuşan İnsanlar" style={{ width: "100%", display: "block", height: "auto" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sec-blue-bg">
                    <div className="container section-padding">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <span className="subtitle" style={{ color: "white" }}>Başarıya çalışanlarımızın gelişimini destekleyerek ulaşıyoruz</span>
                                <p className="mt-4 sec-white">
                                    Securitas'ta öğrenmek ve gelişmek için birçok fırsat var.
                                    İş başında eğitim ve koçluğun yanı sıra çevrimiçi eğitim sistemimizde bir dizi kurs sunuyoruz.
                                </p>
                                <p className="mt-2 sec-white">
                                    Gelişmeniz, becerilerinize yenilerini eklemeniz ve hatta işin farklı bir bölümünde
                                    rol almanız için potansiyelinizi ortaya çıkaracağınız alanlar yaratıyoruz.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="career-image-container">
                                    <img src={basari} alt="Konuşan İnsanlar" style={{ width: "100%", display: "block", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div>
                                <span className="subtitle">Global gücümüzle <br /> hareket ediyoruz</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <p className="sec-blue">Dünya çapında binlerce çalışan, bu çatı
                                altında aynı amaç doğrultusunda çalışıyor.
                                İşinizi ve zamanınızı en verimli şekilde
                                yönetebilmeniz için kanıtlanmış yöntemleri
                                uyguluyoruz.
                            </p>
                        </div>
                    </div>
                </div>
                <Line />
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <span className="subtitle">
                                Ailemizde mutluluğu paylaşıyor,
                                gelişimi destekliyor
                                ve birlikteliğin keyfini çıkarıyoruz
                            </span>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="career-triple">
                                <div className="d-flex">
                                    <div>
                                        <img src={ikilisol} alt="Konuşan İnsanlar" style={{ width: "100%", height: "auto", display: "block" }} />
                                    </div>
                                    <div style={{ marginLeft: "10px" }}>
                                        <img src={ikilisag} alt="Konuşan İnsanlar" style={{ width: "100%", height: "auto", display: "block" }} />
                                    </div>
                                </div>
                                <div style={{ marginTop: "10px" }}>
                                    <div>
                                        <img src={tekli} alt="Konuşan İnsanlar" style={{ width: "100%", height: "auto", display: "block" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Line />
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=xnIlA4K17Wg"
                                width='100%'
                                height='300px'
                            />
                            <span className="video-subtitle mt-2">Seyhan Bozkır, Proje Yöneticisi</span>
                            <p className="sec-blue mt-2">"Securitas Technology ile beraber büyüdüm, geliştim, değiştim"</p>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=h-5q_KhirHI"
                                width='100%'
                                height='300px'
                            />
                            <span className="video-subtitle mt-2">Serdar İnce, Elektronik Güvenlik Mükemmelliyet Merkezi Lideri</span>
                            <p className="sec-blue mt-2">"Farklı kültürlerden farklı insanlarla çalışma fırsatı elde ettim"</p>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=7J6zFlRPTls"
                                width='100%'
                                height='300px'
                            />
                            <span className="video-subtitle mt-2">Nimet Çevik, İnsan Kaynakları Uzmanı</span>
                            <p className="sec-blue mt-2">"Bir proje geliştirmek istediğimde bunu can kulağıyla dinleyen insanlarla çalışıyorum"</p>
                        </div>
                    </div>
                </div>
                <div className="career-apply section-padding">
                    <img src={basvurbanner} alt="Konuşan İnsanlar" style={{ display: "block", width: "100%", height: "auto" }} />
                    <div className="career-apply-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 career-apply-inner-item">
                                    <h2 className="sec-blue">Yarının dünyasını inşa eden ekibe katılmak için bugün başvurun</h2>
                                    <div className="help-background mt-4"><a target="_blank" href="https://careers.smartrecruiters.com/Securitas/securitas-technology" style={{ color: "white" }}>Hemen Başvur</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}
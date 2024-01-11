import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/referances.css";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import BlogBanner from "../../images/blog-banner.jpg";
import "../../css/awards.css";

const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/hakkimizda/odullerimiz/': 'Ödüllerimiz'
}

export default function Awards() {
    return (
        <>
            <Helmet>
                <title>Ödüllerimiz | Securitas Technology</title>
                <meta name="description" content="Tarihimizdeki önemli başarılarımız için ödüllendirildik. Ödüllerimizi görmek için tıklayınız!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/neden-securitas-technology/odullerimiz" />
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
                            "name": "Ödüllerimiz",
                            "item": "https://www.securitastechnology.com.tr/neden-securitas-technology/odullerimiz"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className='sec-white-bg'>
                <Bread data={breadcrumb} colorName="#031f30" />
                <div className="container">
                    <h1 className="sec-blue">Ödüllerimiz</h1>
                </div>
                <div className="section-padding">
                    <img src={BlogBanner} height="317px" width="100%" />
                </div>
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h2 className="sec-blue">Tarihimizdeki önemli olaylar</h2>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <ul className="awards-list">
                                    <h3 className="sec-blue">Ödüllerimiz</h3>
                                    <li>
                                        <span className="awards-list_year">2020</span>
                                        <span className="awards-list_title">Güvenlik Donanımı Kategori Birincisi</span>
                                        <span className="awards-list_sub">Bilişim 500</span>
                                        <span className="awards-list_title">Yılın İş Ortağı OEM Çözümleri</span>
                                        <span className="awards-list_sub">Dell Technologies</span>
                                        <span className="awards-list_title">IT Kategorisinde Gold Winner</span>
                                        <span className="awards-list_sub">Muse Awards</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2019</span>
                                        <span className="awards-list_title">Yılın İş Ortağı</span>
                                        <span className="awards-list_sub">Extreme Networks</span>
                                        <span className="awards-list_title">Güvenlik Donanımı Kategori Birincisi</span>
                                        <span className="awards-list_sub">Bilişim 500</span>
                                        <span className="awards-list_title">10 Years Enterprise Partner</span>
                                        <span className="awards-list_sub">Tyco</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2018</span>
                                        <span className="awards-list_title">Güvenlik Donanımı Kategori Birincisi</span>
                                        <span className="awards-list_sub">Bilişim 500</span>
                                        <span className="awards-list_title">En İyi Güvenlik ve Video İzleme Sistem Entegratörü</span>
                                        <span className="awards-list_sub">Dell EMC</span>
                                        <span className="awards-list_title">1 Gelenek 1 Aile 1 Gelecek, Yılın İş Ortağı OEM Çözümleri</span>
                                        <span className="awards-list_sub">Dell</span>
                                        <span className="awards-list_title">Performans Ödülü (Kartlı geçiş ve kontrol sistemleri, en iyi satış performansı)</span>
                                        <span className="awards-list_sub">Bosch</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2017</span>
                                        <span className="awards-list_title">Yılın Güvenlik Donanımı kategorisinde Birincilik Ödülü</span>
                                        <span className="awards-list_sub">BTHaber</span>
                                        <span className="awards-list_title">Video İzleme Sistemleri En İyi Satış Performansı</span>
                                        <span className="awards-list_sub">Bosch</span>
                                        <span className="awards-list_title">Genel Seslendirme ve Acil Anons Sistemleri</span>
                                        <span className="awards-list_sub">Bosch</span>
                                        <span className="awards-list_title">Güvenlik Donanımı Kategori Birincisi</span>
                                        <span className="awards-list_sub">Bilişim 500</span>
                                        <span className="awards-list_title">En İyi Sistem Entegretörü Satış Performansı</span>
                                        <span className="awards-list_sub">Bosch</span>
                                        <span className="awards-list_title">En Çok Büyüyen Bayi</span>
                                        <span className="awards-list_sub">Bosch</span>
                                        <span className="awards-list_title">Performans Ödülü</span>
                                        <span className="awards-list_sub">Bosch</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2016</span>
                                        <span className="awards-list_title">Sistem Entegretörü Görüntü ve Ses Sistemleri Kategori Birincisi</span>
                                        <span className="awards-list_sub">Bilişim 500</span>
                                        <span className="awards-list_title">En İyi Satış Performansı (Kartlı Geçiş Sistemleri)</span>
                                        <span className="awards-list_sub">Bosch</span>
                                        <span className="awards-list_title">Grand Launch Automated Product Positioning Solution</span>
                                        <span className="awards-list_sub">Pricer</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2015</span>
                                        <span className="awards-list_title">En Hızlı Büyüyen Bayi</span>
                                        <span className="awards-list_sub">Bosch</span>
                                        <span className="awards-list_title">Master Integrator In Recognition of Outstanding Sales Performance</span>
                                        <span className="awards-list_sub">Continental Access</span>
                                        <span className="awards-list_title">Project of The Year</span>
                                        <span className="awards-list_sub">Tyco</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2020</span>
                                        <span className="awards-list_title">Güvenlik Donanımı Kategori Birincisi</span>
                                        <span className="awards-list_sub">Bilişim 500</span>
                                        <span className="awards-list_title">Yılın İş Ortağı OEM Çözümleri</span>
                                        <span className="awards-list_sub">Dell Technologies</span>
                                        <span className="awards-list_title">IT Kategorisinde Gold Winner</span>
                                        <span className="awards-list_sub">Muse Awards</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2014</span>
                                        <span className="awards-list_title">Outstanding Business Performance Award</span>
                                        <span className="awards-list_sub">Tyco</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2013</span>
                                        <span className="awards-list_title">Best Delivered Project</span>
                                        <span className="awards-list_sub">AXIS Communications</span>
                                        <span className="awards-list_title">En Hızlı Büyüyen Bayi</span>
                                        <span className="awards-list_sub">Bosch</span>
                                        <span className="awards-list_title">Yangın Algılama Sistemleri En İyi Satış Performansı</span>
                                        <span className="awards-list_sub">Bosch</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2012</span>
                                        <span className="awards-list_title">Performans Ödülü</span>
                                        <span className="awards-list_sub">Bosch</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2011</span>
                                        <span className="awards-list_title">En Hızlı Büyüyen Bayi</span>
                                        <span className="awards-list_sub">Bosch</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2009</span>
                                        <span className="awards-list_title">Akbank Sanat Özel Ödülü</span>
                                        <span className="awards-list_sub">Akbank</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2008</span>
                                        <span className="awards-list_title">EMEA Business Partner Special Achievement Award</span>
                                        <span className="awards-list_sub">Tyco</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2007</span>
                                        <span className="awards-list_title">Security in the Meeting Industry</span>
                                        <span className="awards-list_sub">Asis</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2006</span>
                                        <span className="awards-list_title">Sales Recognition Award</span>
                                        <span className="awards-list_sub">Alpha</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2005</span>
                                        <span className="awards-list_title">Sales Performance of The Year</span>
                                        <span className="awards-list_sub">Tyco</span>
                                        <span className="awards-list_title">CCTV / Access Control Business Partner of The Year</span>
                                        <span className="awards-list_sub">Tyco</span>
                                        <span className="awards-list_title">Sales Recognition Award</span>
                                        <span className="awards-list_sub">Alpha</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2002</span>
                                        <span className="awards-list_title">Outstanding Over Achievement Award</span>
                                        <span className="awards-list_sub">DSC</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2000</span>
                                        <span className="awards-list_title">Kazançları Üzerinden Yüksek Düzeyde Kurumlar Vergisi Mükellefi</span>
                                        <span className="awards-list_sub">İstanbul Ticaret Odası</span>
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
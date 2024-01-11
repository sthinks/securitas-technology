import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/referances.css";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import BlogBanner from "../../images/blog-banner.jpg";
import "../../css/awards.css";

const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/hakkimizda/ilklerimiz/': 'İlklerimiz'
}
export default function OurFirst() {
    return (
        <>
            <Helmet>
                <title>İlklerimiz | Securitas Technology</title>
                <meta name="İlklerimiz" content="Nested component" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/neden-securitas-technology/ilklerimiz" />
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
                            "name": "İlklerimiz",
                            "item": "https://www.securitastechnology.com.tr/neden-securitas-technology/ilklerimiz"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className='sec-white-bg'>
                <Bread data={data} colorName="#031f30" />
                <div>
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
                                    <h3 className="sec-blue">İlklerimiz</h3>
                                    <li>
                                        <span className="awards-list_year">2020</span>
                                        <span className="awards-list_sub">İlk Countware Envanter Yönetimi Sistemi</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2019</span>
                                        <span className="awards-list_sub">İlk Kayıp Önleme Yönetim Hizmeti (SmaaS)

                                        </span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2018</span>
                                        <span className="awards-list_sub">İlk Passlogic Personel ve Ziyaretçi Takip Yazılımı

                                        </span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2017</span>
                                        <span className="awards-list_sub">Mobil Geçiş Kontrol Sistemi

                                        </span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2016</span>
                                        <span className="awards-list_sub">İlk Dünyanın En Küçük Dome Kamerası
                                        </span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2015</span>
                                        <span className="awards-list_sub">İlk 30 MP Kamera
                                        </span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2013</span>
                                        <span className="awards-list_sub">İlk En Küçük Boyutta En Büyük Megapiksele Sahip Kamera
                                        </span>
                                        <span className="awards-list_sub">İlk Zamana Göre Ayarlanebilen Elekromekanik Kilit Sistemi
                                        </span>
                                        <span className="awards-list_sub">İlk Yüksek Hızda ve Doğrulukta Uzak Mesafeden İris Tanıma Sistemi
                                        </span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2012</span>
                                        <span className="awards-list_sub">İlk Elektronik Kelepçe Çözümü</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2011</span>
                                        <span className="awards-list_sub">İlk 16 ve 29 MP Kamera</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2010</span>
                                        <span className="awards-list_sub">İlk Telefon Yönetim ve Kayıt Sistemi</span>
                                        <span className="awards-list_sub">İlk RVS (Video İle Uzaktan İzleme) Sistemi</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2009</span>
                                        <span className="awards-list_sub">İlk İnteraktif Ürün Sergileme Ünitesi</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2008</span>
                                        <span className="awards-list_sub">İlk GSM Kontrollü Otopark Bariyeri</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2006</span>
                                        <span className="awards-list_sub">İlk Video Analitik Kişi Sayma Sistemi</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2005</span>
                                        <span className="awards-list_sub">İlk Uzaktan İzleme Sistemi</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2004</span>
                                        <span className="awards-list_sub">İlk Kablosuz Kartlı Geçiş El Terminali</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2003</span>
                                        <span className="awards-list_sub">İlk Perimeter Güvenlik Sistem Entegrasyonu</span>
                                        <span className="awards-list_sub">İlk Raylı Kamera Sistemi Entegrasyonu</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">2002</span>
                                        <span className="awards-list_sub">İlk Redundant Matrix Switcher (Şişecam)</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">1999</span>
                                        <span className="awards-list_sub">İlk Yüz Tanıma Sistemi (Şişli Emniyet M.)</span>
                                        <span className="awards-list_sub">İlk Şehir İzleme Sistemi Entegrasyonu</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">1998</span>
                                        <span className="awards-list_sub">İlk İris Tanıma Sistemi</span>
                                        <span className="awards-list_sub">İlk Kişi Sayma Sistemi</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">1997</span>
                                        <span className="awards-list_sub">İlk Bebek İzleme Sistemi</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">1996</span>
                                        <span className="awards-list_sub">İlk Entegre Güvenlik Sistemi (Tatilya)</span>
                                        <span className="awards-list_sub">İlk Güvenlik Amaçlı Fiber Optik Kablo</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">1995</span>
                                        <span className="awards-list_sub">İlk 24 Saat Kesintisiz Video Kayıt Sistemi</span>
                                    </li>
                                    <li>
                                        <span className="awards-list_year">1994</span>
                                        <span className="awards-list_sub">İlk Speed Dome Kamera Sistemi</span>
                                        <span className="awards-list_sub">İlk Proximity Kart Uygulaması</span>
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
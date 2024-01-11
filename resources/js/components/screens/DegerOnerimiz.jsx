import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/career.css";
import Line from "../Line";
import MühendislikBecerimiz from "../../images/neden-securitas/Adsiz.png";
import DeneyimMerkezi from "../../images/neden-securitas/enerjideneyimi.png";
import TeknolojiYönetimimiz from "../../images/neden-securitas/teknoloji-yonetimi.png";
import SatisSonrasi from "../../images/neden-securitas/satis-sonrasi.png";
import HomePageForm from "../HomePage/HomePageForm";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { HashLink as Link } from 'react-router-hash-link';

const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/neden-securitas-technology/': 'Neden Securitas Technology',
    'https://www.securitastechnology.com.tr/neden-securitas-technology/deger-onerimiz': 'Değer Önerimiz'
}

const list = [
    {
        title: "%90",
        description: "İlk ziyarette çözüm oranı"
    },
    {
        title: "25 bin",
        description: "Yıllık ortalama servis sayısı"
    },
    {
        title: "40 bin",
        description: "Farklı proje"
    },
    {
        title: "24 saatin altında",
        description: "Ortalama müdahale süresi"
    },
    {
        title: "81 il",
        description: "Yaygın servis ağı"
    },
    {
        title: "18 il",
        description: "Yerleşik ekip"
    },
    {
        title: "80 farklı marka",
        description: "Sistem desteği"
    },
    {
        title: "%92",
        description: "Kendi ekibimizle hizmet"
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

export default function DegerOnerimiz() {

    return (
        <>
            <Helmet>
                <title>Değer Önerimiz | Securitas Technology</title>
                <meta name="description" content="Mühendislik becerimiz, deneyim merkezimiz, teknoloji yönetimimiz ve tüm değer önerilerimiz için sayfamızı ziyaret edebilirsiniz!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/neden-securitas-technology/deger-onerimiz" />
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
                            "name": "Değer Önerimiz",
                            "item": "https://www.securitastechnology.com.tr/neden-securitas-technology/deger-onerimiz"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={breadcrumb} colorName="#031f30" />
                <div className="container">
                    <h1 className="sec-blue">Değer Önerimiz</h1>
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
                <div className="sec-white-bg">
                    <div className="container section-padding">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h2 className="sec-blue">Mühendislik becerimiz <br /><span className="sec-purple">Doğru tasarım</span></h2>
                                <p className="mt-4 sec-blue">
                                    Doğru güvenlik çözümünü tasarlamanın temelinde projenin en başında yapılan risk analizi yer alıyor.
                                    12 farklı sektörde 40 binin üzerindeki projede edindiğimiz deneyim ile risklerinizi analiz ediyoruz. Üstelik bunu
                                    47 ülkede 345 bin çalışanı olan Securitas grubun içinde, global bilgi birikimi ve 80 yıllık deneyim
                                    ile yapıyoruz.
                                </p>
                                <p className="mt-2 sec-blue">
                                    Görülenin ötesine bakıyor, en küçük ayrıntıyı bile yakalayabiliyoruz. Çünkü koruduğumuzun sadece sahip
                                    olduğunuz bina veya tesis olmadığını, çalışanlarınızın deneyimi, müşterilerinizin size duyduğu güven olduğunu biliyoruz.
                                </p>
                                <p className="mt-2 sec-blue">
                                    300 çalışanımızın yarısı mühendislerden oluşuyor. En başta doğru tasarımı yapıyoruz. Çözümlerimizin uzun
                                    yıllar sorunsuz şekilde çalışmasını sağlıyoruz.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="career-image-container">
                                    <img src={MühendislikBecerimiz} style={{ width: "100%", display: "block", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sec-gray-bg" id="deneyim-merkezimiz">
                    <div className="container section-padding">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h2 className="sec-blue" >Deneyim merkezimiz<br /><span className="sec-purple">Bilgi birikimi</span></h2>
                                <p className="mt-4 sec-blue">
                                    Güvenlik teknolojileri alaninda Türkiye'deki ilk deneyim
                                    merkezine sahip olan firmayiz. Tüm cözümlerimizi
                                    senaryolar kapsaminda müsterilerimize bizzat
                                    deneyimleme imkani sunuyoruz.
                                </p>
                                <p className="mt-2 sec-blue">
                                    İstanbul Kavacık'ta yer alan deneyim merkezimizi ziyaret etmek icin tiklayin.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="career-image-container">
                                    <img src={DeneyimMerkezi} style={{ width: "100%", display: "block", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sec-white-bg" id="teknoloji-yonetimimiz">
                    <div className="container section-padding">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h2 className="sec-blue" >Teknoloji yönetimimiz <br /><span className="sec-purple">Doğru teknoloji</span></h2>
                                <p className="mt-4 sec-blue">
                                    Müsterilerimiz için en doğru teknolojileri buluyoruz. En iyi ve
                                    en yeni teknolojileri sektöre ilk sunan firmayiz. Teknoloji
                                    yönetimi ekibimiz ile bu teknolojilerin yerellesmesini
                                    sagliyoruz. Ar-Ge ekibimiz ile ihtiyac görmemiz durumunda
                                    yazilim ve donanim gelistiriyoruz.
                                </p>
                                <p className="mt-2 sec-blue">
                                    Yenilikci ve girisimci yaklasimimiz ile cok sayida yeni
                                    teknolojiyi pazara sunmaya devam ediyoruz. Sektöre
                                    kazandirdig miz ilk teknolojileri görmek için tiklayin.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="career-image-container">
                                    <img src={TeknolojiYönetimimiz} style={{ width: "100%", display: "block", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sec-gray-bg" id="satis-sonrasi-hizmetlerimiz">
                    <div className="container section-padding">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h2 className="sec-blue" >Satış sonrası hizmetlerimiz<br /><span className="sec-purple">Sürdürülebilirlik</span></h2>
                                <p className="mt-4 sec-blue">
                                    Sektördeki ilk ve tek gergek zamanli servis takibini yapan
                                    firma olarak servis kalitemizle ön plandayiz. Sahip
                                    oldugumuz servis vönetim sistemi ile hizmet kalitemizi
                                    Müsterilerimize özel servis karneleriyle vermis oldugumuz
                                    hizmetin kalitesini sürekli takip ediyor, raporluyoruz.
                                    Müsterilerimiz sundugumuz hizmetin performansindaki
                                    degisimi yıldan yıla görebiliyor.
                                </p>
                                <p className="mt-2 sec-blue">
                                    Projelerimizde sürdürülebilir ve geliştirilebilir
                                    özellikte teknolojiler kullanıyoruz.
                                    Bu teknolojiler, müsterilerimizin
                                    degisen ihtiyaclarina göre yeniden sekillendirilebiliyor ve
                                    gelistirilebiliyor. Böylece müsterilerimiz hem yatirimlarini
                                    koruyor hem de teknoloji ile paralel sekilde gelisen ve
                                    yasayan sistemlere sahip oluyorlar.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="career-image-container">
                                    <img src={SatisSonrasi} id="satis-sonrasi-hizmetlerimiz" style={{ width: "100%", display: "block", height: "auto" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 mb-3">
                            <div>
                                <h3 className="sec-blue">Rakamlarla teknik servisimiz</h3>
                            </div>
                        </div>
                        {list.map((item) => (
                            <div className="col-md-3 col-sm-12 mt-2">
                                <div style={{ height: "180px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "15px 23px", background: "#55419e" }}>
                                    <div>
                                        <p style={{ fontSize: "35px" }}>{item.title}</p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "20px" }}>{item.description}</p>
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
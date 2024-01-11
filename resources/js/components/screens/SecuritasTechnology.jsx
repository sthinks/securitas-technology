import { Helmet } from "react-helmet";
import Bread from "../Bread";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import NedenSecuritas from "../../images/neden-securitas.jpg";
import WhySecuritasWeb from "../../images/WhySecuritasWeb-Photo-Turkey.jpg";
import arrowRight from "../../images/arrow-indicator-right-hover.svg";
import NedenSecuritasVideo from "../../../../public/brand-film.mp4";
import { IoIosArrowDroprightCircle, IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import CustomerQuestion from "../CustomerQuestion";
import { useEffect, useState } from "react";
import "../../css/nedensecuritas.css"
import { HashLink as Link } from 'react-router-hash-link';
import axiosClient from "../AxiosClient";

const sliderData = [
    {
        title: "KPMG",
        description: "Sürdürülebilir<br />Çözüm Odaklı<br />İş birliğine açık"
    },
    {
        title: "Arçelik",
        description: "Öncü<br />Tecrübeli<br />Trendleri Takip Eden"
    },
    {
        title: "Anadolu Sigorta",
        description: "Teknolojik<br />Yenilikçi<br />Lider"
    },
    {
        title: "Richemont",
        description: "Hızlı<br />Kaliteli<br />Titiz"
    },
    {
        title: "Eczacıbaşı Holding",
        description: "Lider<br />Kaliteli<br />Güvenilir"
    },
    {
        title: "Büyükhanlı İnşaat",
        description: "Tecrübeli<br />İşini Bilen<br />Kaliteli"
    },
    {
        title: "Guess",
        description: "İyi Satış Sonrası Teknik Destek<br />Güvenilir<br />İyi İletişim"
    },
    {
        title: "Gizia",
        description: "Güven<br />Kalite<br />Süreklilik"
    },
    {
        title: "Özyeğin Üniversitesi",
        description: "Lider<br />Kaliteli<br />Güvenilir"
    },
    {
        title: "QNB Finansbank",
        description: "Güvenilir<br />Profesyonel<br />Kaliteli Hizmet"
    },
    {
        title: "Doğuş Holding",
        description: "Çözüm Odaklı<br />Kaliteli<br />Güvenilir"
    },
    {
        title: "Aksa Akrilik",
        description: "Hızlı<br />Kaliteli<br />Güvenilir"
    },
    {
        title: "Mayen",
        description: "Güçlü<br />İletişimi İyi<br />Hızlı"
    },
    {
        title: "YDA",
        description: "Çalışkan<br />Dürüst<br />Bilgili"
    },
    {
        title: "Nivak Express",
        description: "Doğru Çözüm<br />İyi Satış Sonrası Destek<br />İyi İletişim"
    },
    {
        title: "Nike",
        description: "İyi İletişim<br />Çözüm Odaklı<br />Tecrübeli"
    },
    {
        title: "Levi's",
        description: "Güvenilir<br />Hızlı<br />Çözüm Odaklı"
    },
    {
        title: "Hotiç",
        description: "Kaliteli<br />Güvenilir<br />Teknolojik"
    },
    {
        title: "Mudo",
        description: "Kaliteli Ürün<br />Kaliteli Satış Sonrası Servis<br />Ulaşılabilir"
    },
    {
        title: "Global Kahve",
        description: "Hızlı<br />Kaliteli<br />İlgili"
    },
]
const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/neden-securitas-technology': 'Neden Securitas Technology'
}

const questions = [
    {
        id: 0,
        question: "Lider Teknoloji Ortaklarıyla Birlikte Çalışıyoruz",
        answer: "Günümüzde mevcut olan en gelişmiş ve kapsamlı çözümleri sunmak için dünyanın önde gelen güvenlik teknolojisi üreticileri ile birlikte çalışıyoruz."
    }, {
        id: 1,
        question: "İnovasyonu Güçlendirecek Son Teknolojiler",
        answer: "<ul class='why-securitas_answer'><li>Teknoloji Değerlendirme Laboratuvarımız, geleceğin teknolojilelrini inceleyerek uygulama öncesinde müşterilerimize sunacağı faydayı değerlendiriyor.</li><li>Müşteri Deneyim Merkezimiz, müşterilerimize uygulama öncesinde en yeni teknolojileri deneyimleme olanağı sağlıyor.</li><li>Küresel Teknoloji Ağımız, dünya genelindeki uzamnlarımızın birbiri ile bilgi ve tecrübelerini paylaşmasını sağlarken inovasyonu sürekli kılıyor.</li></ul>"
    }, {
        id: 2,
        question: "Güvenlik için Merkezileştirilmiş Programatik Yaklaşımlar",
        answer: "Efektif çalışan bir entegrasyon projesi için ilk adımın doğru tasarım ile başladığının bilincindeyiz. Mühendislik Mükemmeliyet Merkezimiz sayesinde kurumsal ya da çok lokasyonlu işletmeler için tek merkezden kolay yönetilen, genişleyebilen, sürdürülebilir tasarımlar yapma konusunda derin bir uzmanlığa sahibiz."
    }, {
        id: 3,
        question: "Ödüllü Uzaktan İzleme Hizmetleri",
        answer: "Alanında ödül kazanan Uzaktan İzleme Hizmetlerimiz sahip olduğu gelişmiş teknolojik altyapısı ve uzman ekibi ile 7/24 uzaktan izleme hizmeti ve etkin müdahalenin gerçekleştirilmesini sağlıyor. Securitas Uzaktan İzleme Merkezi'ne ulaşan alarm sinyalini alanında uzman ekibimiz tarafından inceliyor ve belirlenmiş prosedürler kapsamında en uygun müdahaleyi gerçekleştiriyoruz."
    }, {
        id: 4,
        question: "Servis ve Bakımda Mükemmellik",
        answer: "DNA’mızda yer alan Servis ve Bakım mükemmelliği için hızlı ve etkili müdahale sağlayan teknolojileri kullanan son derece yetenekli bir ekibe sahibiz. Yetkin servis ekibimiz ve 7/24 Çağrı Merkezimiz ile müşteri memnuniyetini daima en yüksekte tutuyoruz."
    },
]
export default function SecuritasTechnology() {
    const [size, setSize] = useState(2);
    const [openStates, setOpenStates] = useState(Array(questions.length).fill(false));
    const [sectors, setSectors] = useState([]);
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
        {
            title: "Securitas Grup",
            slug: "securitas-grup"
        },
    ]

    const getWindowDimensions = () => {
        const { innerWidth: width } = window;
        if (width < 480) {
            setSize(1)
        }
    }

    useEffect(() => {
        getWindowDimensions()
    }, [])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: size,
        slidesToScroll: 1
    };


    useEffect(() => {
        axiosClient
            .get("api/category/sektorler")
            .then(function (response) {
                const items = response.data.children;
                setSectors(items);
            })
    }, [])

    return (
        <>
            <Helmet>
                <title>Neden Securitas Technology | Securitas Technology</title>
                <meta name="description" content="Neden Securitas Technology diye merak ediyorsanız sayfamızı ziyaret edebilir ve neden pazarın lideri olduğumuzu öğrenebilirsiniz!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/neden-securitas-technology" />

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
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={breadcrumb} colorName="#000000" />
                <div className="container">
                    <h2 className="sec-blue mb-5">Entegre Güvenlik Sistemleri Alanında Dünya Lideri</h2>
                </div>
                <div className="neden-securitas_container">
                    <img src={NedenSecuritas} alt="Neden Securitas Technology?" height="auto" width="100%" />
                    { /*  <div className="neden-securitas_text">
                        <h1 className="sec-blue">Neden Securitas<br />Technology?</h1>
                    </div> */}
                </div>
                <div className="container section-padding text-center">
                    <h2 className="sec-blue font-bold mb-3">
                        Ölçeklenebilir, uçtan uca güvenlik sağlayan teknolojik çözümlerimizle dünyanızın daha güvenli hale gelmesine yardımcı oluyoruz.
                    </h2>
                    <p className="sec-blue mb-3">
                        Securitas’ın bir parçası olan Securitas Technolgy, STANLEY Security ve Securitas Electronic Security ve Sensormatic’in güçlü
                        birleşiminden doğdu. 80 yılı aşkın tecrübemiz ile güvenlik teknolojileri alanında global bir lider olarak insanları, mekanları
                        ve varlıkları güvende tutuyor, attığımız her adımda müşterilerimizi merkeze yerleştiriyoruz.
                    </p>
                    <p className="sec-blue">
                        En yeni teknolojileri, uzmanlığımız ve müşteri odaklı süreçlerimizle birleştiriyor, hizmet verdiğimiz herkesin dönüşümüne güvenliğin gücüyle destek oluyoruz.
                    </p>
                </div>
                <Line />
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <video width="520" height="340" controls>
                                                <source src={NedenSecuritasVideo} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="container sec-blue">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div style={{ marginBottom: "50px" }}>
                                                        <h1 style={{ textAlign: "left" }}>Dünyanın en büyük 2. güvenlik teknolojileri sağlayıcısı</h1>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-5">
                                                    <div>
                                                        <p style={{ marginBottom: "1rem", lineHeight: "3rem", fontSize: "2.8125rem" }}>
                                                            3.1
                                                        </p>
                                                        <p>Milyar Dolar Yllık Gelir</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-5">
                                                    <div>
                                                        <p style={{ marginBottom: "1rem", lineHeight: "3rem", fontSize: "2.8125rem" }}>
                                                            13.000
                                                        </p>
                                                        <p>Yüksek Nitelikli Çalışan </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-5">
                                                    <div>
                                                        <p style={{ marginBottom: "1rem", lineHeight: "3rem", fontSize: "2.8125rem" }}>
                                                            5.000+
                                                        </p>
                                                        <p>Mühendis ve Teknik Uzman</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-5">
                                                    <div>
                                                        <p style={{ marginBottom: "1rem", lineHeight: "3rem", fontSize: "2.8125rem" }}>
                                                            40+
                                                        </p>
                                                        <p>Ülke</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div>
                                                        <p style={{ marginBottom: "1rem", lineHeight: "3rem", fontSize: "2.8125rem" }}>
                                                            10+
                                                        </p>
                                                        <p>Deneyim Merkezi</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Line />
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-md-6 sec-blue">
                            <div className="p-5">
                                <h1 className="mb-5">
                                    Güvenlik ve İş Zekası Teknolojileri alanında sınıfının en iyisiyle tanışın
                                </h1>
                                <div style={{ borderLeft: "2px solid #031F30", padding: "1.25rem 0 1.15625rem 1.875rem" }}>
                                    <p className="mb-3" style={{ fontWeight: "bold", fontSize: "1.5rem", }}>
                                        Projelerimizde kullandığımız teknolojilerimizi işinizle birlikte büyüyebilen ve gelişebilen,
                                        dünya genelinde başarısı kanıtlanmış markalardan seçiyoruz. Sürdürülebilir teknolojilerimiz
                                        ile değişen güvenlik ve verimlilik ihtiyaçları üzerinde kontrol sahibi olmanızı sağlıyoruz.
                                    </p>
                                    <p className="sec-purple-bg navbar-contact-button" style={{ display: "inline-block" }}>
                                        <a style={{ textDecoration: "none", color: "white" }} href="https://www.securitastechnology.com.tr/cozumler-ve-hizmetler/elektronik-guvenlik-cozumleri">
                                            Çözümlerimizi keşfedin
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={WhySecuritasWeb} alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div style={{ background: "#031F30" }}>
                    <div className="container section-padding">
                        <div className="row">
                            <div className="col-md-4">
                                <div style={{ padding: "1.25rem 0 1.15625rem 1.875rem" }}>
                                    <h1>
                                        Çalışanlarımız, Bilgi Birikimimiz ve Teknolojimiz ile Operasyonel Mükemmelliği Destekleme
                                    </h1>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <ul style={{ listStyle: "none" }}>
                                    {questions.map((item, index) => (
                                        <li
                                            key={item.id}
                                            style={{ cursor: "pointer" }}
                                            className="why-securitas_questions"
                                            onClick={() => {
                                                const newOpenStates = [...openStates];
                                                newOpenStates[index] = !newOpenStates[index];
                                                setOpenStates(newOpenStates);
                                            }}
                                        >
                                            <p style={{ fontWeight: "bold", position: "relative" }}>
                                                {item.question}
                                                {openStates[index] ?
                                                    <IoIosArrowDropupCircle style={{ position: "absolute", right: "0", fontSize: "25px" }} />
                                                    :
                                                    <IoIosArrowDropdownCircle style={{ position: "absolute", right: "0", fontSize: "25px" }} />
                                                }


                                            </p>
                                            {openStates[index] && <p className="mt-3" dangerouslySetInnerHTML={{ __html: item.answer }} />}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="text-center mb-5">
                                <h1 className="sec-blue">
                                    Sektörler Arasında Güvenlik Uzmanlığının Kilidini Açmak
                                </h1>
                            </div>
                        </div>
                        {sectors.map((sector) => {
                            if (sector.title != "Referanslar") {
                                return <div className="col-sm-12 col-md-3 mb-4">
                                    <Link to={`/sektorler/${sector.slug}`}>
                                        <div>
                                            <img src={sector.image} alt={sector.title} style={{ width: "100%", height: "190px", objectFit: "cover", display: "block" }} />
                                            <p style={{ margin: "1.5rem 0 1.5rem 0", borderBottom: "1px solid #D7D8D6" }} className="sec-blue video-subtitle">
                                                <img src={arrowRight} style={{ marginRight: "7px" }} />
                                                {sector.title}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            }
                        })}
                    </div>
                </div >
                <Line />
                <CustomerQuestion data={sliderData} settings={settings} />
                <Line />
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
                                <Link to={item.slug} style={{ textDecoration: "none" }}>
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
                <HomePageForm />
            </div >
        </>
    )
}
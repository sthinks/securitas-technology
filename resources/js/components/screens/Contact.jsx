import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/contact.css"
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import { useState, useEffect } from "react";
import { MdLocationOn, MdMail } from "react-icons/md";
import { MdPhoneEnabled } from "react-icons/md";
import axiosClient from "../AxiosClient";

const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/bize-ulasin/': 'Bize Ulaşın'
}

export default function Contact() {
    const [shown, setShown] = useState(false);
    const [newAdress, setNewAdress] = useState([]);
    const [location, setLocation] = useState();
    const [loading, setLoading] = useState(true)

    const filterItem = (value) => {
        const updatedItems = location?.filter((curElem) => {
            return curElem.id === value;
        });
        setNewAdress(updatedItems[0]);
        setShown(!shown)
    }

    const officesHandler = () => {
        setShown(!shown)
    }

    useEffect(() => {
        axiosClient
            .get("api/locations")
            .then(function (response) {
                setLocation(response.data)
            })
        setLoading(false)
    }, [])

    return (
        !loading &&
        <>
            <Helmet>
                <title>Bize Ulaşın | Securitas Technology</title>
                <meta name="description" content="İhtiyacınız olan tüm güvenlik sistemleri ve güvenlik çözümleri ile ilgili bize ulaşabilirsiniz! İletişim bilgilerimiz için şimdi tıklayın!" />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/bize-ulasin" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Bize Ulaşın",
                            "item": "https://www.securitastechnology.com.tr/bize-ulasin"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={breadcrumb} colorName="#031f30" />
                <div className="container">
                    <h1 className="sec-blue">Bize Ulaşın</h1>
                </div>
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <span className="subtitle">Merkez Ofis</span>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <ul className="contact-list">
                                <li>Rüzgarlıbahçe Mah. Çam Pınarı Sk. Smart Plaza No:4 34805, Beykoz İstanbul</li>
                                <li className="underline">Yol tarifi için lütfen <a style={{ fontWeight: "bold" }} href="https://goo.gl/maps/Y2n8TKEaiycZK5iX6" target="_blank">tıklayın</a></li>
                                <li>Telefon:<a href="tel:+90216688200" style={{ color: "#031f30", textDecoration: "none" }}>+90 (216) 681 82 00</a></li>
                                <li>Bize bir e-posta mı göndermek istiyorsunuz? <br /> Lütfen aşağdaki iletişim formunu kullanın.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Line />
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <span className="subtitle">Bölge Müdürlükleri</span>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="offices" onClick={officesHandler} style={{ cursor: "pointer" }}>
                                <div className="country">
                                    <p className="sec-blue" style={{ fontWeight: "bold" }}> {newAdress.length < 1 && <p style={{ fontWeight: "bold" }}>Şehir</p>}{newAdress.country}</p>
                                </div>
                                <div className="select-country-start">
                                    <div className="select-country">
                                        {newAdress.length < 1 ? <p style={{ color: "black" }}>Şehir Seçin</p> :
                                            <>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="sec-blue">
                                                        <MdLocationOn style={{ color: "#031f30", fontSize: "20px", marginRight: "10px" }} />
                                                        {newAdress.address}
                                                    </p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="sec-blue">
                                                        <MdPhoneEnabled style={{ color: "#031f30", fontSize: "20px", marginRight: "10px" }} />
                                                        <a href="tel:4444357" style={{ color: "#031f30", textDecoration: "none" }}>{newAdress.phone}</a>
                                                    </p>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="sec-blue">
                                                        <MdMail style={{ color: "#031f30", fontSize: "20px", marginRight: "10px" }} />
                                                        <a href="mailto:teknikdestek@securitas.com" style={{ color: "#031f30", textDecoration: "none" }}>{newAdress.mail}</a>
                                                    </p>
                                                </div>
                                            </>}
                                    </div>
                                    <div className="arrow-container">
                                        <div>
                                            <BsChevronUp style={{ color: "#031f30" }} />
                                        </div>
                                        <div>
                                            <BsChevronDown style={{ color: "#031f30" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`all-offices ${shown ? 'd-block' : 'd-none'}`}>
                                {location?.map((item) => {
                                    return (
                                        <div onClick={() => filterItem(item.id)} className="offices" style={{ cursor: "pointer" }}>
                                            <div className="country">
                                                <p className="sec-blue" style={{ fontWeight: "bold" }}>
                                                    {item.country}
                                                </p>
                                            </div>
                                            <div className="select-country">
                                                <p className="sec-blue">
                                                    <MdLocationOn style={{ color: "#031f30", fontSize: "20px", marginRight: "10px" }} />
                                                    {item.address}
                                                </p>
                                                <p className="sec-blue">
                                                    <MdPhoneEnabled style={{ color: "#031f30", fontSize: "20px", marginRight: "10px" }} />
                                                    {item.phone}
                                                </p>
                                                <p className="sec-blue">
                                                    <MdMail style={{ color: "#031f30", fontSize: "20px", marginRight: "10px" }} />
                                                    {item.mail}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Line />
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <span className="subtitle">Teknik servis</span>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <ul className="contact-list">
                                <li>Telefon: <a href="tel:4444357" style={{ color: "#031f30", textDecoration: "none" }}>444 43 57</a> (HELP)</li>
                                <li>E-posta: <a href="mailto:teknikdestek@securitas.com" style={{ color: "#031f30", textDecoration: "none" }}>teknikdestek@securitas.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Line />
                <HomePageForm />
            </div>
        </>
    )
}
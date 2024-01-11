import React from "react";
import "../../css/homesection.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const solutions = [
    {
        title: "Elektronik Güvenlik Çözümleri",
        slug: "/cozumler-ve-hizmetler/elektronik-guvenlik-cozumleri"
    },
    {
        title: "İş Zekası Çözümleri",
        slug: "/cozumler-ve-hizmetler/is-zekasi-cozumleri"
    },
    {
        title: "Hizmetler",
        slug: "/cozumler-ve-hizmetler/hizmetler"
    },
]

export default function HomePageSection() {
    return (
        <>
            <div className="sec-white-bg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <span className="mini-subtitle ">Sizi dinliyor, <br /> ihtiyacınıza özel <br /> çözümler tasarlıyoruz</span>
                        </div>
                        <div className="col-sm-12 col-md-7 homepagesection_second">
                            <p className="sec-blue">Herkese uygun tek bir güvenlik ya da iş zekası çözümü
                                olmadığını biliyoruz. İşinizin kendine has risklerini
                                ve ihtiyaçlarını, o sektörde uzmanlaşmış ekibimiz ile
                                analiz ediyoruz. Yenilikçi ve sürdürülebilir teknolojileri
                                ihtiyaçlarınıza ve tercihlerinize göre kurgulayarak çözüm
                                üretiyoruz.</p>
                            <div className="homesection-list">
                                <ul>
                                    {solutions.map((solution) => (
                                        <li className="mt-3 solution-list-item">
                                            <IoIosArrowDroprightCircle />
                                            <Link className="sec-blue" to={solution.slug}>
                                                <p>{solution.title}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
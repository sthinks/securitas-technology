import React from "react"
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinBoxFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";

import threeDot from '../../images/logo/securitas_ab_logo_alt.svg';

const Footer = () => <footer className="site-footer">
    <div className="container text-md-left">
        <div className="row footer-content">
            <div className="col-sm-12 col-md-4 mt-md-0 mt-3 pl-0">
                <div className="d-flex footer-first-item">
                    <ul className="list-unstyled">
                        <li><a href="/kurumsal/bilgi-guvenligi">Bilgi Güvenliği</a></li>
                        <li><a href="/kurumsal/kisisel-verilerin-korunmasi-ve-islenmesi-politikasi">Kişisel Verilerin Korunması ve İşlenmesi Politikası</a></li>
                        <li><a href="/kurumsal/veri-sahibi-basvuru-formu">Veri Sahibi Başvuru Formu</a></li>
                        <li>
                            <a referrerpolicy="no-referrer" href="https://www.belgemodul.com/sirket/1225" target="_blank">Bilgi Toplumu Hizmetleri</a>
                        </li>
                    </ul>
                    <ul className="list-unstyled ms-5">
                        <li><a href="/kurumsal/etik-kod">Etik Kod</a></li>
                        <li><a href="/kurumsal/cerez-politikasi">Çerez Politikası</a></li>
                        <li><a href="/kurumsal/isg-politikasi">İSG</a></li>
                    </ul>
                </div>
            </div>

            <div className="col-sm-12 col-md-4 mb-md-0 mb-3">
                <div className="footer-second-child">
                    <span className="footer-subtitle">Bizi takip edin</span>
                    <ul className="list-unstyled d-flex mt-3 footer-social-media-links justify-content-between">
                        <li><a href="https://www.facebook.com/Securitas.Technology.TR" target="_blank"><RiFacebookBoxFill /></a></li>
                        <li><a href="https://www.instagram.com/securitastechnologytr/" target="_blank"><RiInstagramFill /></a></li>
                        <li><a href="https://www.linkedin.com/company/securitas-tech-tr/" target="_blank"><RiLinkedinBoxFill /></a></li>
                        <li><a href="https://twitter.com/securitastechtr" target="_blank"><RiTwitterFill /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCEr5uaW3No3urPOhhSBTYPQ" target="_blank"><RiYoutubeFill /></a></li>
                    </ul>
                </div>
            </div>

            <div className="col-sm-12 col-md-4 mb-md-0 mb-3">
                <div className="ms-3">
                    <p className="footer-subtitle">7/24 Çağrı Merkezi</p>
                    <div className="help-background text-uppercase mt-2">
                        <a href="tel:+4444357" style={{ color: "white", textDecoration: "none" }}>  444 4357 (HELP)</a>
                    </div>
                    <p className="mt-2 sec-blue"><a href="mailto:teknikdestek@securitas.com" style={{ textDecoration: "none" }}>teknikdestek@securitas.com</a></p>
                </div>
            </div>
        </div>
    </div>

    <div className="container d-flex mt-4" style={{ justifyContent: "space-between" }}>
        <div className="footer-copyright text-center py-3 sec-blue">© {new Date().getFullYear()} Securitas Technology, Her Hakkı Saklıdır.</div>
        <div>
            <img src={threeDot} alt="Securitas Technology Logo" height="30" />
        </div>
    </div>
</footer>

export default Footer

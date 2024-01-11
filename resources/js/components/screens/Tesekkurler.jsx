import { Helmet } from "react-helmet";
import "../../css/tesekkurler.css";
import basarili from "../../images/basarili.svg";

const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/basari-hikayeleri/': 'Başarı Hikayeleri'
}

export default function Tesekkurler() {
    return (
        <>
            <Helmet>
                <title>Teşekkürler | Securitas Technology</title>
            </Helmet>
            <div className="sec-white-bg d-flex align-items-center justify-content-center static-container">
                <div style={{ textAlign: "center" }}>
                    <div class="static__icon d-flex justify-content-center">
                        <img src={basarili} width="100px" />
                    </div>
                    <p class="sec-blue mt-3" style={{ fontSize: "30px" }}>Teşekkür Ederiz</p>
                    <p class="sec-blue mt-3 mb-3" style={{ fontSize: "30px" }}>Başvurunuz alınmıştır.</p>
                    <a href="/" class="sec-purple-bg navbar-contact-button">ANA SAYFAYA DÖN</a>
                </div>
            </div>
        </>
    )
}
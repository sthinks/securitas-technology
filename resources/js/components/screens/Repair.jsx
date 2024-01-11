import { Helmet } from "react-helmet";
import "../../css/repair.css";

export default function Repair() {
    return (
        <>
            <Helmet>
                <title>Onarım Takibi | Securitas Technology</title>
                <meta name="description" content="Servis durumunuzu sorgulayabilmek için şimdi sayfamızı ziyaret edebilirsiniz." />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/onarim-takibi" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Onarım Takibi",
                            "item": "https://www.securitastechnology.com.tr/onarim-takibi"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <div className="sec-blue-bg repair section-padding">
                <div className="repair-wrapper">
                    <iframe class="iframe-shadow" src="https://cc.securitastechnology.com.tr/Public/ServiceStage?company=SEC"
                        scrolling="yes">
                    </iframe>
                </div>
            </div>
        </>
    )
}
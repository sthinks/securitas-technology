import React, { useState } from "react";
import HomePageBanner from "../HomePage/HomePageBanner"
import HomePageBrandList from "../HomePage/HomePageBrandList";
import HomePageContact from "../HomePage/HomePageContact";
import HomePageSection from "../HomePage/HomePageSection";
import HomePageSectionSlider from "../HomePage/HomePageSectionSlider";
import HomePageForm from "../HomePage/HomePageForm";
import popup from "../../images/popup.jpg";
import { Helmet } from "react-helmet";

export default function HomeScreen() {
    const [close, setClose] = useState(true)

    const closeHandler = () => {
        localStorage.setItem('popup_seen', true);
        setClose(false)
    }

    return (
        <>
            {!localStorage.hasOwnProperty('popup_seen') && <div className={"d-none"} id="popup" style={{ display: "block" }}>
                <img src={popup} alt="popup" />
                <button onClick={closeHandler} id="close">X</button>
            </div>}
            <Helmet>
                <title>Değişen Sadece İsmimiz!</title>
                <meta name="description" content="Değişen sadece ismimiz. Türkiye’nin lider elektronik güvenlik entegratörü Sensormatic olarak 28 yıl önce çıktığımız yola artık Securitas Technology ismiyle devam ediyoruz." />
                <link rel="canonical" href="https://www.securitastechnology.com.tr/" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                          {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Ana Sayfa",
                            "item": "https://www.securitastechnology.com.tr/"
                          }
                        ]
                      }
                `}
                </script>
            </Helmet>
            <HomePageBanner />
            <HomePageSection />
            <HomePageSectionSlider />
            <HomePageBrandList />
            <HomePageContact />
            <HomePageForm />
        </>
    )
}

import React from "react";
import ReactDOM from "react-dom/client";
import "./components/Layout/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/colors.css";
import "./css/root.css";
import "./css/fonts.css";
import "./css/header.css";
import "./css/footer.css";
import { BrowserRouter } from "react-router-dom";
import HomeScreen from "./components/screens/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";
import Solutions from "./components/screens/Solutions.jsx";
import Solution from "./components/screens/Solution.jsx";
import SolutionInner from "./components/screens/SolutionInner.jsx";
import Sectors from "./components/screens/Sectors.jsx";
import Sector from "./components/screens/Sector.jsx";
import Stories from "./components/screens/Stories.jsx";
import Story from "./components/screens/Story.jsx";
import Referances from "./components/screens/Referances.jsx";
import Contact from "./components/screens/Contact.jsx";
import Career from "./components/screens/Career.jsx";
import SolutionInnerItem from "./components/screens/SolutionInnerItem.jsx";
import SolutionInnerItemDetail from "./components/screens/SolutionInnerItemDetail.jsx";
import Repair from "./components/screens/Repair.jsx";
import Ebulten from "./components/screens/Ebulten.jsx";
import News from "./components/screens/News.jsx";
import PressReleases from "./components/screens/PressReleases.jsx";
import Social from "./components/screens/Social.jsx";
import Awards from "./components/screens/Awards.jsx";
import OurFirst from "./components/screens/OurFirst.jsx";
import Eas from "./components/screens/Eas.jsx";
import NewsDetail from "./components/screens/NewsDetail.jsx";
import KurumsalPage from "./components/screens/KurumsalPage.jsx";
import SecuritasTechnology from "./components/screens/SecuritasTechnology.jsx";
import DegerOnerimiz from "./components/screens/DegerOnerimiz.jsx";
import RakamlarlaBiz from "./components/screens/RakamlarlaBiz.jsx";
import Amacimiz from "./components/screens/Amacimiz.jsx";
import Degerlerimiz from "./components/screens/Degerlerimiz.jsx";
import Tarihcemiz from "./components/screens/Tarihcemiz.jsx";
import SecuritasGrup from "./components/screens/SecuritasGrup.jsx";
import SolutionInnerDetail from "./components/screens/SolutionInnerDetail.jsx";
import SolutionInnerDetailSecond from "./components/screens/SolutionInnerDetailSecond.jsx";
import Tesekkurler from "./components/screens/Tesekkurler.jsx";
import ScrollButton from "./components/ScrollButton.jsx";
import EtkinlikGiris from "./components/screens/EtkinlikGiris.js";
import EtkinlikAnasayfa from "./components/screens/EtkinlikAnasayfa.js";
import EtkinlikKroki from "./components/screens/EtkinlikKroki.js";
import Bultenler from "./components/screens/Bultenler.jsx";
import RfidCozumler from "./components/screens/RfidCozumler.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                {location.pathname == "/etkinlik-anasayfa" ||
                location.pathname == "/etkinlik-giris" ||
                location.pathname == "/etkinlik-kroki" ? null : (
                    <Header />
                )}
                <Routes>
                    <Route
                        path="/2024-report-global-teknoloji-trendleri-raporumuz"
                        element={<LandingPage />}
                    />

                    <Route path="/" element={<HomeScreen />} />
                    <Route
                        path="/cozumler-ve-hizmetler"
                        element={<Solutions />}
                    />
                    <Route
                        path="/cozumler-ve-hizmetler/:slug"
                        element={<Solution />}
                    />
                    <Route
                        path="/cozumler-ve-hizmetler/:slug/:slug"
                        element={<SolutionInner />}
                    />
                    <Route
                        path="/cozumler-ve-hizmetler/:slug/:slug/:slug"
                        element={<SolutionInnerDetail />}
                    />
                    <Route
                        path="/cozumler-ve-hizmetler/:slug/:slug/:slug/:slug"
                        element={<SolutionInnerDetailSecond />}
                    />
                    <Route
                        path="/cozumler-ve-hizmetler/:slug/elektronik-urun-takip-cozumleri"
                        element={<Eas />}
                    />
                    <Route
                        path="/cozumler-ve-hizmetler/:slug/elektronik-urun-takip-cozumleri/:slug"
                        element={<SolutionInnerItem />}
                    />
                    <Route
                        path="/cozumler-ve-hizmetler/:slug/elektronik-urun-takip-cozumleri/:slug/:slug"
                        element={<SolutionInnerItemDetail />}
                    />
                    <Route path="/sektorler" element={<Sectors />} />

                    <Route path="/referanslar" element={<Referances />} />
                    <Route path="/sektorler/:slug" element={<Sector />} />
                    <Route path="/basari-hikayeleri" element={<Stories />} />
                    <Route
                        path="/basari-hikayeleri/:slug"
                        element={<Story />}
                    />
                    <Route path="/bize-ulasin" element={<Contact />} />
                    <Route path="/kariyer" element={<Career />} />
                    <Route path="/onarim-takibi" element={<Repair />} />
                    <Route path="/haberler" element={<News />} />
                    <Route path="/haberler/e-sensorium" element={<Ebulten />} />
                    <Route
                        path="/haberler/basin-bultenleri"
                        element={<PressReleases />}
                    />
                    <Route
                        path="/haberler/basin-bultenleri/:slug"
                        element={<NewsDetail />}
                    />
                    <Route path="/haberler/sosyal-medya" element={<Social />} />
                    <Route
                        path="/neden-securitas-technology/odullerimiz"
                        element={<Awards />}
                    />
                    <Route
                        path="/neden-securitas-technology/ilklerimiz"
                        element={<OurFirst />}
                    />
                    <Route path="/kurumsal/:slug" element={<KurumsalPage />} />
                    <Route
                        path="/neden-securitas-technology"
                        element={<SecuritasTechnology />}
                    />
                    <Route
                        path="/neden-securitas-technology/deger-onerimiz"
                        element={<DegerOnerimiz />}
                    />
                    <Route
                        path="/neden-securitas-technology/rakamlarla-biz"
                        element={<RakamlarlaBiz />}
                    />
                    <Route
                        path="/neden-securitas-technology/amacimiz"
                        element={<Amacimiz />}
                    />
                    <Route
                        path="/neden-securitas-technology/degerlerimiz"
                        element={<Degerlerimiz />}
                    />
                    <Route
                        path="/neden-securitas-technology/tarihcemiz"
                        element={<Tarihcemiz />}
                    />
                    <Route
                        path="/neden-securitas-technology/securitas-grup"
                        element={<SecuritasGrup />}
                    />
                    <Route path="/tesekkurler" element={<Tesekkurler />} />
                    <Route path="/etkinlik-giris" element={<EtkinlikGiris />} />
                    <Route path="/etkinlik-kroki" element={<EtkinlikKroki />} />
                    <Route
                        path="/etkinlik-anasayfa"
                        element={<EtkinlikAnasayfa />}
                    />
                    <Route path="/bultenler" element={<Bultenler />} />
                    <Route
                        path="/lp/rfid-cozumleri"
                        element={<RfidCozumler />}
                    />
                </Routes>
                <ScrollButton />
            </BrowserRouter>
            {location.pathname == "/etkinlik-anasayfa" ||
            location.pathname == "/etkinlik-giris" ||
            location.pathname == "/etkinlik-kroki" ? null : (
                <Footer />
            )}
        </>
    );
}
const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(<App />);

import React, { useLayoutEffect, useState } from "react";
import "./style.css";
import bannerImage from "./banner-images.jpg";
import bookImage from "./book-img.webp";
import bookListLink from "./arrow-indicator-right.svg";
import firstProgres from "./1.png";
import secondProgres from "./2.png";
import thirthProgres from "./3.png";
import tonyimage from "./tonyimage.webp";
import top1 from "./top1.webp";
import top2 from "./top2.webp";
import top3 from "./top3.webp";
import top4 from "./top4.webp";
import { useNavigate } from "react-router-dom";
import secMan from "./mann.png";
import camera from "./came.png";
import place from "./place.png";

function LandingPage() {
    const [selectItem, setSelectItem] = useState(null);
    const trendingTopic = [
        {
            title: "Gelişen Teknolojiler",
            desc: "Güvenlik uygulamalarının giderek güçlü ve esnek hale gelmesiyle sektördeki yenilikleri yönlendiren gelişmekte olan teknolojilerin potansiyelini keşfedin.",
            img: top1,
        },
        {
            title: "Yapay Zeka ve Veri Analitiği",
            desc: "İşletmeler güvenlik konusunda daha proaktif bir yaklaşıma yönelirken yapay zeka ve veri analitiğinin faydalarını ve etkisini anlayın.",
            img: top2,
        },
        {
            title: "Bilgi Güvenliği ve Veri Gizliliği",
            desc: "Güvenlik teknolojisinin, hızla gelişen siber güvenlik tehditleri çağında kuruluşların tetikte kalmasına yardımcı olmada nasıl hayati bir rol oynadığını görün.",
            img: top3,
        },
        {
            title: "Bulut Geçişi",
            desc: "Giderek daha fazla işletme bulut bilişimin avantajlarını deneyimledikçe, ticari güvenlik sistemleri için buluta geçişin avantajlarını ve engellerini keşfedin.",
            img: top4,
        },
    ];
    useLayoutEffect(() => {
        setSelectItem(trendingTopic[0]);
    }, []);
    const navigate = useNavigate();
    const goLink = () => {
        window.open(
            "https://reports.securitastechnology.com/view/832017321/",
            "_blank"
        );
    };
    return (
        <div>
            <div className="w-100 h-100 position-relative d-flex justify-content-center align-items-center relative ">
                <img
                    className="w-100 "
                    style={{ height: "600px", objectFit: "cover" }}
                    src={bannerImage}
                />
                <div
                    className="position-absolute w-100 h-100"
                    style={{
                        backgroundColor: "black",
                        top: "0px",
                        opacity: "0.35",
                    }}
                />
                <div className="position-absolute w-100 d-flex flex-column banner-text-space">
                    <p className="banner-text-landing">
                        Report 2024 Global
                        <br /> Teknoloji Trendleri <br /> Raporumuz
                    </p>

                    <div
                        className="landing-btn"
                        href="https://online.flippingbook.com/view/959888228/"
                        target="_blank"
                    >
                        <p
                            onClick={() => goLink()}
                            className="text "
                            style={{
                                fontSize: "1.125rem",
                                fontWeight: "600",
                            }}
                        >
                            Raporu Okuyun
                        </p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="container-lan text-black d-flex justify-content-between align-items-center mobil-first">
                    <div
                        className="d-flex flex-column justify-content-between"
                        style={{ paddingRight: "2.1875rem" }}
                    >
                        <div className="first-sector">
                            <p className="book-text-first">
                                Yarının güvenlik teknolojisi trendlerini
                                bugünden görün
                            </p>
                            <p className="book-text-second">
                                <b>
                                    2024 Global Teknoloji Trendleri Raporumuz,{" "}
                                </b>
                                güvenlik teknolojilerinin geleceğini etkileyen
                                çeşitli konular üzerine içgörüler, trendler ve
                                değerli veriler içeriyor.
                            </p>
                            <ul className="custom-list">
                                <li>
                                    Sektör lideri güvenlik teknolojisi
                                    <strong>
                                        uzmanlarının işbirliği ile oluşturuldu
                                    </strong>
                                </li>
                                <li>
                                    Elektronik güvenlik pazarındaki yeni
                                    teknolojileri,{" "}
                                    <strong>
                                        fırsatları ve zorlukları
                                        değerlendiriyor.
                                    </strong>{" "}
                                </li>
                                <li>
                                    <strong>
                                        {" "}
                                        900 güvenlik karar vericisinden
                                    </strong>{" "}
                                    elde edilen özel anket verileri güvenlik
                                    satın almalarındaki trendlere dair benzersiz
                                    bir perspektif sunuyor.
                                </li>
                            </ul>
                            <div className="book-last-link">
                                <img src={bookListLink} alt="rightarrow" />
                                <p
                                    onClick={() => goLink()}
                                    className="kesfet-item-report"
                                >
                                    Raporu Okuyun
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="first-image-book">
                        <img
                            className="book-image-content"
                            src={bookImage}
                            alt="bookimage"
                        />
                    </div>
                </div>
            </div>
            <div className="puprle-sector d-flex justify-content-center align-items-center ">
                {selectItem !== null && (
                    <div className="container-lan text-black d-flex justify-content-between align-items-center purple-sector-container mobil-second">
                        <div
                            className="purple-sector-left"
                            style={{ color: "white" }}
                        >
                            <div className="trending-top-text">
                                <p>Trendler</p>
                                <p>
                                    Raporumuz, 2024 ve sonrasında elektronik
                                    güvenlik pazarını etkileyen gelecek
                                    trendleri konusunda size iç görü sağlıyor.
                                </p>
                            </div>
                            {trendingTopic.map((item, i) => (
                                <div
                                    onClick={() => setSelectItem(item)}
                                    className={
                                        selectItem.title === item.title
                                            ? "selected-trend-item "
                                            : "noselected-trend-item "
                                    }
                                >
                                    {item.title}
                                    {selectItem.title === item.title && (
                                        <>
                                            <p className="trend-item-desc">
                                                {item.desc}
                                            </p>
                                            <div className="progress-last-btn-trend">
                                                <img
                                                    src={bookListLink}
                                                    alt="rightarrow"
                                                />
                                                <p
                                                    onClick={() => goLink()}
                                                    className="kesfet-item"
                                                >
                                                    Keşfedin
                                                </p>
                                            </div>{" "}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="purple-sector-right">
                            <img src={selectItem?.img} />
                        </div>
                    </div>
                )}
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="container-lan text-black d-flex justify-content-center align-items-center text-black">
                    <div className="text-center">
                        <p className="progress-first-text">PAZAR ANALİZLERİ</p>
                        <p className="progress-second-text">
                            Güvenlikle İlgili Karar Vericilerden Veriye Dayalı
                            Bilgiler
                        </p>
                        <div className="d-flex justify-content-center align-items-start progres-content">
                            <div className="progress-item">
                                <img src={firstProgres} />
                                <p>
                                    {" "}
                                    Kuruluşların %86'sı aboneliğe{" "}
                                    <strong>
                                        dayalı elektronik güvenlik hizmetleri
                                        kullanıyor;
                                    </strong>{" "}
                                    Servis planları, izleme ve bakım.
                                </p>
                            </div>
                            <div className="progress-item">
                                <img src={secondProgres} />
                                <p>
                                    Kuruluşların %41'i operasyonel verimliliği{" "}
                                    <strong>
                                        ve maliyet tasarrufunu artırmak için
                                        elektronik güvenlik sistemlerinden
                                        yararlanıyor
                                    </strong>
                                </p>
                            </div>
                            <div className="progress-item">
                                <img src={thirthProgres} />
                                <p>
                                    Kuruluşların %85'i tehditleri tahmin etmek{" "}
                                    <strong>
                                        ve önlemek için güvenlik teknolojisini
                                        kullanıyor.
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <p className="progress-last-text">
                            Daha ayrıcalıklı anket verilerini görmek ister
                            misiniz?
                        </p>
                        <div className="progress-last-btn">
                            <img src={bookListLink} alt="rightarrow" />
                            <p className="kesfet-item" onClick={() => goLink()}>
                                Raporu Okuyun
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center president-main-content">
                <div
                    className="container-lan text-black"
                    style={{ maxWidth: "51.25rem" }}
                >
                    <p className="president-text">
                        Güvenlik, sağlık ve güvenlik teknolojisinde sektörün
                        önde gelen güvenilir ortağı ve danışma olma
                        misyonundayız. Geleceği ortaya çıkarma heyecanımız,
                        güvenliğe, ilerleyen teknolojiye, operasyonel
                        mükemmelliğe odaklanmamıza, müşteri ilişkilerini
                        beslememize, küresel güçlü yönlerimizden yararlanmamız
                        ve otantik bir güvenlik organizasyonunun ruhunu
                        gerçekten somuştlaştırmamıza olan sarsılmaz bağlılığımız
                        kadar gerçek.
                        <div className="progress-last-btn-president">
                            <img src={bookListLink} alt="rightarrow" />
                            <p className="kesfet-item" onClick={() => goLink()}>
                                Raporu Okuyun
                            </p>
                        </div>
                    </p>
                    <div className="d-flex justify-content-start align-items-center president-content">
                        <div className="president-image">
                            <img src={tonyimage} alt="Tony Byerly" />
                        </div>
                        <div>
                            <b>Tony Byerly</b>
                            <p>Securitas Teknoloji, Global Başkan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="container-lan text-black d-flex justify-content-center align-items-center text-black">
                    <div
                        className="d-flex justify-content-center align-items-center flex-column w-100"
                        style={{ padding: "10px" }}
                    >
                        <p className="progress-first-text">HAKKIMIZDA</p>
                        <p className="progress-second-text">
                            Securitas Teknoloji. Farklı bir dünya görün.{" "}
                        </p>
                        <p className="text-center about-us-text-second">
                            Securitas Teknoloji, güvenlik, sağlık ve güvenlik
                            teknolojilerinde lider ve küresel bir sağlayıcıdır.
                            İnsanları, yerleri ve varlıkları 80 yılı aşkın
                            koruma deneyimiyle zenginleştirilmiş, ölçeklenebilir
                            uçtan uca elektronik güvenlik çözümleri sunarak,
                            işletmelerin gücüyle dönüşmesine yardımcı oluyoruz.{" "}
                        </p>
                        <video
                            style={{
                                marginTop: "2rem",
                                marginBottom: "2rem",
                            }}
                            className="video-js landing-video"
                            id="my-player"
                            controls
                            preload="auto"
                            poster="https://www.securitastechnology.com.tr/vid-ban.png"
                            data-setup="{}"
                        >
                            <source
                                src="https://www.securitastechnology.com.tr/lan-video.mp4"
                                type="video/mp4"
                            ></source>

                            <p class="vjs-no-js">
                                To view this video please enable JavaScript, and
                                consider upgrading to a web browser that
                                <a
                                    href="https://www.securitastechnology.com.tr/lan-video.mp4"
                                    target="_blank"
                                >
                                    supports HTML5 video
                                </a>
                            </p>
                        </video>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="container-lan text-black d-flex  justify-content-between align-items-center text-black gap-4 landing-last-card-container">
                                <div className="landing-link-card">
                                    <img className="w-100 h-100" src={camera} />
                                    <div className="book-last-link">
                                        <img
                                            src={bookListLink}
                                            alt="rightarrow"
                                        />
                                        <a
                                            href="https://www.securitastechnology.com.tr/cozumler-ve-hizmetler"
                                            target="blank"
                                        >
                                            Çözümlerimizi keşfedin
                                        </a>
                                    </div>
                                </div>
                                <div className="landing-link-card">
                                    <img className="w-100 h-100" src={place} />
                                    <div className="book-last-link">
                                        <img
                                            src={bookListLink}
                                            alt="rightarrow"
                                        />
                                        <a
                                            href="https://www.securitastechnology.com.tr/sektorler"
                                            target="blank"
                                        >
                                            Desteklediğimiz sektörlere bakın
                                        </a>
                                    </div>
                                </div>
                                <div className="landing-link-card">
                                    <img className="w-100 h-100" src={secMan} />
                                    <div className="book-last-link">
                                        <img
                                            src={bookListLink}
                                            alt="rightarrow"
                                        />
                                        <a
                                            href="https://blog.securitastechnology.com.tr/"
                                            target="blank"
                                        >
                                            En son haberleri ve güncellemeleri
                                            alın
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="container-lan text-black d-flex justify-content-center align-items-center text-black">
                    <div className="landing-page-last-card">
                        <div className="landing-page-last-left">
                            <p className="color-white">
                                Yarının güvenlik teknolojisi trendlerini
                                bugünden görün
                            </p>
                            <p className="color-white">
                                {" "}
                                2024 Küresel Teknoloji Görünümü Raporumuzu
                                okuyun
                            </p>
                        </div>

                        <div className=" landing-btn" onClick={() => goLink()}>
                            <p
                                className="text"
                                style={{
                                    fontSize: "1.125rem",
                                    fontWeight: "600",
                                }}
                            >
                                Raporu Okuyun
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

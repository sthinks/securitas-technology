import React, { useEffect, useRef, useState } from 'react'
import Card from '../../components/Card'
import Elektronik from "../../images/elektronik.png"
import AkilliKilitler from "../../images/akilli-kilitler.png"
import AkilliKilit2 from "../../images/akilli-kilit2.png"
import MagazaPerformans from "../../images/magaza-performans.png"
import MagazaPerformans2 from "../../images/magaza-performans2.png"
import PersonelDevam from "../../images/personel-devam.png"
import Rfid from "../../images/rfid.png"
import UrunTakip from "../../images/urun-takip.png"
import UzaktanIzleme from "../../images/uzaktan-izleme.png"
import RfidVideo from "../../images/rfid.mp4";
import AkilliKilitlerVideo from "../../images/akilli-kilitler.mp4";
import MagazaYonetim from "../../images/magaza-yonetim.mp4";
import UzaktanİzlemeVideo from "../../images/uzaktan-izleme.mp4";
import SelfVideo from "../../images/self-check-out.mp4";
import UrunTakipVideo from "../../images/urun-takip.mp4";
import '../../css/etkinlikanasayfa.css';
import ReactPlayer from 'react-player'
import BackButton from '../../images/return-button.png';
import AkilliKilit2Qr from '../../images/akilli-kilit2-qr.png';
import AkilliKilitlerQr from '../../images/akilli-kilitler-qr.png';
import BulutTabanliQr from '../../images/bulut-tabanli-qr.png';
import ElektronikQr from '../../images/elektronik-qr.png';
import MagazaPerformansQr from '../../images/magaza-performans-qr.png';
import MagazaPerformans2Qr from '../../images/magaza-performans-2-qr.png';
import PersonelDevamQr from '../../images/personel-devam-qr.png';
import RfidQr from '../../images/rfid-qr.png';
import UrunTakipQr from '../../images/urun-takip-qr.png';
import UzaktanIzlemeQr from '../../images/uzaktan-izleme-qr.png';
import BulutTabanli from "../../images/bulut-tabanli.png";
import BulutTabanli2 from "../../images/bulut-tabanli-2.png";
import BulutTabanli2Qr from "../../images/bulut-tabanli-2-qr.png";
import BulutTabanliVideo from "../../images/bulut-tabanli.mp4";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

const data = [
    {
        id: 0,
        title: "Bulut Tabanlı Video İzleme ve Geçiş Kontrol",
        brochure: BulutTabanli,
        brochure2: BulutTabanli2,
        video: BulutTabanliVideo,
        qr: BulutTabanliQr,
        qr2: BulutTabanli2Qr
    },
    {
        id: 1,
        title: "Uzaktan İzleme Hizmetleri",
        brochure: UzaktanIzleme,
        video: UzaktanİzlemeVideo,
        qr: UzaktanIzlemeQr
    },
    {
        id: 2,
        title: "Akıllı Kilitler",
        brochure: AkilliKilitler,
        brochure2: AkilliKilit2,
        video: AkilliKilitlerVideo,
        qr: AkilliKilitlerQr,
        qr2: AkilliKilit2Qr
    },
    {
        id: 3,
        title: "RFID ile Envanter Yönetimi",
        brochure: Rfid,
        video: RfidVideo,
        qr: RfidQr
    },
    {
        id: 4,
        title: "Mağaza Performans Yönetimi",
        brochure: MagazaPerformans,
        brochure2: MagazaPerformans2,
        video: MagazaYonetim,
        qr: MagazaPerformansQr,
        qr2: MagazaPerformans2Qr,
    },
    {
        id: 5,
        title: "Sensormatic Elektronik Ürün Takip ve Kayıp Önleme Yönetimi",
        brochure: UrunTakip,
        video: UrunTakipVideo,
        qr: UrunTakipQr
    },
    {
        id: 6,
        title: "Personel Devam Takibi",
        brochure: PersonelDevam,
        qr: PersonelDevamQr
    },
    {
        id: 7,
        title: "Mobil Check-out",
        video: SelfVideo
    },
    {
        id: 8,
        title: "Elektronik Fiyat Etiketi",
        brochure: Elektronik,
        qr: ElektronikQr,
        video: "https://www.youtube.com/watch?v=f93nosqUCxk"
    },
    {
        id: 9,
        title: "İç Kayıp Önleme",
        video: "https://youtube.com/watch?v=gN5QuF9NufQ&feature=share"
    },
]

const EtkinlikAnasayfa = () => {
    const [titleState, setTitleState] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        mail: '',
        company: '',
        location: ''
    });

    const location = useLocation();
    const state = location.state;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://www.securitastechnology.com.tr/api/screen', formData);
            console.log(response.data)
            setIsSubmitted(true);
            setIsError(false);
            setFormData({
                name: '',
                surname: '',
                phone: '',
                mail: '',
                company: '',
                location: ''
            })
        } catch (error) {
            setIsSubmitted(true);
            setIsError(false);
        }
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleVideoClick = () => {
        setPlaying(!playing);
    };
    const changeTab = (index) => {
        setActiveTab(index);
    };

    const filterData = (cardTitle) => {
        const filteredData = data.filter((item) => {
            return item.title == cardTitle;
        })
        setTitleState(filteredData[0])
    }

    const beklemeSuresi = 100000; // 3 saniye (milisaniye cinsinden)

    const zamanlayiciRef = useRef(null);

    const resetZamanlayici = () => {
        clearTimeout(zamanlayiciRef.current);
        zamanlayiciRef.current = setTimeout(() => {
            window.location.href = '/etkinlik-kroki'; // Yönlendirme yapmak istediğiniz hedef sayfanın URL'ini buraya yazın
        }, beklemeSuresi);
    };

    const handleEtkilesim = () => {
        resetZamanlayici();
    };

    useEffect(() => {
        resetZamanlayici();

        return () => {
            clearTimeout(zamanlayiciRef.current);
        };
    }, []);

    useEffect(() => {
        filterData(state)
    }, [])

    useEffect(() => {
        setActiveTab(0)
        if (!titleState?.video) {
            setActiveTab(1);
        } else if (!titleState?.brochure) {
            setActiveTab(0)
        }
        setFormData({ location: titleState?.title })
    }, [titleState])

    return (
        <div className='h-screen relative' style={{ background: "#d7d8d6" }} onMouseMove={handleEtkilesim} onKeyDown={handleEtkilesim} tabIndex="0">
            <Link to='/etkinlik-kroki' style={{ width: "4rem", position: "absolute", right: "2%", bottom: "3%", zIndex: "9999" }}>
                <img src={BackButton} style={{ width: "100%", filter: "invert(29%) sepia(91%) saturate(422%) hue-rotate(212deg) brightness(87%) contrast(104%)" }} />
            </Link>
            <div className='absolute top-28 px-10 flex w-full h-60vh'>
                <div className='flex-1 pr-32'>
                    <div className='text-55419e text-8rem leading-8rem'>{titleState?.title}</div>
                    <div className='w-12 mt-32'>
                        {titleState?.video &&
                            <div onClick={() => changeTab(0)} className={activeTab == 0 ? 'text-55419e text-3rem font-semibold border-55419e border-b-4 pb-10  pr-5' : 'text-55419e text-3rem border-55419e border-b-4 pb-10 pr-5'}>Videoyu izlemek için dokunun</div>
                        }
                        {titleState?.brochure &&
                            <div onClick={() => changeTab(1)} className={activeTab == 1 ? 'text-55419e text-3rem font-semibold border-55419e border-b-4 pb-10 pt-10 pr-5' : 'text-55419e text-3rem border-55419e border-b-4 pb-10 pt-10 pr-5'}>Çözüm broşürü için dokunun</div>
                        }
                        <div onClick={() => changeTab(2)} className={activeTab == 2 ? 'text-55419e text-3rem font-semibold border-55419e border-b-4 pb-10 pt-10 pr-5' : 'text-55419e text-3rem border-55419e border-b-4 pb-10 pt-10 pr-5'}>Sizinle iletişime geçmemiz için dokunun</div>
                    </div>
                </div>
                {
                    activeTab == 0 && <div className='flex-2_2_0' onClick={handleVideoClick}>
                        <div className='w-full h-90' onClick={handleVideoClick}>
                            <ReactPlayer
                                url={titleState?.video}  // Video URL'sini buraya yerleştirin
                                playing={playing}
                                width="100%"
                                height="100%"
                                controls
                            />
                        </div>
                    </div>
                }
                {
                    activeTab == 1 && <div className='flex-2_2_0'>
                        <div className='h-full flex items-center'>
                            <img src={titleState?.brochure} className={titleState?.brochure2 ? 'w-700px' : 'w-900px'} />
                            {titleState?.brochure2 && <img style={{ marginLeft: "10rem" }} src={titleState?.brochure2} className={titleState?.brochure2 ? 'w-700px' : 'w-900px'} />}

                            {
                                titleState?.brochure && !titleState.brochure2 ? <div className='flex items-center ml-32' style={{ marginLeft: "2rem" }}>
                                    <img src={titleState?.qr} className='w-64' />
                                    <div className='text-031f30 text-4rem w-24 ml-14'>
                                        Broşürü okumak için kodu telefonunuza okutun
                                    </div>
                                </div>
                                    : null
                            }
                        </div>
                        <div>
                            {
                                titleState?.brochure2 ? (
                                    <div style={{ display: "flex", alignItems: "center", marginTop: "2rem" }}>
                                        <div className='flex items-center ml-32'>
                                            <img src={titleState?.qr} className='w-64' />
                                            <div className='text-031f30 text-4rem w-24 ml-14'>
                                                Broşürü okumak için kodu telefonunuza okutun
                                            </div>

                                        </div>
                                        <div className='flex items-center ml-32' style={{ marginLeft: "-1.8rem" }}>
                                            <img src={titleState?.qr2} className='w-64' />
                                            <div className='text-031f30 text-4rem w-24 ml-14'>
                                                Broşürü okumak için kodu telefonunuza okutun
                                            </div>

                                        </div>
                                    </div>
                                )
                                    :
                                    null
                            }

                        </div>
                    </div>
                }
                {
                    activeTab == 2 && <div className='flex-2_2_0'>
                        <div className='border-t-2 border-808080'>
                            <div className='flex pt-16'>
                                <div className='flex-1'>
                                    <div className='text-031f30 text-6rem font-bold'>İletişime Geçin</div>
                                    <div className='text-031f30 text-24rem font-bold mt-8'>Daha fazla bilgi edinmek ister misiniz?</div>
                                    <div className='text-031f30 text-24rem font-bold mt-8'>Formu doldurun en kısa sürede geri dönüş sağlayalım.</div>
                                </div>
                                <div className='flex-2_2_0'>
                                    <form action="" onSubmit={handleSubmit}>
                                        <div className='bg-white p-4'>
                                            <div className='relative'>
                                                <label htmlFor="name" style={{ fontSize: "0.8rem" }} className='text-031f30 font-semibold absolute top-2 left-5'>Ad</label>
                                                <input required value={formData.name} onChange={handleChange} style={{ border: "none" }} className='bg-d7d8d6 w-full h-48 text-031f30 text-24rem pl-5 pt-16' id='name' name='name' type="text" />
                                            </div>
                                            <div className='relative'>
                                                <label htmlFor="surname" style={{ fontSize: "0.8rem" }} className='text-031f30 font-semibold absolute top-2 left-5'>Soyad</label>
                                                <input required value={formData.surname} onChange={handleChange} style={{ border: "none" }} className='bg-d7d8d6 w-full h-48 text-031f30 text-24rem pl-5 pt-16' id='surname' name='surname' type="text" />
                                            </div>
                                            <div className='relative'>
                                                <label htmlFor="phone" style={{ fontSize: "0.8rem" }} className='text-031f30 font-semibold absolute top-2 left-5'>Telefon Numarası</label>
                                                <input required value={formData.phone} onChange={handleChange} style={{ border: "none" }} className='bg-d7d8d6 w-full h-48 text-031f30 text-24rem pl-5 pt-16' id='phone' name='phone' type="number" />
                                            </div>
                                            <div className='relative'>
                                                <label htmlFor="mail" style={{ fontSize: "0.8rem" }} className='text-031f30 font-semibold absolute top-2 left-5'>E-Posta Adresi</label>
                                                <input required value={formData.mail} onChange={handleChange} style={{ border: "none" }} className='bg-d7d8d6 w-full h-48 text-031f30 text-24rem pl-5 pt-16' id='mail' name='mail' type="text" />
                                            </div>
                                            <div className='relative'>
                                                <label htmlFor="company" style={{ fontSize: "0.8rem" }} className='text-031f30 font-semibold absolute top-2 left-5'>Firma Adı</label>
                                                <input required value={formData.company} onChange={handleChange} style={{ border: "none" }} className='bg-d7d8d6 w-full h-48 text-031f30 text-24rem pl-5 pt-16' id='company' name='company' type="text" />
                                            </div>
                                        </div>
                                        <div className='relative mt-8' style={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
                                            <button type='submit' style={{ border: "none", marginTop: "25px", padding: "10px 20px" }} className='bg-55419e text-white' >Gönder</button>
                                            {isSubmitted && !isError && (
                                                <div style={{ fontSize: "1rem", marginLeft: "76px", fontWeight: "bold", color: "green" }} role="alert">
                                                    Form başarıyla gönderildi!
                                                </div>
                                            )}

                                            {isError && (
                                                <div style={{ fontSize: "1rem", marginLeft: "76px", fontWeight: "bold", color: "red" }} role="alert">
                                                    Form gönderimi başarısız oldu. Lütfen tekrar deneyin.
                                                </div>
                                            )}
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className='absolute bottom-12 px-10 flex flex-wrap w-full gap-8'>
                {data.map((item) => (
                    <Card title={item.title} filterData={filterData} titleState={titleState} />
                ))}
            </div>
        </div >
    )
}

export default EtkinlikAnasayfa
import React from 'react'
import Kroki from "../../images/giris2.jpg"
import { useNavigate } from 'react-router-dom';

const EtkinlikKroki = () => {
    const navigate = useNavigate();

    const handleRedirect = (data) => {
        navigate('/etkinlik-anasayfa', { state: data })
    }

    return (
        <div style={{ position: "relative" }}>
            <img src={Kroki} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div onClick={() => navigate('/etkinlik-anasayfa', { state: 'Sensormatic Elektronik Ürün Takip ve Kayıp Önleme Yönetimi' })} style={{ zIndex: 9999, background: "transparent", width: "460px", height: "200px", position: "absolute", bottom: "22%", left: "5%" }} />
            <div onClick={() => navigate('/etkinlik-anasayfa', { state: 'Uzaktan İzleme Hizmetleri' })} style={{ zIndex: 9999, background: "transparent", width: "340px", height: "178px", position: "absolute", bottom: "59%", left: "24%" }} />
            <div onClick={() => navigate('/etkinlik-anasayfa', { state: 'Personel Devam Takibi' })} style={{ zIndex: 9999, background: "transparent", width: "382px", height: "173px", position: "absolute", bottom: "8%", left: "25%" }} />
            <div onClick={() => navigate('/etkinlik-anasayfa', { state: 'Bulut Tabanlı Video İzleme ve Geçiş Kontrol' })} style={{ zIndex: 9999, background: "transparent", width: "343px", height: "200px", position: "absolute", bottom: "81%", left: "61%" }} />
            <div onClick={() => navigate('/etkinlik-anasayfa', { state: 'Elektronik Fiyat Etiketi' })} style={{ zIndex: 9999, background: "transparent", width: "365px", height: "200px", position: "absolute", bottom: "67%", left: "66%" }} />
            <div onClick={() => navigate('/etkinlik-anasayfa', { state: 'RFID ile Envanter Yönetimi' })} style={{ zIndex: 9999, background: "transparent", width: "391px", height: "200px", position: "absolute", bottom: "9%", left: "55%" }} />
            <div onClick={() => navigate('/etkinlik-anasayfa', { state: 'Mağaza Performans Yönetimi' })} style={{ zIndex: 9999, background: "transparent", width: "280px", height: "200px", position: "absolute", bottom: "14%", left: "73%" }} />
            <div onClick={() => navigate('/etkinlik-anasayfa', { state: 'Mobil Check-out' })} style={{ zIndex: 9999, background: "transparent", width: "280px", height: "200px", position: "absolute", bottom: "26%", left: "75%" }} />
            <div onClick={() => navigate('/etkinlik-anasayfa', { state: 'Akıllı Kilitler' })} style={{ zIndex: 9999, background: "transparent", width: "280px", height: "200px", position: "absolute", bottom: "68%", left: "88%" }} />
        </div>
    )
}

export default EtkinlikKroki
import React, { useState } from 'react'
import HomePageForm from '../HomePage/HomePageForm'
import "../../css/rfidcozumler.css";
import ReactPlayer from 'react-player';
import RfidVideo from "../../images/rfid.mp4";
import Kroki from "../../images/mini-kroki.png";

const RfidCozumler = () => {
    return (
        <div>
            <div style={{ background: '#E8E7E7', padding: '50px 0px' }}>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-4">
                            <div className='rfid-title'>
                                Rfid Çözümleri ile mağazanızı yeniden şekillendirin
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className='rfid-exp'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia earum quaerat libero doloremque ratione officia quis magnam fugiat voluptatibus nesciunt eaque aliquam, temporibus, similique ab! Eos illo assumenda aliquid ut repudiandae illum quos commodi rem aliquam? Voluptatem, reiciendis? Facilis, eveniet.
                            </div>
                        </div>
                        <div className="container">
                            <div style={{ height: '2px', backgroundColor: '#4C3B81', margin: '50px 0px' }} />
                        </div>
                        <div className="col-md-4">
                            <div>
                                <h1 style={{ color: '#4C3B81' }}>RFID ile Envanter Yönetimi</h1>
                                <p style={{ color: '#031f30', fontWeight: 'bold', fontSize: '1.2rem', padding: '20px 0px', borderBottom: '2px solid #031f30' }}>
                                    <a href='/rfid.pdf' style={{ textDecoration: 'none' }}>
                                        Çözüm broşürünü indirmek için tıklayın.
                                    </a>
                                </p>
                                <p style={{ color: '#031f30', fontWeight: 'bold', fontSize: '1.2rem', paddingTop: '20px', paddingBottom: '25px' }}>Videoyu izlemek için tıklayın.</p>
                                <ReactPlayer
                                    url={RfidVideo}  // Video URL'sini buraya yerleştirin
                                    width="100%"
                                    height="100%"
                                    controls
                                />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Kroki} width='75%' height="auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <HomePageForm />
        </div >
    )
}

export default RfidCozumler
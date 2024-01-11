import React from 'react'
import FirstImage from "../../images/giris1.jpg"

const EtkinlikGiris = () => {
    return (
        <div>
            <a href="/etkinlik-kroki">
                <img src={FirstImage} alt="" style={{ width: "100%", height: "auto" }} />
            </a>
        </div>
    )
}

export default EtkinlikGiris
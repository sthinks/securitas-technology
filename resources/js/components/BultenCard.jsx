import React from 'react';
import "../css/bultencard.css";

const BultenCard = ({ title, image, link }) => {
    return (
        <div className='bulten-card'>
            <div className="row">
                <div className="col-4">
                    <div className="bulten-card_image">
                        <img src={image} />
                    </div>
                </div>
                <div className="col-8">
                    <div className='bulten-card_right'>
                        <div className='bulten-card_title'>{title}</div>
                        {link.map((item) => (
                            <a href={item} style={{ display: "block" }} className='bulten-bulten-card_description'>{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BultenCard
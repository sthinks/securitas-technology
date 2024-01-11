import React from 'react'
import "../css/card.css"

const Card = ({ title, filterData, titleState }) => {
    return (
        <div className={titleState?.title == title ? 'border-4 border-55419e-card bg-55419e w-15 h-80 items-center flex' : 'flex border-4 border-55419e-card w-15 h-80 items-center'}
            onClick={() => filterData(title)}
        >
            <div style={{ paddingLeft: "0.5rem" }} className={titleState?.title == title ? 'text-3rem text-fff' : 'text-3rem text-55419e'}>{title}</div>
        </div >
    )
}

export default Card
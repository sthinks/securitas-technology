import React, { useEffect, useState } from 'react'
import BultenCard from '../BultenCard'
import "../../css/bultencard.css"
import axiosClient from '../AxiosClient'

const Bultenler = () => {
    const [bread, setBread] = useState();

    useEffect(() => {
        axiosClient
            .get("api/newsletter")
            .then(function (response) {
                const breadItem = response.data;
                setBread(breadItem);
            })
    }, [])
    return (
        <div className='bultenler-container'>
            <div className='container'>
                <div className="row">
                    {
                        bread?.map((elem) => {
                            return (
                                <div className="col-12">
                                    <BultenCard title={elem.title} image={elem.image} link={elem.link} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Bultenler
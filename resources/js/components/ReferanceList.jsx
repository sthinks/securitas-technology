import React, { useState } from "react";
import { useEffect } from "react";

export default function ReferanceList({ data }) {
    const [items, setItems] = useState(data);
    const [references, setReferences] = useState([]);

    const filterItem = (categItem) => {
        const updatedItems = data?.filter((curElem) => {
            return curElem.slug === categItem;
        });
        setReferences(updatedItems[0].meta.references);
    }
    const showAll = () => {
        items.map((item) => {
            setReferences(ref => [...ref, ...item.meta.references])
        })
    }
    useEffect(() => {
        showAll();
    }, [])
    return (
        items && <>
            <div className="menu-tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button className="referance-btn" onClick={() => showAll()}>Tüm Referanslar</button>
                            {data.map((item) => (
                                <button className="referance-btn" onClick={() => filterItem(`${item.slug}`)}>{item.title}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* my main items section  */}
            <div className="menu-items container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            {
                                references.map((elem) => {
                                    return (
                                        <div className="item1 col-md-3">
                                            <div className="row Item-inside">
                                                <div className="main-title">
                                                    <p>{elem.company}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
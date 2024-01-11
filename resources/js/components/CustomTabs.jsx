import React, { useEffect, useState } from "react";
import "../css/newslist.css";
import { Link } from "react-router-dom";

export default function NewsList({ data }) {
    const [references, setReferences] = useState([]);

    const filterItem = (categItem) => {
        const updatedItems = data?.filter((curElem) => {
            return curElem.slug === categItem;
        });
        setReferences(updatedItems[0].stories);
    }
    const showAll = () => {
        setReferences([]);
        data.map((item) => {
            setReferences(ref => [...ref, ...item.stories])
        })
    }
    useEffect(() => {
        showAll();
    }, [])
    return (
        <>
            <div className="menu-tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button className="referance-btn" onClick={() => showAll()}>Tüm Referanslar</button>
                            {data.map((item) => {
                                if (item.title != "Referanslar") {
                                    return <button className="referance-btn" onClick={() => filterItem(`${item.slug}`)}>{item.title}</button>
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* my main items section  */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            {
                                references?.map((elem) => {
                                    return (
                                        <div className="item1 sol-sm-12 col-md-3 mb-4">
                                            <div className="card">
                                                <Link to={elem.slug}>
                                                    <img className="card-img-top" src={elem.cover} alt={elem.title} />
                                                    <div className="stories-list-text">
                                                        <h4 className="card-title sec-blue">{elem.title}</h4>
                                                    </div>
                                                </Link>
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
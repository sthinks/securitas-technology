import React, { useState } from "react";
import { useEffect } from "react";
import "../css/newslist.css";

export default function NewsList({ data }) {
    const [items, setItems] = useState(data);
    const [allSensorium, setAllSensorium] = useState([]);
    const [menu, setMenu] = useState([]);

    const filterItem = (categItem) => {
        const updatedItems = data?.filter((curElem) => {
            return curElem.year === categItem;
        });
        setAllSensorium(updatedItems)
    }

    useEffect(() => {
        const years = data.map((each) => each.year);
        setMenu([...new Set(years)]);
    }, []);

    const getFirst = () => {
        const firtItem = data?.filter((curElem) => {
            return curElem.year === "2021";
        });
        setAllSensorium(firtItem)
    }

    useEffect(() => {
        getFirst();
    }, [])

    return (
        data &&
        <>
            <div className="menu-tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {menu.map((item) => (
                                <button className="referance-btn" onClick={() => filterItem(`${item}`)}>{item}</button>
                            ))}
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
                                allSensorium.map((elem) => {
                                    return (
                                        <div className="item1 sol-sm-12 col-md-4 mb-4 mt-4">
                                            <div className="card">
                                                <a href={elem.file} target="_blank">
                                                    <img className="card-img-top" src={elem.image} alt={elem.title} />
                                                    <div className="news-list-text">
                                                        <h5 className="card-title sec-blue">{elem.title}</h5>
                                                        <span className="card-text sec-blue">{elem.date}</span>
                                                    </div>
                                                </a>
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
import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "../css/bread.css";

export default function Bread({ data, colorName }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Breadcrumb>
                        {
                            Object.keys(data).map((oneKey, i) => {
                                return (
                                    <Breadcrumb.Item href={oneKey}><span style={{ color: colorName }}>{data[oneKey] + ' >'}</span></Breadcrumb.Item>
                                )
                            })
                        }
                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}
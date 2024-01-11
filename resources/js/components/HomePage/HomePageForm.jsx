import React from "react";
import form from "../../images/form.png";
import "../../css/homepageform.css";
import FormikForm from "../FormikForm";

export default function HomePageForm() {
    return (
        <>
            <div className="homepageform sec-white-bg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <span className="subtitle">İletişime geçin</span>
                            <p className="sec-blue homepageform-description" >
                                Daha fazla bilgi edinmek ister misiniz? <br />
                                Formu doldurun, en kısa sürede <br /> geri dönüş sağlayalım.
                            </p>
                            <img src={form} alt="Konuşan İnsanlar" className="homepageform-img" />
                        </div>
                        <div className="col-sm-12 col-md-7 formik-form">
                            <FormikForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
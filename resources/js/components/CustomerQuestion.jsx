import Slider from "react-slick";


export default function CustomerQuestion({ data, settings }) {

    return (
        <div className="container section-padding">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div>
                        <div className="mb-4">
                            <span className="subtitle">Müşterilerimize sorduk:</span>
                        </div>
                        <div className="customer-three-word">
                            <div className="customers-question-box"></div>
                            <span className="subtitle" style={{ color: "white" }}>Bizi 3 kelimeyle nasıl <br /> tanımlarsınız?</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 referances-slider">
                    <Slider className="referances-slider-container" {...settings}>
                        {data.map((item) => (
                            <div className="referances">
                                <div className="referances-slider-inner">
                                    <div>
                                        <h3 className="sec-blue">{item.title}</h3>
                                    </div>
                                    <div>
                                        <h3
                                            className="sec-purple"
                                            dangerouslySetInnerHTML={{ __html: item.description }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
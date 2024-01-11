import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/solutioninner.css";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import { Link, useParams } from "react-router-dom";
import "../../css/solutioninneritemdetail.css";
import axiosClient from "../AxiosClient";
import Slider from "react-slick";
import "../../css/slider.css";

export default function SolutionInnerItemDetail() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const { slug } = useParams();
    const [size, setSize] = useState(2)
    const [references, setReferences] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axiosClient
            .get("api/category/" + slug)
            .then(function (response) {
                const items = response.data.products;
                setData(items);
                setReferences([items[0]]);
                setCategory(response.data);
                setLoading(false);
            })
    }, [])

    const filterItem = (categItem) => {
        const updatedItems = data?.filter((curElem) => {
            return curElem.name === categItem;
        });
        setReferences([updatedItems[0]]);
    }

    const getWindowDimensions = () => {
        const { innerWidth: width } = window;
        if (width < 480) {
            setSize(1)
        }
    }

    useEffect(() => {
        getWindowDimensions();
    }, [])

    var settings = {
        infinite: true,
        slidesToShow: size,
        slidesToScroll: size,
        speed: 500,
    };

    const itemListElement = data?.breadcrumb && Object.entries(data.breadcrumb).map(([key, value], index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": value,
        "item": key
    }));

    const json = {
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement
    };

    const jsonString = JSON.stringify(json);

    return (
        !loading && <>
            <Helmet>
                <title>{category.title} | Securitas Technology</title>
                <meta name="description" content={data.meta_description} />
                <meta name="keywords" content={data.meta_keywords} />
                <link rel="canonical" href={data.full_url} />
                <script type="application/ld+json">
                    {`
                    ${jsonString}
                `}
                </script>
            </Helmet>
            <div className="sec-white-bg">
                <Bread data={category.breadcrumb} colorName="#031f30" />
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="sec-blue">{category.title}</h1>
                        </div>
                    </div>
                </div>
                <div className="container section-padding">
                    <div className="row">
                        <div className="col-md-4 col-sm-12"></div>
                        <div className="col-sm-12 col-md-8 mt-5 referances-slider">
                            <Slider {...settings}>
                                {data.map((item) => (
                                    <div onClick={() => filterItem(`${item.name}`)} key={item.name} className="homepage-slider_image-container">
                                        <img src={item.image} alt={item.name} className="homepage-slider-image" />
                                        <h4 className={`sec-blue mt-2`}>{item.name}</h4>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="container section-padding">
                    <div>
                        {references.map((item) => {
                            let stringBuild = "";
                            for (let feature in item.features) {
                                stringBuild += `
                                    <li style="margin-left:0px;"><p class="sec-blue product-detail_list-title">${feature}</p> <p class="sec-blue" style="text-align: right;">${item.features[feature]}</p></li>
                               `;
                            }
                            return <ul
                                style={{ marginLeft: "0px" }}
                                className="product-detail_list"
                                dangerouslySetInnerHTML={{ __html: stringBuild }}
                            />;
                        })}
                    </div>
                </div>
                <Line />
                <HomePageForm />
            </div>
        </>
    )
}
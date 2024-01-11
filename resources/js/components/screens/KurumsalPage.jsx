import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/referances.css";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import "../../css/footer.css";
import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";
import { useParams } from "react-router-dom";

export default function KurumsalPage() {
    const [data, setData] = useState([]);
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient
            .get("api/category/" + slug)
            .then(function (response) {
                const items = response.data;
                setData(items);
                setLoading(false);
            })
    }, [])
    console.log(data)
    return (
        !loading && <>
            <Helmet>
                <title>{data.title} | Securitas Technology</title>
                <meta name="description" content={data.meta_description} />
                <meta name="keywords" content={data.meta_keywords} />
                <link rel="canonical" href={data.full_url} />
            </Helmet>
            <div className='sec-white-bg'>
                <Bread data={data.breadcrumb} colorName="#031f30" />
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <h1 className="sec-blue">{data.title}</h1>
                            </div>
                            <div className="col-sm-12 col-md-4"></div>
                            <div className="col-sm-12 col-md-8">

                                {slug === "etik-kod" ?
                                    <div className="mt-5" style={{ paddingLeft: "8px" }}>
                                        <div className="sec-blue mt-3"
                                            dangerouslySetInnerHTML={{ __html: data.body }}
                                        />
                                        {/*
                                        <div>
                                            
                                            {data.meta.files.map((item) => {
                                                return <a target="_blank" href={item.file}>{item.title}</a>
                                            })}
                                        </div> 
                                        */}
                                    </div>
                                    :
                                    <div className="footer-pages_list mt-5">
                                        <div className="sec-blue mt-3"
                                            dangerouslySetInnerHTML={{ __html: data.body }}
                                        />
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                </div>
                <Line />
                <HomePageForm />
            </div >
        </>
    )
}
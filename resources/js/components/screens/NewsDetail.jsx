import { Helmet } from "react-helmet";
import Bread from "../Bread";
import "../../css/referances.css";
import HomePageForm from "../HomePage/HomePageForm";
import Line from "../Line";
import BlogBanner from "../../images/blog-banner.jpg";
import { useEffect, useState } from "react";
import axiosClient from "../AxiosClient";
import { useParams } from "react-router-dom";

const breadcrumb = {
    'https://www.securitastechnology.com.tr/': 'Anasayfa',
    'https://www.securitastechnology.com.tr/blog/': 'Blog'
}

export default function NewsDetail() {
    const [newsItem, setNewsItem] = useState([]);
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosClient
            .get("api/blog/" + slug)
            .then(function (response) {
                const item = response.data;
                item.created_at = (new Date(item.created_at)).toLocaleDateString();;
                setNewsItem(item);
                breadcrumb[item.slug] = item.title;
                setLoading(false);
            })
    }, []);
    return (
        !loading && <>
            <Helmet>
                <title>{newsItem.title} | Securitas Technology</title>
                <meta name="description" content={newsItem.meta_description} />
                <meta name="keywords" content={newsItem.meta_keywords} />
                <link rel="canonical" href={newsItem.full_url} />
            </Helmet>
            <div className='sec-white-bg'>
                <Bread data={breadcrumb} colorName="#031f30" />
                <div>
                    <img src={BlogBanner} height="317px" width="100%" style={{ objectFit: "cover" }} />
                </div>
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-8">
                                <h1 className="sec-blue mt-3">{newsItem.title}</h1>
                            </div>
                            <div className="col-sm-12 col-md-4"></div>
                            <div className="col-sm-12 col-md-8"></div>
                            <div className="col-sm-12 col-md-4">
                                <div className="d-flex flex-column mt-5" style={{ borderLeft: "1px solid gray", paddingLeft: "8px" }}>
                                    <span className="sec-blue" style={{ fontWeight: "600" }}>Yayınlandı</span>
                                    <span className="sec-blue">{newsItem.created_at}</span>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <div className="mt-5" style={{ borderLeft: "1px solid gray", paddingLeft: "8px" }}>
                                    <p className="sec-blue mt-3">{newsItem.excerpt}</p>
                                    <div className="sec-blue mt-3"
                                        dangerouslySetInnerHTML={{ __html: newsItem.body }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Line />
                <HomePageForm />
            </div>
        </>
    )
}

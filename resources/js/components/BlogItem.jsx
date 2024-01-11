import { Link } from "react-router-dom";

export default function BlogItem({ data }) {
    return (
        <>
            {data.map((item) => {
                return (
                    <div className="item1 sol-sm-12 col-md-4 mb-4">
                        <div className="card">
                            <Link to={item.slug}>
                                <img
                                    className="card-img-top"
                                    src={item.image}
                                    alt="Card image cap"
                                />
                                <div className="news-list-text">
                                    <h5 className="card-title sec-blue">
                                        {item.title}
                                    </h5>
                                    <span className="card-text sec-blue">
                                        {item.description}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

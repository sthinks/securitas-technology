export default function StoryList({ data }) {
    return (
        <div className="container section-padding">
            <div className="row">
                {data.map((item) => (
                    <>
                        <div className="col-sm-12 col-md-6 mb-4">
                            <h2 className="sec-blue">{item.title}</h2>
                        </div>
                        <div className="col-sm-12 col-md-6 mb-4">
                            <p className="sec-blue">{item.description}</p>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}
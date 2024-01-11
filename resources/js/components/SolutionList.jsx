import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function SolutionList({ data, colorName }) {
    return (
        data && <>
            {
                data.map((item) => (
                    item.children.map((solution) => (
                        <div className="col-sm-12 col-md-6">
                            <a href={solution.full_url} style={{ textDecoration: "none" }}>
                                <div className="solution-list-item">
                                    <IoIosArrowDroprightCircle style={{ color: colorName }} />
                                    <p className="sec-blue">{solution.title}</p>
                                </div>
                            </a>
                        </div>
                    ))
                ))
            }
        </>
    )
}
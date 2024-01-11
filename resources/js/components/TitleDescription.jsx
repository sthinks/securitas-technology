import React from "react";

export default function TitleDescription({ title, description, colorName }) {
    return (
        <>
            <div className="col-sm-12 col-md-5">
                <h1
                    className={colorName}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </div>
            <div className="col-sm-12 col-md-7 title-description_description">
                <p
                    className={colorName}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>

        </>
    )
}
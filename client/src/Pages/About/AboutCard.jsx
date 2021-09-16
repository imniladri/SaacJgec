import React from "react";

function AboutCard(props) {
    return (
        <>
            <div className={props.classes}>
                <div className="col-md-7">
                    <h3>{props.head}</h3>
                    {props.quotepara}
                    {props.quotetext}
                    <p>{props.para_1}</p>
                    <p>{props.para_2}</p>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <img
                        src={props.src}
                        alt={props.alt}
                        className="img-fluid"
                    />
                </div>
            </div>
        </>
    );
}

function DivisionCard(props) {
    return (
        <>
            <div className="div_card col-lg-4 col-md-5">
                <div className="icon_holder">
                    <span></span>
                    {props.icon}
                </div>
                <h3>{props.head}</h3>
                <p>{props.para}</p>
            </div>
        </>
    );
}

export { AboutCard, DivisionCard };

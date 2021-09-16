import React, { useEffect } from "react";
import { IoRocketOutline } from "react-icons/io5";
import { AboutCard, DivisionCard } from "./AboutCard";
import { AboutData, DivisionData } from "./AboutData";
import "./About.css";

function About() {
    useEffect(() => {
        document.title = "SAAC | About";
    }, []);

    return (
        <>
            <div className="breadcrumb">
                <h2>About</h2>
                <span></span>
                <p>How it all begins!</p>
            </div>

            <section id="about">
                {AboutData.map((val) => {
                    return (
                        <AboutCard
                            key={val.id}
                            classes={val.classes}
                            head={val.head}
                            para_1={val.para_1}
                            para_2={val.para_2}
                            quotepara={val.quotepara}
                            quotetext={val.quotetext}
                            src={val.imgsrc}
                            alt={val.imgalt}
                        />
                    );
                })}
            </section>

            <div className="section_divider"></div>

            <section id="division">
                <div className="division_header">
                    <h2>Our Divisions</h2>
                    <span className="content_divider">
                        <hr />
                        <IoRocketOutline />
                        <hr />
                    </span>
                </div>

                <div className="division_content container row">
                    {DivisionData.map((val) => {
                        return (
                            <DivisionCard
                                key={val.id}
                                head={val.head}
                                para={val.para}
                                icon={val.icon}
                            />
                        );
                    })}
                </div>
            </section>

            <div className="section_divider"></div>

            <section id="collaboration">
                <div className="collaborations_header">
                    <h2>
                        Our <br /> Collaborations
                    </h2>
                    <span className="content_divider">
                        <hr />
                        <IoRocketOutline />
                        <hr />
                    </span>
                </div>

                <div className="collaborations_content">
                    <img src="./img/partners/stereo.jpg" alt="Stereo" />
                    <img src="./img/partners/ritz.png" alt="RITZ" />
                    <img src="./img/partners/delta.png" alt="Delta" />
                </div>
            </section>

            <div className="section_divider"></div>

            <section id="community">
                <div className="community_header">
                    <h2>
                        Our <br /> Community Reach
                    </h2>
                    <span className="content_divider">
                        <hr />
                        <IoRocketOutline />
                        <hr />
                    </span>
                </div>

                <div className="community_content">
                    <img src="./img/partners/iisc.png" alt="IISC" />
                    <img src="./img/partners/iiser.png" alt="IISER" />
                    <img src="./img/partners/bhu.png" alt="BHU" />
                    <img src="./img/partners/ju.png" alt="JU" />
                    <img src="./img/partners/kalyani.png" alt="KGEC" />
                    <img src="./img/partners/coochbehar.png" alt="CGEC" />
                    <img src="./img/partners/uem.png" alt="UEM" />
                    <img src="./img/partners/fit.png" alt="FIT" />
                    <img src="./img/partners/motilal.png" alt="MOTILAL" />
                    <img src="./img/partners/bengal.png" alt="BCE" />
                    <img src="./img/partners/mckv.png" alt="MCKV" />
                    <img src="./img/partners/ramkrishna.png" alt="RIT" />
                </div>
            </section>
        </>
    );
}

export default About;

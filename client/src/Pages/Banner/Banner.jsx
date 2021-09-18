import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Particle from "./Particle";
import { IoTelescope } from "react-icons/io5";
import "./Banner.css";

function Banner() {
    const [isLoad, setisLoad] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Space & Aeronautics Activity Center";
        setTimeout(() => {
            setisLoad(!false);
        }, 1000);
    }, []);

    return (
        <>
            <section id="banner">
                <Particle />

                <div className={isLoad ? "content reveal" : "content"}>
                    <h2>S.A.A.C</h2>
                    <h4>Space and Aeronautics Activity Center</h4>
                </div>

                <div className={isLoad ? "switch reveal" : "switch"}>
                    <Link to="/home" className="btn btn_explore">
                        <span>Explore</span>
                        <IoTelescope />
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Banner;

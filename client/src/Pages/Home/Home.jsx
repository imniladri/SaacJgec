import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiChevronsRight } from "react-icons/bi";
import "./Home.css";

import {
    pageVariants,
    pageTransition,
} from "../../Components/Framer/Animation";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Home";
    }, []);

    return (
        <>
            <section id="home">
                <motion.div
                    exit="out"
                    animate="in"
                    initial="init"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    {/* Home Intro */}
                    <div className="home_intro container row">
                        <div className="col-md-8 item_content">
                            <h2>S.A.A.C</h2>
                            <h3>Space & Aeronautics Activity Center</h3>
                            <h4>Jalpaiguri Government Engineering College</h4>
                            <p>
                                <span>Explore Us</span>
                                <img
                                    src="./img/direction.png"
                                    alt="Direction"
                                />
                            </p>
                        </div>
                        <div className="col-md-4 item_figure">
                            <img src="./img/space_bot.png" alt="Welcome" />
                        </div>
                    </div>

                    {/* Home About */}
                    <div className="home_about container row">
                        <div className="col-md-5 item_figure">
                            <img
                                src="./svg/space_astronaut.svg"
                                alt="Item Figure"
                            />
                        </div>

                        <div className="col-md-7 item_content">
                            <h4>
                                <span>A</span>bout <span>U</span>s
                            </h4>
                            <p>
                                <span>
                                    Space and Aeronautics Activity Center (SAAC)
                                </span>{" "}
                                is an initiative of a few energetic students
                                from Jalpaiguri Government Engineering College
                                who dream of reaching space someday!
                            </p>
                            <p>
                                We're an active community of students showcasing
                                and testing our skills in projects ranging from{" "}
                                <span>Model Rocket Propulsion</span> to
                                developing <span>Flight Guidance System</span>.
                                We idealize great personalities like{" "}
                                <span>
                                    APJ Abdul Kalam, Nambi Narayanan, Vikram
                                    Sarabhai, Elon Musk, Chris Hadfield
                                </span>{" "}
                                and others.
                            </p>
                            <Link to="/about" className="btn btn-know">
                                <span>Know More</span>
                                <BiChevronsRight />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}

export default Home;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import EventComp from "./EventComp";
import EventData from "./EventData";
import "./Leaderboard.css";

import {
    pageVariants,
    pageTransition,
} from "../../Components/Framer/Animation";

function Leaderboard() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Leaderboard";
    }, []);

    return (
        <>
            <div className="breadcrumb">
                <motion.div
                    exit="out"
                    animate="in"
                    initial="init"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <h2>Leaderboard</h2>
                    <span></span>
                    <p>Take look on our events!</p>
                </motion.div>
            </div>

            <motion.div
                exit="out"
                animate="in"
                initial="init"
                variants={pageVariants}
                transition={pageTransition}
            >
                <section id="leaderboard">
                    {EventData.map((val) => {
                        return (
                            <EventComp
                                key={val.id}
                                title_1={val.title_line_1}
                                title_2={val.title_line_2}
                                name_1st={val.name_1st}
                                name_2nd={val.name_2nd}
                                name_3rd={val.name_3rd}
                                inst_1st={val.institute_1st}
                                inst_2nd={val.institute_2nd}
                                inst_3rd={val.institute_3rd}
                                work_1st={val.work_1st}
                                work_2nd={val.work_2nd}
                                work_3rd={val.work_3rd}
                            />
                        );
                    })}
                </section>
            </motion.div>
        </>
    );
}

export default Leaderboard;

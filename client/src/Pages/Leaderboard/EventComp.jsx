import React, { useState } from "react";
import { IoRocketOutline, IoEye, IoClose } from "react-icons/io5";

function EventComp(props) {
    const [isActive1, setisActive1] = useState(false);
    const [isActive2, setisActive2] = useState(false);
    const [isActive3, setisActive3] = useState(false);

    return (
        <>
            <div className="event_header">
                <h2>
                    {props.title_1} <span>{props.title_2}</span>
                </h2>
                <span className="content_divider">
                    <hr />
                    <IoRocketOutline />
                    <hr />
                </span>
            </div>

            <div className="event_position">
                <div className="position_card">
                    <object data="./svg/1st.svg" aria-label="1st"></object>
                    <div className="details">
                        <img src="./svg/1st.svg" alt="1st" />
                        <h4>{props.name_1st}</h4>
                        <p>{props.inst_1st}</p>
                        <IoEye onClick={() => setisActive1(!isActive1)} />
                    </div>
                    <div className={isActive1 ? "work active" : "work"}>
                        <img src={props.work_1st} alt="1st_Work" />
                        <IoClose onClick={() => setisActive1(!isActive1)} />
                    </div>
                </div>

                <div className="position_card">
                    <object data="./svg/2nd.svg" aria-label="2nd"></object>
                    <div className="details">
                        <img src="./svg/2nd.svg" alt="2nd" />
                        <h4>{props.name_2nd}</h4>
                        <p>{props.inst_2nd}</p>
                        <IoEye onClick={() => setisActive2(!isActive2)} />
                    </div>
                    <div className={isActive2 ? "work active" : "work"}>
                        <img src={props.work_2nd} alt="2nd_Work" />
                        <IoClose onClick={() => setisActive2(!isActive2)} />
                    </div>
                </div>

                <div className="position_card">
                    <object data="./svg/3rd.svg" aria-label="3rd"></object>
                    <div className="details">
                        <img src="./svg/3rd.svg" alt="3rd" />
                        <h4>{props.name_3rd}</h4>
                        <p>{props.inst_3rd}</p>
                        <IoEye onClick={() => setisActive3(!isActive3)} />
                    </div>
                    <div className={isActive3 ? "work active" : "work"}>
                        <img src={props.work_3rd} alt="3rd_Work" />
                        <IoClose onClick={() => setisActive3(!isActive3)} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventComp;

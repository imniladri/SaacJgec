import React from "react";
import {
    IoCheckmarkCircleOutline,
    IoCloseCircleOutline,
    IoWarningOutline,
    IoClose,
} from "react-icons/io5";
import "./Popup.css";

// State Color:
const stateSuccess = {
    borderLeft: "1rem solid var(--lightgreen)",
};
const stateError = {
    borderLeft: "1rem solid var(--lightred)",
};
const stateWarning = {
    borderLeft: "1rem solid var(--lightyellow)",
};

function PopupSuccess() {
    return (
        <>
            <div className="popup" style={stateSuccess}>
                <IoCheckmarkCircleOutline
                    size={"4.5rem"}
                    color={"var(--lightgreen)"}
                />
                <p>Sign Up Successful!</p>
                <IoClose className="ioclose" />
            </div>
        </>
    );
}

function PopupError() {
    return (
        <>
            <div className="popup" style={stateError}>
                <IoCloseCircleOutline
                    size={"4.5rem"}
                    color={"var(--lightred)"}
                />
                <p>Please fill all the details!</p>
                <IoClose className="ioclose" />
            </div>
        </>
    );
}

function PopupWarning() {
    return (
        <>
            <div className="popup" style={stateWarning}>
                <IoWarningOutline
                    size={"4.5rem"}
                    color={"var(--lightyellow)"}
                />
                <p>This email is already in use.</p>
                <IoClose className="ioclose" />
            </div>
        </>
    );
}

export { PopupSuccess, PopupError, PopupWarning };

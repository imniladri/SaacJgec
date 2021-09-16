import React, { useEffect } from "react";
import "./Gallery.css";

function Gallery() {
    useEffect(() => {
        document.title = "SAAC | Gallery";
    }, []);

    return (
        <>
            <div className="breadcrumb">
                <h2>Gallery</h2>
                <span></span>
                <p>How it all begins!</p>
            </div>
        </>
    );
}

export default Gallery;

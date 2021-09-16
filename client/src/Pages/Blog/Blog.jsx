import React, { useEffect } from "react";
import "./Blog.css";

function Blog() {
    useEffect(() => {
        document.title = "SAAC | Blog";
    }, []);

    return (
        <>
            <div className="breadcrumb">
                <h2>Blog</h2>
                <span></span>
                <p>How it all begins!</p>
            </div>
        </>
    );
}

export default Blog;

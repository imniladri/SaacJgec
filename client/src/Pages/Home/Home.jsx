import React, { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "SAAC | Home";
    }, []);

    return (
        <>
            <h1>This is Home Page</h1>
        </>
    );
}

export default Home;

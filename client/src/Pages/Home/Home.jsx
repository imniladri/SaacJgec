import React from "react";
import Header from "../../Components/Header";

function Home() {
    return (
        <>
            <section id="home_banner">
                <div class="home_banner">
                    <h2>S.A.A.C</h2>
                    <h4>Space and Aeronautics Activity Center</h4>
                </div>

                <div id="scroll_down">
                    <span></span>
                    <p>Scroll Down</p>
                </div>
            </section>

            <Header />
        </>
    );
}

export default Home;

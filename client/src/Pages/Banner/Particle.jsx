import React from "react";
import Particles from "react-particles-js";

function Particle() {
    return (
        <>
            <Particles
                id="particles-js"
                params={{
                    particles: {
                        number: {
                            value: 40,
                            density: {
                                enable: false,
                            },
                        },
                        color: {
                            value: "#20fdee",
                        },
                        opacity: {
                            value: 1,
                            random: true,
                        },
                        size: {
                            value: 6,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 10,
                                size_min: 0.1,
                            },
                        },
                        move: {
                            speed: 8,
                            direction: "top",
                            straight: true,
                            out_mode: "out",
                        },
                        line_linked: {
                            enable: false,
                        },
                    },
                }}
            />
        </>
    );
}

export default Particle;

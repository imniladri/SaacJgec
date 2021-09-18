// Framer Motion Variants & Transition

const pageVariants = {
    init: {
        opacity: 0,
        x: "-100%",
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: "100%",
    },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
    // transition: "linear",
};

export { pageVariants, pageTransition };

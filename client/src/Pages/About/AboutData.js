import {
    IoPeople,
    IoLayers,
    IoTelescope,
    IoSpeedometer,
} from "react-icons/io5";

const AboutData = [
    {
        id: 1,
        head: "About Us",
        para_1: (
            <>
                <span>Space and Aeronautics Activity Center (SAAC)</span> is an
                initiative of a few energetic students from Jalpaiguri
                Government Engineering College who dream of reaching space
                someday!
            </>
        ),
        para_2: (
            <>
                We're an active community of students showcasing and testing our
                skills in projects ranging from{" "}
                <span>Model Rocket Propulsion</span> to developing
                <span>Flight Guidance System</span>. We idealize great
                personalities like APJ Abdul Kalam, Nambi Narayanan, Vikram
                Sarabhai, Elon Musk, Chris Hadfield and others.
            </>
        ),
        imgsrc: "./img/about/about.png",
        imgalt: "About Us",
        classes: "about container row flex-row",
    },
    {
        id: 2,
        head: "Our Vision",
        para_1: (
            <>
                We dream about growing to a team as strong as{" "}
                <span>NASA, ISRO or Spacex</span>
                in future and bring significant help to the challenges of space.
                Also, we want to make it as the first stop for beginners
                interested in Space Science.
            </>
        ),
        para_2: (
            <>
                Our goal is to provide the community members with not only
                <span>theoretical knowledge</span> but also{" "}
                <span>practical experiences</span>
                about <span>Aerospace and Aeronautics Technology</span>. Bear
                with us and we'll get there one day!
            </>
        ),
        imgsrc: "./img/about/vision.png",
        imgalt: "Our Vision",
        classes: "about container row flex-row-reverse",
    },
    {
        id: 3,
        head: "Collaboration",
        quotepara: <p>As there is a saying</p>,
        quotetext: (
            <blockquote>
                If you wanna go fast, go alone. If you wanna go far, go
                together.
            </blockquote>
        ),
        para_1: (
            <>
                So we welcome <span>collaborators, mentors and students</span>{" "}
                across the nation to bring in new ideas for the greater good.
            </>
        ),
        para_2: (
            <>
                Project engagements, seminars, workshops, online and offline
                classes strengthens our community bond and helping us to grow{" "}
                <span>further and beyond</span>.
            </>
        ),
        imgsrc: "./img/about/collaboration.png",
        imgalt: "Collaboration",
        classes: "about container row flex-row",
    },
];

const DivisionData = [
    {
        id: 1,
        icon: <IoPeople />,
        head: "Administrative Team",
        para: (
            <>
                The <span>Administrative Team</span> takes all the important
                decisions for the
                <span>welfare of SAAC</span>. The team comprises of very sharp
                and creative minds, who are ready to propel SAAC to any level
                possible.
            </>
        ),
    },
    {
        id: 2,
        icon: <IoLayers />,
        head: "Technical Team",
        para: (
            <>
                The <span>Technical Team</span> is at the core of the SAAC,
                turining the ideas into reality. The team is also active in
                solving problems from <span>Automated Flight System</span> to{" "}
                <span>Remote Guidance</span> and <span>Flight Monitoring</span>.
            </>
        ),
    },
    {
        id: 3,
        icon: <IoTelescope />,
        head: "Research Team",
        para: (
            <>
                The <span>Research Team</span> is where new ideas are generated,
                some old ideas are refined and <span>innovations are born</span>
                . The team comprises of folks who can devote their part of
                everyday for the greater benefit.
            </>
        ),
    },
    {
        id: 4,
        icon: <IoSpeedometer />,
        head: "Marketing Team",
        para: (
            <>
                The <span>Marketing Team</span> is responsible for the far reach
                of SAAC. The team creates some of the awesome content which our
                audience cannot resist viewing. The team makes the SAAC feel
                alive and forever fresh.
            </>
        ),
    },
];

export { AboutData, DivisionData };

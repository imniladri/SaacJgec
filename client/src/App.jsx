import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Banner from "./Pages/Banner/Banner";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import Projects from "./Pages/Projects/Projects";
import Gallery from "./Pages/Gallery/Gallery";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";

import Auth from "./Pages/Auth/Auth";
import Error from "./Pages/Error/Error";

function App() {
    const location = useLocation();

    return (
        <>
            <Header />

            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Banner} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/contact" component={Contact} />

                    <Route path="/auth" component={Auth} />

                    <Route component={Error} />
                </Switch>
            </AnimatePresence>

            <Footer />
        </>
    );
}

export default App;

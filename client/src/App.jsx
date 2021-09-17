import React from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Leaderboard from "./Pages/Leaderboard/Leaderboard";
import Projects from "./Pages/Projects/Projects";
import Gallery from "./Pages/Gallery/Gallery";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";

import Auth from "./Pages/Auth/Auth";

function App() {
    return (
        <>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/projects" component={Projects} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />

                <Route path="/auth" component={Auth} />
            </Switch>

            <Footer />
        </>
    );
}

export default App;

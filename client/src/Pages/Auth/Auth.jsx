import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { Logo, AuthImg } from "../../Assets/Assets";
import "./Auth.css";

import Login from "./Login";
import Signup from "./Signup";
import Forget from "./Forget";

import Reset from "./Reset";
import Verify from "./Verify";

function Auth() {
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <header>
                <nav className="navbar">
                    <a className="navbar-brand" href="https://saac.tech/">
                        <img src={Logo} alt="Saac Logo" />
                    </a>

                    <button className="btn goBack" onClick={history.goBack}>
                        <BiLogOutCircle />
                        <span>Go Back</span>
                    </button>
                </nav>
            </header>

            <section id="auth" className="auth">
                <div className="container-fluid row p-0 m-0">
                    <div className="auth_img col-md-5">
                        <img src={AuthImg} alt="Login" />
                    </div>

                    <Switch>
                        <Route exact path="/auth" component={Login} />
                        <Route path="/auth/login" component={Login} />
                        <Route path="/auth/signup" component={Signup} />
                        <Route path="/auth/forget" component={Forget} />

                        <Route path="/auth/reset" component={Reset} />
                        <Route path="/auth/verify" component={Verify} />
                    </Switch>
                </div>
            </section>
        </>
    );
}

export default Auth;

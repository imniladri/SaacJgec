import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import HeaderData from "./HeaderData";
import "./Header.css";

function Header() {
    const [isActive, setisActive] = useState(false);
    const [isScroll, setisScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setisScroll(window.scrollY > 100);
        });
    }, []);

    return (
        <>
            <header className={isScroll ? "scrolled" : ""}>
                <nav className="navbar">
                    <a className="navbar-brand" href="https://saac.tech/">
                        <img src="./svg/logo_light.svg" alt="Saac Logo" />
                    </a>

                    <button
                        className={isActive ? "menu_btn active" : "menu_btn"}
                        onClick={() => {
                            setisActive(!isActive);
                        }}
                    >
                        <span className="menu_icon"></span>
                    </button>

                    <div
                        className={
                            isActive ? "desktop_nav active" : "desktop_nav"
                        }
                    >
                        {HeaderData.map((val) => {
                            return (
                                <NavLink
                                    key={val.id}
                                    to={val.to}
                                    exact
                                    activeClassName="active"
                                    className="nav_link"
                                    onClick={() => {
                                        setisActive(!isActive);
                                    }}
                                >
                                    {val.value}
                                </NavLink>
                            );
                        })}
                        <NavLink
                            to="/login"
                            exact
                            activeClassName="active"
                            className="btn logIn"
                            id="mlogIn"
                            onClick={() => {
                                setisActive(!isActive);
                            }}
                        >
                            <BiLogIn />
                            <span>Log In</span>
                        </NavLink>
                    </div>

                    <NavLink
                        to="/login"
                        exact
                        activeClassName="active"
                        className="btn logIn"
                        id="dlogIn"
                    >
                        <BiLogIn />
                        <span>Log In</span>
                    </NavLink>
                </nav>
            </header>
        </>
    );
}

export default Header;

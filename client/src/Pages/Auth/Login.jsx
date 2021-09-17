import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
    useEffect(() => {
        document.title = "SAAC | Log In";
    }, []);

    return (
        <>
            <div className="auth_desc col-md-7">
                <h2>Log In</h2>

                <div className="my-4">
                    <h4>SAAC</h4>
                    <p>
                        Creating a society where students are given a platform
                        to explore the space and aeronautics.
                    </p>
                    <p>
                        <span>Learning, Practice, Implement:</span>
                        To see you achieve more success in reaching more of your
                        goals with SAAC.
                    </p>
                </div>

                <hr />

                <form id="auth_form" className="login">
                    <div className="form-group">
                        <label htmlFor="email">
                            Email Id <span>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="Email"
                            className="form-control"
                            placeholder=" "
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="pass">
                            Password <span>*</span>
                        </label>
                        <input
                            type="password"
                            id="pass"
                            name="Password"
                            className="form-control"
                            placeholder=" "
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-auth">
                        Login
                    </button>

                    <div className="form-group">
                        <Link to="/auth/signup" className="link-auth">
                            Create Account
                        </Link>
                        <Link to="/auth/forget" className="link-auth">
                            Forget Password?
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;

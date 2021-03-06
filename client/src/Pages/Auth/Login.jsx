import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object({
    email: Yup.string()
        .email("Invalid Email Id")
        .required("Enter Your Email Id!"),
    pass: Yup.string().required("Enter Your Password!"),
});

function Login() {
    const formik = useFormik({
        initialValues: {
            email: "",
            pass: "",
        },
        onSubmit: async () => {},
        validationSchema: formSchema,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
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

                <form
                    id="auth_form"
                    className="login"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="email">
                            Email Id <span>*</span>
                        </label>
                        <input
                            value={formik.values.email}
                            onChange={formik.handleChange("email")}
                            onBlur={formik.handleBlur("email")}
                            type="email"
                            id="email"
                            name="Email"
                            placeholder=" "
                            className={`form-control ${
                                formik.touched.email && formik.errors.email
                                    ? "invalid"
                                    : ""
                            }`}
                        />
                        <p>{formik.touched.email && formik.errors.email}</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pass">
                            Password <span>*</span>
                        </label>
                        <input
                            value={formik.values.pass}
                            onChange={formik.handleChange("pass")}
                            onBlur={formik.handleBlur("pass")}
                            type="password"
                            id="pass"
                            name="Password"
                            placeholder=" "
                            className={`form-control ${
                                formik.touched.pass && formik.errors.pass
                                    ? "invalid"
                                    : ""
                            }`}
                        />
                        <p>{formik.touched.pass && formik.errors.pass}</p>
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

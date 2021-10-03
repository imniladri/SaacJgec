import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object({
    email: Yup.string()
        .email("Invalid Email Id")
        .required("Enter your registered Email Id!"),
});

function Forget() {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: async () => {},
        validationSchema: formSchema,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Forget Password";
    }, []);

    return (
        <>
            <div className="auth_desc col-md-7">
                <h2>Forget Password</h2>

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
                    className="forget"
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

                    <button type="submit" className="btn btn-auth">
                        Change
                    </button>

                    <div className="form-group">
                        <Link to="/auth/signup" className="link-auth">
                            Create Account !!!
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Forget;

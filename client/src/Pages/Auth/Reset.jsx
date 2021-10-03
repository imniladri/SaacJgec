import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object({
    pass: Yup.string()
        .min(8, "Password should be atleast 8 characters!")
        .required("Set a new password for your account!"),
    confpass: Yup.string()
        .oneOf([Yup.ref("pass"), null], "Password didn't matched!")
        .required("Confirm your new password!"),
});

function Reset() {
    const formik = useFormik({
        initialValues: {
            pass: "",
            confpass: "",
        },
        onSubmit: async () => {},
        validationSchema: formSchema,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Reset Password";
    }, []);

    return (
        <>
            <div className="auth_desc col-md-7">
                <h2>Reset Password</h2>

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
                    className="reset"
                    onSubmit={formik.handleSubmit}
                >
                    {/* New Password */}
                    <div className="form-group">
                        <label htmlFor="pass">
                            New Password <span>*</span>
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

                    {/* Confirm Password */}
                    <div className="form-group">
                        <label htmlFor="confpass">
                            Confirm Password <span>*</span>
                        </label>
                        <input
                            value={formik.values.confpass}
                            onChange={formik.handleChange("confpass")}
                            onBlur={formik.handleBlur("confpass")}
                            type="password"
                            id="confpass"
                            name="Confirm Password"
                            placeholder=" "
                            className={`form-control ${
                                formik.touched.confpass &&
                                formik.errors.confpass
                                    ? "invalid"
                                    : ""
                            }`}
                        />
                        <p>
                            {formik.touched.confpass && formik.errors.confpass}
                        </p>
                    </div>

                    <button type="submit" className="btn btn-auth">
                        Reset
                    </button>
                </form>
            </div>
        </>
    );
}

export default Reset;

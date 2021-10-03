import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const formSchema = Yup.object({
    fname: Yup.string().required("First Name is required!"),
    lname: Yup.string().required("Last Name is required!"),
    email: Yup.string()
        .email("Invalid Email Id")
        .required("Email Id is required!"),
    pass: Yup.string()
        .min(8, "Password should be atleast 8 characters!")
        .required("Create a password for your account!"),
    spec: Yup.string().required("Specialist is required!"),
    inst: Yup.string().required("Institute/Workplace is required!"),
    dept: Yup.string().required("Department is required!"),
    occu: Yup.string().required("Occupation is required!"),
    cont: Yup.number()
        .typeError("Must be a number!")
        .integer("Must be a integer!")
        .positive("Should be positive!")
        .min(10, "Enter a Valid Phone Number!")
        .max(10, "Enter a Valid Phone Number!")
        .required("Contact Number is required!"),

    //  Regx Expression for Phone Number
    /*
        phone: Yup.string()
        .matches(
            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
            "Not a Phone number"
        )
        .required("Required"),
    */
});

function Signup() {
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            email: "",
            pass: "",
            spec: "",
            inst: "",
            dept: "",
            occu: "",
            cont: "",
        },
        onSubmit: async () => {},
        validationSchema: formSchema,
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SAAC | Sign Up";
    }, []);

    return (
        <>
            <div className="auth_desc col-md-7">
                <h2>Sign Up</h2>

                <div className="my-4 px-3">
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
                    className="signup"
                    onSubmit={formik.handleSubmit}
                >
                    {/* Name */}
                    <div className="form-row mx-0">
                        <div className="form-group col-sm-6">
                            <label htmlFor="fname">
                                First Name <span>*</span>
                            </label>
                            <input
                                value={formik.values.fname}
                                onChange={formik.handleChange("fname")}
                                onBlur={formik.handleBlur("fname")}
                                type="text"
                                id="fname"
                                name="FName"
                                placeholder=" "
                                className={`form-control ${
                                    formik.touched.fname && formik.errors.fname
                                        ? "invalid"
                                        : ""
                                }`}
                            />
                            <p>{formik.touched.fname && formik.errors.fname}</p>
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="lname">
                                Last Name <span>*</span>
                            </label>
                            <input
                                value={formik.values.lname}
                                onChange={formik.handleChange("lname")}
                                onBlur={formik.handleBlur("lname")}
                                type="text"
                                id="lname"
                                name="LName"
                                placeholder=" "
                                className={`form-control ${
                                    formik.touched.lname && formik.errors.lname
                                        ? "invalid"
                                        : ""
                                }`}
                            />
                            <p>{formik.touched.lname && formik.errors.lname}</p>
                        </div>
                    </div>

                    {/* Email */}
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

                    <div className="form-row mx-0">
                        {/* Occupation */}
                        <div className="form-group col-sm-6">
                            <label htmlFor="occu">
                                Occupation <span>*</span>
                            </label>
                            <input
                                value={formik.values.occu}
                                onChange={formik.handleChange("occu")}
                                onBlur={formik.handleBlur("occu")}
                                type="text"
                                id="occu"
                                name="Occupation"
                                placeholder=" "
                                className={`form-control ${
                                    formik.touched.occu && formik.errors.occu
                                        ? "invalid"
                                        : ""
                                }`}
                            />
                            <p>{formik.touched.occu && formik.errors.occu}</p>
                        </div>

                        {/* Specialist */}
                        <div className="form-group col-sm-6">
                            <label htmlFor="spec">
                                Specialist <span>*</span>
                            </label>
                            <select
                                value={formik.values.spec}
                                onChange={formik.handleChange("spec")}
                                onBlur={formik.handleBlur("spec")}
                                id="spec"
                                name="Specialist"
                                className={`form-control ${
                                    formik.touched.spec && formik.errors.spec
                                        ? "invalid"
                                        : ""
                                }`}
                            >
                                <option></option>
                                <option value="astrodynamics">
                                    Astrodynamics
                                </option>
                                <option value="propulsion">Propulsion</option>
                                <option value="structural">Structural</option>
                                <option value="gnc">GNC</option>
                                <option value="communication">
                                    Communication
                                </option>
                                <option value="avionics">Avionics</option>
                                <option value="control">Control</option>
                                <option value="system software">
                                    System Software
                                </option>
                                <option value="fuel energy">
                                    Fuel & Energy
                                </option>
                            </select>
                            <p>{formik.touched.spec && formik.errors.spec}</p>
                        </div>
                    </div>

                    {/* Institute */}
                    <div className="form-group">
                        <label htmlFor="inst">
                            Institution / Workplace <span>*</span>
                        </label>
                        <input
                            value={formik.values.inst}
                            onChange={formik.handleChange("inst")}
                            onBlur={formik.handleBlur("inst")}
                            type="text"
                            id="inst"
                            name="Institution"
                            placeholder=" "
                            className={`form-control ${
                                formik.touched.inst && formik.errors.inst
                                    ? "invalid"
                                    : ""
                            }`}
                        />
                        <p>{formik.touched.inst && formik.errors.inst}</p>
                    </div>

                    <div className="form-row mx-0">
                        {/* Department */}
                        <div className="form-group col-sm-6">
                            <label htmlFor="dept">
                                Department <span>*</span>
                            </label>
                            <input
                                value={formik.values.dept}
                                onChange={formik.handleChange("dept")}
                                onBlur={formik.handleBlur("dept")}
                                type="text"
                                id="dept"
                                name="Department"
                                placeholder=" "
                                className={`form-control ${
                                    formik.touched.dept && formik.errors.dept
                                        ? "invalid"
                                        : ""
                                }`}
                            />
                            <p>{formik.touched.dept && formik.errors.dept}</p>
                        </div>

                        {/* Contact Number */}
                        <div className="form-group col-sm-6">
                            <label htmlFor="cont">
                                Contact No. <span>*</span>
                            </label>
                            <input
                                value={formik.values.cont}
                                onChange={formik.handleChange("cont")}
                                onBlur={formik.handleBlur("cont")}
                                type="text"
                                id="cont"
                                name="Contact"
                                placeholder=" "
                                className={`form-control ${
                                    formik.touched.cont && formik.errors.cont
                                        ? "invalid"
                                        : ""
                                }`}
                            />
                            <p>{formik.touched.cont && formik.errors.cont}</p>
                        </div>
                    </div>

                    {/* Password */}
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
                        Register
                    </button>

                    <div className="form-group">
                        <Link to="/auth/login" className="link-auth">
                            Already Registered?
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signup;

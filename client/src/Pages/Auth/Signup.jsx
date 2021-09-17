import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Signup() {
    useEffect(() => {
        document.title = "SAAC | Sign Up";
    }, []);

    return (
        <>
            <div className="auth_desc col-md-7">
                <h2>Sign Up</h2>

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

                <form id="auth_form" className="signup">
                    {/* Name */}
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="fname">
                                First Name <span>*</span>
                            </label>
                            <input
                                type="text"
                                id="fname"
                                name="FName"
                                className="form-control"
                                placeholder=" "
                                required
                            />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="lname">
                                Last Name <span>*</span>
                            </label>
                            <input
                                type="text"
                                id="lname"
                                name="LName"
                                className="form-control"
                                placeholder=" "
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
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

                    <div className="form-row">
                        {/* DOB */}
                        <div className="form-group col-sm-6">
                            <label htmlFor="dob">
                                DOB <span>*</span>
                            </label>
                            <input
                                type="date"
                                id="dob"
                                name="DOB"
                                className="form-control"
                                placeholder=" "
                                required
                            />
                        </div>

                        {/* OptionGrp */}
                        <div className="form-group col-sm-6">
                            <label htmlFor="specialist">
                                Specialist <span>*</span>
                            </label>
                            <select
                                className="form-select"
                                id="specialist"
                                name="Specialist"
                            >
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
                        </div>
                    </div>

                    {/* Institute */}
                    <div className="form-group">
                        <label htmlFor="inst">
                            Institution Name <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="inst"
                            name="Inst"
                            className="form-control"
                            placeholder=" "
                            required
                        />
                    </div>

                    {/* Department & Year */}
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="dept">
                                Department <span>*</span>
                            </label>
                            <input
                                type="text"
                                id="dept"
                                name="Dept"
                                className="form-control"
                                placeholder=" "
                                required
                            />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="year">
                                Year of Study <span>*</span>
                            </label>
                            <input
                                type="text"
                                id="year"
                                name="Year"
                                className="form-control"
                                placeholder=" "
                                required
                            />
                        </div>
                    </div>

                    {/* Contact Number */}
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="mob">
                                Mobile No. <span>*</span>
                            </label>
                            <input
                                type="text"
                                id="mob"
                                name="Mob"
                                className="form-control"
                                placeholder=" "
                                required
                            />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlFor="wapp">
                                Whatsapp No. <span>*</span>
                            </label>
                            <input
                                type="text"
                                id="wapp"
                                name="Wapp"
                                className="form-control"
                                placeholder=" "
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
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

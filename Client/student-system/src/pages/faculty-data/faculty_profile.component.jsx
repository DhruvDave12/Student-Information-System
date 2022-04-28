import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Form from "../../components/form/form.components";
import './faculty_profile.styles.css';

const FacultyProfile = () => {
    const param = useParams();
    const [faculty, setFaculty] = useState();
    const [facultyCourses, setFacultyCourses] = useState();

    useEffect(() => {
        const getFaculty = async () => {
            const res = await axios.get(`http://localhost:3000/faculty/${param.id}`);
            setFaculty(res.data.data[0]);
        }
        const getFacultyCourseData = async () => {
            const res = await axios.get(`http://localhost:3000/faculty/courses/${param.id}`)
            setFacultyCourses(res.data.data);
        }
        getFaculty();
        getFacultyCourseData();
    }, [])

    return (
        faculty ?
            <div className="faculty-profile">
                <form className="faculty-profile-wrap">
                    <div className="faculty-col-profile-wrap">
                        <div className="fname-div">
                            <Form label={"First Name"}
                                value={faculty.first_name}
                                type={"text"}
                                name={"first"} />
                        </div>
                        <div className="mname-div">
                            <Form label={"Middle Name"}
                                type={"text"}
                                value={faculty.middle_name}
                                name={"middle"} />
                        </div>
                        <div className="lname-div">
                            <Form label={"Last Name"}
                                type={"text"}
                                value={faculty.last_name}
                                name={"last"} />
                        </div>
                    </div>
                    <div className="faculty-col-form-wrap">
                        <div className="mail-div">
                            <Form label={"Faculty Id"}
                                type={"number"}
                                value={faculty.contact}
                                name={"facId"} />
                        </div>
                        <div className="phone-div">
                            <Form label={"Contact Number"}
                                type={"number"}
                                value={faculty.email}
                                name={"contact"} />
                        </div>
                    </div>
                </form>
            </div>
            :
            <div className="faculty__profile">
                Loading...
            </div>
    )
}

export default FacultyProfile;
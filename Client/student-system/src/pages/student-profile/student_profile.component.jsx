import React, { useEffect, useState } from "react";
import "./student-profile.styles.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "../../components/form/form.components";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
const StudentProfile = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState();
    const [internData, setInternData] = useState();
    const [curricularData, setCurricularData] = useState();

    const typeOfUser = localStorage.getItem('type');
    useEffect(() => {
        const getProfile = async () => {
            const res = await axios.get(`http://localhost:3000/student/${params.id}`);
            setStudent(res.data.data[0]);
        }
        const getInternData = async () => {
            const res = await axios.get(`http://localhost:3000/internship/${params.id}`);
            setInternData(res.data.data);
        }
        const getCurricular = async () => {
            const res = await axios.get(`http://localhost:3000/curricular/${params.id}`)
            setCurricularData(res.data.data);
        }
        getProfile();
        getInternData();
        getCurricular();
    }, [])

    const sendToEditPage = () => {
        navigate('/student/edit', {
            state: {
                student: student
            }
        })
    }

    const sendToInternPage = () => {
        navigate('/internship-dataform', {
            state: {
                student: student
            }
        })
    }

    const sendToCurricularPage = () => {
        navigate('/curricular-dataform', {
            state: {
                student: student
            }
        })
    }

    const sendToAcademicsPage = () => {
        navigate('/academics-dataform', {
            state: {
                student: student
            }
        })
    }

    const sendToAcademicDataPage = () => {
        navigate(`/academics/${params.id}`, {
            state: {
                student: student
            }
        })
    }

    return (
        student ?
            <div className="student-profile">
                <form className="student-profile-wrap">
                    <div className="student-col-profile-wrap">
                        <div className="fname-div">
                            <Form label={"First Name"}
                                type={"text"}
                                value={student.first_name}
                                name={"first"} />
                        </div>
                        <div className="mname-div">
                            <Form label={"Middle Name"}
                                type={"text"}
                                value={student.middle_name}
                                name={"middle"} />
                        </div>
                        <div className="lname-div">
                            <Form label={"Last Name"}
                                type={"text"}
                                name={"last"}
                                value={student.last_name} />
                        </div>
                    </div>
                    <div className="student-col-profile-wrap">
                        <div className="mail-div">
                            <Form label={"Student Id"}
                                type={"number"}
                                name={"stuId"}
                                value={student.student_id} />
                        </div>
                        <div className="phone-div">
                            <Form label={"Contact Number"}
                                type={"number"}
                                value={student.contact} />
                        </div>
                    </div>
                    <div className="student-col-profile-wrap">
                        <div className="dob-div">
                            <Form label={"Date of birth"}
                                type={"date"}
                                name={"dob"}
                                value={student.dob} />
                        </div>
                        <div className="major-div">
                            <Form label={"Major"}
                                type={"text"}
                                name={"major"}
                                value={student.major} />
                        </div>
                        <div className="batch-div">
                            <Form label={"Batch"}
                                type={"text"}
                                name={"batch"}
                                value={student.batch} />
                        </div>
                    </div>
                    <div className="student-profile-edit-div">
                        <Button onClickHandler={sendToEditPage}>Edit Details </Button>
                    </div>
                    <div className="student-other-input-div">
                        <div className="edit-intern-btn">
                            {
                                typeOfUser === "student" ?
                                    // <Link to={'/internship-dataform'}>Add Internship <br /></Link>
                                    <Button onClickHandler={sendToInternPage}>Add Internship </Button>
                                    :
                                    ""
                            }
                        </div>
                        <div className="edit-curricular-btn">
                            {
                                typeOfUser === "student" ?
                                    // <Link to={'/internship-dataform'}>Add Internship <br /></Link>
                                    <Button onClickHandler={sendToCurricularPage}>Add Curricular </Button>
                                    :
                                    ""
                            }
                        </div>
                        <div className="edit-academics-btn">
                            {
                                typeOfUser === "faculty" ?
                                    // <Link to={'/internship-dataform'}>Add Internship <br /></Link>
                                    <Button onClickHandler={sendToAcademicsPage}>Add Academics </Button>
                                    :
                                    <Button onClickHandler={sendToAcademicDataPage}>Show Academics </Button>
                            }
                        </div>
                    </div>
                </form>
            </div>
            :
            <div className="student__profile">
                LOADING...
            </div>
    )
}

export default StudentProfile;
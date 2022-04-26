import React, { useEffect, useState } from "react";
import "./student-profile.styles.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
    const params = useParams();
    const [student, setStudent] = useState();

    useEffect(() => {
        const getProfile = async () => {
            const res = await axios.get(`http://localhost:3000/student/${params.id}`);
            setStudent(res.data.data[0]);
        }
        getProfile();
    })

    return (
        student ? 
        <div className="student__profile">
            <p>{student.first_name}</p>
            <p>{student.middle_name}</p>
            <p>{student.last_name}</p>
            <p>{student.contact}</p>
            <p>{student.dob}</p>
            <p>{student.batch}</p>
            <p>{student.major}</p>
            <p>{student.email}</p>
            <p>{student.student_id}</p>

        </div>
        :
        <div className="student__profile">
            LOADING...
        </div>
    )
}

export default StudentProfile;
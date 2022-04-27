import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

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
        <div className="faculty__profile">
            <p>{faculty.first_name}</p>
            <p>{faculty.middle_name}</p>
            <p>{faculty.last_name}</p>
            <p>{faculty.contact}</p>
            <p>{faculty.email}</p>
            <br />
            <br />
            {
                facultyCourses ?
                <div>
                    <p>{facultyCourses.course_id}</p>
                    <p>{facultyCourses.credits}</p>
                    <p>{facultyCourses.semester}</p>
                </div>
                :
                <div>
                    PADAO BC!!
                </div>
            }

        </div>
        :
        <div className="faculty__profile">
            Loading...
        </div>
    )
}

export default FacultyProfile;
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const FacultyProfile = () => {
    const param = useParams();

    useEffect(() => {
        const getFaculty = async () => {
            const res = await axios.get(`http://localhost:3000/faculty/${param.id}`);
            console.log(res);
        }

        getFaculty();
    })
    return (
        <div className="faculty__profile">
            <h1>FACULTY PROFILE PAGE</h1>
        </div>
    )
}

export default FacultyProfile;
import axios from "axios";
import React, { useEffect } from "react";
import "./all_student.styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllStudents = () => {
    const [allStudents, setAllStudents] = useState([]);

    useEffect(() => {
        const getAllStudents = async () => {
            const res = await axios.get('http://localhost:3000/student/all');
            setAllStudents(res.data.data);
        }
        getAllStudents();
    }, []);

    return (
        <div className="all__students">
            {
                allStudents.length === 0 ? 
                <h1>No Student Data</h1>
                :
                <div>
                    {
                        allStudents.map(student => (
                            <Link to={`/student/${student.student_id}`}>
                                <div className="particular_student" >
                                    <p>{student.first_name}</p>
                                    <p>{student.middle_name}</p>
                                    <p>{student.last_name}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            }
        </div>
    )
}
export default AllStudents;
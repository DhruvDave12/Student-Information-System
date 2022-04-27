import axios from "axios";
import React, { useEffect } from "react";
import "./all_student.styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";

const AllStudents = () => {
    const navigate = useNavigate();
    const [allStudents, setAllStudents] = useState([]);

    useEffect(() => {
        const getAllStudents = async () => {
            const res = await axios.get('http://localhost:3000/student/all');
            setAllStudents(res.data.data);
        }
        getAllStudents();
    }, []);

    const handleDeleteStudent = async (id) => {
        await axios.post(`http://localhost:3000/faculty/delete/student/${id}`);
        navigate('/students/all');
        window.location.reload(false);
    }

    return (
        <div className="all__students">
            {
                allStudents.length === 0 ? 
                <h1>No Student Data</h1>
                :
                <div>
                    {
                        allStudents.map(student => (
                            <div>
                                <Link to={`/student/${student.student_id}`}>
                                    <div className="particular_student" >
                                        <p>{student.first_name}</p>
                                        <p>{student.middle_name}</p>
                                        <p>{student.last_name}</p>
                                    </div>
                                </Link>
                                <Button onClickHandler={() => {handleDeleteStudent(student.student_id)}}>Delete</Button>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}
export default AllStudents;
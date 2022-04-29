import axios from "axios";
import React, { useEffect, useState } from "react";
import "./all_faculty.styles.css";
import Button from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";

const AllFaculties = () => {
    const [faculties, setFaculties] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getAllFaculties = async () => {
            const res = await axios.get('http://localhost:3000/faculty/all');
            setFaculties(res.data.data);
        }

        getAllFaculties();
    })

    const handleViewFaculty = async (id) => {
        navigate(`/faculty/${id}`);
        window.location.reload(false);
    }

    return (
        <div className="all-faculties">
            {
                faculties.length === 0
                    ?
                    <h1>LOADING... (MAYBE NO FACULTIES)</h1>
                    :
                    <div className="all-faculty-outer-wrap">
                        <div className="all-faculty-title">
                            <p>ALL FACULTIES LIST</p>
                        </div>
                        <div className="all-faculty-inner-wrap">
                            {
                                faculties.map(faculty => (
                                    <div className="indi-faculty">
                                        <div className="indi-faculty-info">
                                            <p>{faculty.first_name} {faculty.middle_name} {faculty.last_name}</p>
                                        </div>
                                        <div className="indi-faculty-btn">
                                            <Button onClickHandler={() => { handleViewFaculty(faculty.faculty_id) }}>View</Button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default AllFaculties;
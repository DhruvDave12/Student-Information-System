import axios from "axios";
import React, { useEffect, useState } from "react";
import "./all_faculty.styles.css";
import { Link } from "react-router-dom";
const AllFaculties = () => {
    const [faculties, setFaculties] = useState([]);

    useEffect(() => {
        const getAllFaculties = async () => {
            const res = await axios.get('http://localhost:3000/faculty/all');
            setFaculties(res.data.data);
        }

        getAllFaculties();
    })
    return (
        faculties.length === 0 ? 
        <div className="all__faculties">
            LOADING... (MAYBE NO FACULTIES)
        </div>
        :
        <div className="all__faculties">
            {
                faculties.map(faculty => (
                    <Link to={`/faculty/${faculty.faculty_id}`}>
                        <div className="particular__faculty">
                            <p>{faculty.first_name}</p>
                            <p>{faculty.middle_name}</p>
                            <p>{faculty.last_name}</p>
                            <p>{faculty.contact}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default AllFaculties;
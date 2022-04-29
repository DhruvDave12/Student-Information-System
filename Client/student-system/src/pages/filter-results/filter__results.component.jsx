import React from "react";
import "./filter__results.styles.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const FilterResults = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { state } = location;
    const dataVar = state.data;
    const type = state.type;
    // console.log(state.data);
    return (
        <div className="filter__results">
            {
                dataVar.map(item => (
                    <div className="particular_data" onClick={() => {type === "student" ? navigate(`/student/${item.student_id}`) : navigate(`/faculty/${item.faculty_id}`)}}>
                        <p>{item.first_name} {item.middle_name} {item.last_name}</p>
                        <p>{item.email}</p>
                        <p>{item.contact}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default FilterResults;
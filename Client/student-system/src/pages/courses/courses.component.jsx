import axios from "axios";
import React, { useEffect, useState } from "react";
import "./courses.styles.css";

const Courses = () => {
    const [courses,setCourses] = useState([]);

    useEffect(() => {
        const getAllCourses = async () => {
            const res = await axios.get('http://localhost:3000/courses/all');
            setCourses(res.data.data);
        }

        getAllCourses();
    })

    return (
        <div className="course__page">
            {
                courses.map(item => (
                    <div className="course__particular">
                        <p>{item.faculty_id}</p>
                        <p>{item.course_id}</p>
                        <p>{item.semester}</p>
                        <p>{item.credits}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Courses;
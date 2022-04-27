import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./particular_academics.styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
const ParticularAcademic = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [academic, setAcademic] = useState();
    const typeOfUser = localStorage.getItem('type');
    useEffect(() => {
        const getAcademic = async () => {
            const res = await axios.get(`http://localhost:3000/academics/data/${params.id}`);
            setAcademic(res.data.data[0]);
        }
        getAcademic();
    }, [])

    const handleClick = () => {
        navigate('/academics/edit', {
            state: {
                academic: academic
            }
        })
    }
    
    return (
        academic ? 
        <div className="particular__academic">
            <p>{academic.student_id}</p>
            <p>{academic.backlog}</p>
            <p>{academic.current_cpi}</p>
            <p>{academic.spi}</p>
            {
                typeOfUser === "faculty" ?
                <Button onClickHandler={handleClick}>Edit Academics</Button>
                :
                ""
            }
        </div>
        :
        <div className="particular__academic">
            LOADING....
        </div>
    )
}

export default ParticularAcademic;
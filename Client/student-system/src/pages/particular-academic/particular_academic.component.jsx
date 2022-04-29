import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./particular_academics.styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";
import Form from "../../components/form/form.components";

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
            <div className="particular-academic">
                <form className="particular-academic-wrap">
                    <div className="particular-academic-col-wrap">
                        <div className="id-div">
                            <Form label={"Student Id"}
                                type={"number"}
                                name={"stuId"}
                                value={academic.student_id} />
                        </div>
                        <div className="back-div">
                            <Form label={"Backlog"}
                                type={"text"}
                                value={academic.backlog}
                                name={"back"} />
                        </div>
                    </div>
                    <div className="particular-academic-col-wrap">
                        <div className="cpi-div">
                            <Form label={"Current CPI"}
                                type={"number"}
                                step={"any"}
                                value={academic.current_cpi}
                                name={"cpi"} />
                        </div>
                        <div className="spi-div">
                            <Form label={"SPI"}
                                type={"number"}
                                step={"any"}
                                name={"spi"}
                                value={academic.spi} />
                        </div>
                    </div>
                    {
                        typeOfUser === "faculty" ?
                        <div className="particular-academic-btn">
                            <Button onClickHandler={handleClick}>Edit Academics</Button>
                        </div>
                        :
                        ""
                    }
                </form>
            </div>
            :
            <div className="particular__academic">
                LOADING....
            </div>
    )
}

export default ParticularAcademic;
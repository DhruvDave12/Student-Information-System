import React, { useState } from "react";
import axios from "axios";
import "./curricular_filter.styles.css";
import Form from "../../form/form.components";
import Button from "../../button/button.component";
import { useNavigate } from "react-router-dom";

const CurricularFilter = () => {
    const navigate = useNavigate();
    const [cpi, setCPI] = useState('');
    const [clubs, setClubs] = useState('');
    const [events, setEvents] = useState('');

    // const [student, setStudent] = useState([]);
    const handleSubmit = async (e) => {

        e.preventDefault();
        const res = await axios.post('http://localhost:3000/filter/curricular', {
            cpi,
            clubs,
            events
        })
        // setStudent(res.data.data);
        navigate('/filter/results', {
            state: {
                data: res.data.data,
                type: "student"
            }
        })
    }

  return (
    <div className="curricular__filter">
        <form>
        <Form
        label={"CPI"}
        name="cpi"
        placeholder={"CPI"}
        type="text"
        setterFunction={setCPI}
      />
      <Form
        label={"Clubs"}
        name="clubs"
        placeholder={"Clubs"}
        type="text"
        setterFunction={setClubs}
      />
      <Form
        label={"Events"}
        name="events"
        placeholder={"Events"}
        type="text"
        setterFunction={setEvents}
      />
      <Button onClickHandler={handleSubmit}>FIND</Button>
        </form>
      
    </div>
  );
};

export default CurricularFilter;

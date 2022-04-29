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
    <div className="filter-curricular">
      <form className="curricular-filter-form-wrap">
        <div className="filter-curricular-field">
          <div className="single-field">
            <Form
              label={"CPI"}
              name="cpi"
              placeholder={"CPI"}
              type="text"
              setterFunction={setCPI} />
          </div>
          <div className="single-field">
            <Form
              label={"Clubs"}
              name="clubs"
              placeholder={"Colubs"}
              type="text"
              setterFunction={setClubs} />
          </div>
          <div className="single-field">
            <Form
              label={"Events"}
              name="events"
              placeholder={"Events"}
              type="text"
              setterFunction={setEvents} />
          </div>
        </div>
        <div className="find-btn">
          <Button onClickHandler={handleSubmit}>FIND</Button>
        </div>
      </form>
    </div>
  );
};

export default CurricularFilter;

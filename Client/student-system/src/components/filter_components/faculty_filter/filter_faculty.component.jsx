import React, { useEffect, useState } from "react";
import "./filter_faculty.styles.css";
import Form from "../../form/form.components";
import axios from "axios";
import Button from "../../button/button.component";
import { useNavigate } from "react-router-dom";
const FilterFaculty = () => {
  const navigate = useNavigate();
  const [credit, setCredits] = useState("");
  const [semester, setSemester] = useState("");
  const [course, setCourse] = useState("");
  // const [faculty, setFaculty] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/filter/faculty", {
      credit,
      semester,
      course,
    });
    // console.log(res.data.data);
    navigate('/filter/results', {
      state: {
        data: res.data.data,
        type: "faculty"
      }
    })
  };

  return (
    <div className="filter-faculty">
      <form className="faculty-filter-form-wrap">
        <div className="filter-faculty-field">
          <div className="single-field">
            <Form
              label={"Credits"}
              name="credit"
              placeholder={"Credits"}
              type="text"
              setterFunction={setCredits} />
          </div>
          <div className="single-field">
            <Form
              label={"Course Name"}
              name="courseName"
              placeholder={"Course Name"}
              type="text"
              setterFunction={setCourse} />
          </div>
          <div className="single-field">
            <Form
              label={"Semester"}
              name="semester"
              placeholder={"Semester"}
              type="text"
              setterFunction={setSemester} />
          </div>
        </div>
        <div className="find-btn">
          <Button onClickHandler={handleSubmit}>FIND</Button>
        </div>
      </form>
    </div>
  );
};

export default FilterFaculty;

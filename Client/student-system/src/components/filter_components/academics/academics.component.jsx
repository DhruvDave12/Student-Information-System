import React from "react";
import "./academics.styles.css";
import { useState } from "react";
import axios from "axios";
import Form from "../../form/form.components";
import Button from "../../button/button.component";
import { useNavigate } from "react-router-dom";
const AcademicFilter = () => {
    const navigate = useNavigate();

  const [backlog, setBacklog] = useState("");

//   const [student, setStudent] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/filter/academics", {
      backlog,
    });
    // setStudent(res.data.data);
    navigate('/filter/results', {
        state: {
            data: res.data.data,
            type: "student"
        }
    })
  };

  return (
    <div className="academic__filter">
      <form>
        <Form
          label={"Backlog"}
          name="backlog"
          placeholder={"type YES or NO"}
          type="text"
          setterFunction={setBacklog}
        />

        <Button onClickHandler={handleSubmit}>FIND</Button>
      </form>
    </div>
  );
};

export default AcademicFilter;

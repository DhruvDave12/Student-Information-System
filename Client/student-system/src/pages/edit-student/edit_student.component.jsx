import React, { useState } from "react";
import "./edit-student.styles.css";
import { useLocation } from "react-router-dom";
import Button from "../../components/button/button.component";
import Form from "../../components/form/form.components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditStudentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const [firstName, setFirstName] = useState(state.student.first_name);
  const [middleName, setMiddleName] = useState(state.student.middle_name);
  const [lastName, setLastName] = useState(state.student.last_name);
  const [dob, setDOB] = useState(state.student.dob);
  const [batch, setBatch] = useState(state.student.batch);
  const [major, setMajor] = useState(state.student.major);
  const [contact, setContact] = useState(state.student.contact);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(`http://localhost:3000/student/update/${state.student.student_id}`, {
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName,
      contact: contact,
      major: major,
      dob: dob,
      batch: batch,
      email: state.student.email
    })
    navigate(`/student/${state.student.student_id}`);
  };
  return (
    <div className="edit-student">
      <form className="edit-student-wrap">
        <p className="student-heading">EDIT STUDENT (PERSONAL) DETAILS</p>
        <div className="student-col-edit">
          <div className="fname-div">
            <Form label={"First Name"}
              type={"text"}
              defaultValue={state.student.first_name}
              name={"first"}
              setterFunction={setFirstName} />
          </div>
          <div className="mname-div">
            <Form label={"Middle Name"}
              type={"text"}
              defaultValue={state.student.middle_name}
              name={"middle"}
              placeholder={"put 'NULL' if none"}
              setterFunction={setMiddleName} />
          </div>
          <div className="lname-div">
            <Form label={"Last Name"}
              type={"text"}
              name={"last"}
              defaultValue={state.student.last_name}
              setterFunction={setLastName} />
          </div>
        </div>
        <div className="student-col-edit">
          <div className="mail-div">
            <Form label={"Student Id"}
              type={"number"}
              name={"stuId"}
              value={state.student.student_id} />
          </div>
          <div className="phone-div">
            <Form label={"Contact Number"}
              type={"number"}
              name={"contact"}
              defaultValue={state.student.contact}
              setterFunction={setContact} />
          </div>
        </div>
        <div className="student-col-edit">
          <div className="dob-div">
            <Form label={"Date of birth"}
              type={"date"}
              name={"dob"}
              defaultValue={state.student.dob}
              setterFunction={setDOB} />
          </div>
          <div className="major-div">
            <Form label={"Major"}
              type={"text"}
              name={"major"}
              defaultValue={state.student.major}
              placeholder={"CSE / IT"}
              setterFunction={setMajor} />
          </div>
          <div className="batch-div">
            <Form label={"Batch"}
              type={"text"}
              name={"batch"}
              defaultValue={state.student.batch}
              placeholder={"20XX - 20XX"}
              setterFunction={setBatch} />
          </div>
        </div>
        <div className="student-edit-btn">
          <Button onClickHandler={handleSubmit}>Edit </Button>
        </div>
      </form>
    </div>
  );
};

export default EditStudentPage;

import React, { useState } from "react";
import "./edit-student.styles.css";
import { useLocation } from "react-router-dom";
import Button from "../../components/button/button.component";
import EditForm from "../../components/editInputContainer/editInputContainer.component";
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

    const res = await axios.post(`http://localhost:3000/student/update/${state.student.student_id}`,{
        first_name: firstName,
        last_name: lastName,
        middle_name: middleName,
        contact: contact,
        major: major,
        dob: dob,
        batch: batch,
        email: state.student.email
    })
    console.log(res);
    navigate(`/student/${state.student.student_id}`);
  };
  return (
    <div className="edit__student">
      <form>
        <EditForm
          defaultValue={state.student.first_name}
          name={"firstName"}
          label={"First Name"}
          setterFunction={setFirstName}
          type="text"
        />
        <EditForm
          defaultValue={state.student.middle_name}
          name={"middleName"}
          label={"Middle Name"}
          setterFunction={setMiddleName}
          type="text"
        />
        <EditForm
          defaultValue={state.student.last_name}
          name={"lastName"}
          label={"Last Name"}
          setterFunction={setLastName}
          type="text"
        />
        <EditForm
          defaultValue={state.student.contact}
          name={"contact"}
          label={"Contact"}
          setterFunction={setContact}
          type="text"
        />
        <EditForm
          defaultValue={state.student.dob}
          name={"DOB"}
          label={"DOB"}
          setterFunction={setDOB}
          type="date"
        />
        <EditForm
          defaultValue={state.student.batch}
          name={"batch"}
          label={"Batch"}
          setterFunction={setBatch}
          type="text"
        />
        <EditForm
          defaultValue={state.student.major}
          name={"major"}
          label={"Major"}
          setterFunction={setMajor}
          type="text"
        />

        <Button onClickHandler={handleSubmit}>EDIT</Button>
      </form>
    </div>
  );
};

export default EditStudentPage;

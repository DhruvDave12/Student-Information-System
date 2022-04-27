import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./edit-academics.styles.css";
import Button from "../../components/button/button.component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EditForm from "../../components/editInputContainer/editInputContainer.component";
const EditAcademics = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const [backlog, setBackLog] = useState(state.academic.backlog);
  const [cpi, setCPI] = useState(state.academic.current_cpi);
  const [spi, setSPI] = useState(state.academic.spi);

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3000/academics/update/${state.academic.student_id}`,{
        backlog,
        cpi,
        spi
    });
    navigate(`/academics/${state.academic.student_id}`);
  };

  return (
    <div className="edit__academics">
      <form>
      <EditForm
          defaultValue={state.academic.backlog}
          name={"backlog"}
          label={"Backlog"}
          setterFunction={setBackLog}
          type="text"
        />
        <EditForm
          defaultValue={state.academic.current_cpi}
          name={"cpi"}
          label={"CPI"}
          setterFunction={setCPI}
          type="text"
        />
        <EditForm
          defaultValue={state.academic.spi}
          name={"spi"}
          label={"SPI"}
          setterFunction={setSPI}
          type="text"
        />

        <Button onClickHandler={handleClick}>Edit</Button>
      </form>
    </div>
  );
};

export default EditAcademics;

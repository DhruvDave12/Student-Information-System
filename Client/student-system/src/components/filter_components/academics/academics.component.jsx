import React from "react";
import "./academics.styles.css";
import { useState } from "react";
import axios from "axios";
import Form from "../../form/form.components";
import Button from "../../button/button.component";
import { useNavigate } from "react-router-dom";
import SelectDropDown from "../../select/select.component";
const AcademicFilter = () => {
  const navigate = useNavigate();

  const [backlog, setBacklog] = useState("");
  const [cpi, setCPI] = useState();
  const [spi, setSPI] = useState();
  const [quantityCPI, setQuantityCPI] = useState("equal");
  const [quantitySPI, setQuantitySPI] = useState("equal");

  //   const [student, setStudent] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/filter/academics", {
      backlog,
      cpi,
      spi,
      quantityCPI,
      quantitySPI,
    });
    // setStudent(res.data.data);
    navigate("/filter/results", {
      state: {
        data: res.data.data,
        type: "student",
      },
    });
  };
  return (
    <div className="academic__filter">
      <form>
        <div className="first__field__academic">
          <Form
            label={"Backlog"}
            name="backlog"
            placeholder={"type YES or NO"}
            type="text"
            setterFunction={setBacklog}
          />
        </div>
        {/* <SelectDropDown setterFunction={setQuantityCPI} /> */}

        <div className="select__container">
          <div className="select_field">
            <div className="select_form">
              <label htmlFor="quantity" className="select_label">
                CPI Quantity
              </label>
              <select
                classname="select_input"
                onChange={(e) => {
                  setQuantityCPI(e.target.value);
                }}
              >
                <option value="equal">Equal To</option>
                <option value="greater">Greater Than</option>
                <option value="less">Less Than</option>
              </select>
            </div>
          </div>
          
          <div className="cpi__field">
            <Form
              label={"CPI"}
              name="cpi"
              placeholder={"9.00"}
              type="text"
              setterFunction={setCPI}
            />
          </div>
        </div>

        <div className="select__container">
          <div className="select_field">
            <div className="select_form">
              <label htmlFor="quantity" className="select_label">
                SPI Quantity
              </label>
              <select
                classname="select_input"
                onChange={(e) => {
                  setQuantitySPI(e.target.value);
                }}
              >
                <option value="equal">Equal To</option>
                <option value="greater">Greater Than</option>
                <option value="less">Less Than</option>
              </select>
            </div>
          </div>
          <div className="cpi__field">
            <Form
              label={"SPI"}
              name="spi"
              placeholder={"9.10"}
              type="text"
              setterFunction={setSPI}
            />
          </div>
        </div>
        <div className="final__btn">
          <Button onClickHandler={handleSubmit}>FIND</Button>
        </div>
      </form>
    </div>
  );
};

export default AcademicFilter;

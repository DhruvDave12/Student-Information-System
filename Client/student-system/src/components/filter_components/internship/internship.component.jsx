import React from "react";
import "./internship.styles.css";
import { useState } from "react";
import axios from "axios";
import Form from "../../form/form.components";
import Button from "../../button/button.component";
import { useNavigate } from "react-router-dom";

const InternshipFilter = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");
  const [positon, setPosition] = useState("");
  const [cpi, setCPI] = useState("");
  const [quantityCPI, setQuantityCPI] = useState("equal");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/filter/internship", {
      company,
      duration,
      positon,
      cpi,
      quantityCPI,
    });

    navigate("/filter/results", {
      state: {
        data: res.data.data,
        type: "student",
      },
    });
  };
  return (
    <div className="filter-internship">
      <form className="internship-filter-form-wrap">
        <div className="filter-internship-field">
          <div className="single-field">
            <Form
              label={"Company Name"}
              name="companyName"
              placeholder={"Company Name"}
              type="text"
              setterFunction={setCompany} />
          </div>
          <div className="single-field">
            <Form
              label={"Duration"}
              name="duration"
              placeholder={"Duration"}
              type="text"
              setterFunction={setDuration} />
          </div>

          <div className="single-field">
            <Form
              label={"Position"}
              name="position"
              placeholder={"Position"}
              type="text"
              setterFunction={setPosition}
            />
          </div>
        </div>

        <div className="select-container">
          <div className="select-field">
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
          <div className="single-field-01">
            <Form
              label={"CPI"}
              name="cpi"
              placeholder={"CPI"}
              type="text"
              setterFunction={setCPI}
            />
          </div>
        </div>
        <div className="find-btn">
          <Button onClickHandler={handleSubmit}>FIND</Button>
        </div>
      </form>
    </div>
  );
};

export default InternshipFilter;

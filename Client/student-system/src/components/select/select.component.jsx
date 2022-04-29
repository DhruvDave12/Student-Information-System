import React from "react";
import "./select.styles.css";

const SelectDropDown = ({ setterFunction }) => {
  <div className="select_field">
    <div className="select_form">
      <label htmlFor="quantity" className="select_label">
        Quantity
      </label>
      <select
        classname="select_input"
        onChange={(e) => {
          setterFunction(e.target.value);
        }}
      >
        <option value="equal">Equal To</option>
        <option value="greater">Greater Than</option>
        <option value="less">Less Than</option>
      </select>
    </div>
  </div>
};

export default SelectDropDown;

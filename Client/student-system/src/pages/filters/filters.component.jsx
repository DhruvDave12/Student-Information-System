import React, { useState } from "react";
import "./filters.styles.css";
import FilterFaculty from "../../components/filter_components/faculty_filter/filter_faculty.component";
import CurricularFilter from "../../components/filter_components/curricular/curricular_filter.component";
import AcademicFilter from "../../components/filter_components/academics/academics.component";
import InternshipFilter from "../../components/filter_components/internship/internship.component";
import Button from "../../components/button/button.component";

const Filters = () => {
  const [currCom, setCurrCom] = useState();
  const mapComponents = [
    { component: <FilterFaculty />, title: "Faculty", id: 1 },
    { component: <CurricularFilter />, title: "Curricular", id: 2 },
    { component: <AcademicFilter />, title: "Academic", id: 3 },
    { component: <InternshipFilter />, title: "Internship", id: 4 },
  ];

  const handleClick = (component) => {
    setCurrCom(component);
  }
  return (
    <div className="filters__page">
      <div className="display-filter-form">
        <p className="filter-title">FILTERS PAGE</p>
        {
          currCom ? currCom : <p className="filter-subtitle">PLEASE CHOOSE A CATEGORY FROM BELOW</p>
        }
      </div>

      <div className="filter-scroller">
        {
          mapComponents.map(item => (
            <div className="particular__filter__title" onClick={() => { handleClick(item.component) }}>
              {/* <p>{item.title}</p> */}
              <Button>{item.title}</Button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Filters;

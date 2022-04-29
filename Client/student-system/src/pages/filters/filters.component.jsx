import React from "react";
import "./filters.styles.css";
import FilterFaculty from "../../components/filter_components/faculty_filter/filter_faculty.component";
import CurricularFilter from "../../components/filter_components/curricular/curricular_filter.component";
import AcademicFilter from "../../components/filter_components/academics/academics.component";
import InternshipFilter from "../../components/filter_components/internship/internship.component";

const Filters = () => {
    return (
        <div className="filters__page">
            <h1>FILTERS PAGE</h1>
             
             <FilterFaculty />
             <CurricularFilter />
             <AcademicFilter />
             <InternshipFilter />
        </div>
    )   
}

export default Filters;
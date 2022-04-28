import React from "react";
import "./filters.styles.css";
import FilterFaculty from "../../components/filter_components/faculty/filter_faculty.component";

const Filters = () => {
    return (
        <div className="filters__page">
            <h1>FILTERS PAGE</h1>
             
             <FilterFaculty />
        </div>
    )   
}

export default Filters;
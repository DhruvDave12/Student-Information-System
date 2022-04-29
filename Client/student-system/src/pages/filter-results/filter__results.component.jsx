import React from "react";
import "./filter__results.styles.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button.component";

const FilterResults = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;
  const dataVar = state.data;
  const type = state.type;

  const handleClick = (id) => {
      if(type === "student"){
          navigate(`/student/${id}`);
      } else if(type === "faculty"){
          navigate(`/faculty/${id}`);
      }
  }

  return (
    <div className="filter__results">
      {dataVar.length === 0 ? (
        <h1>No individual matches the query</h1>
      ) : (
        <div className="filter__results__outer__wrap">
            <div className="filter__result__title">
                {
                    type === "faculty" ? <p>All Faculty List</p> : <p>All Student List</p>
                }
            </div>
          <div className="filter__result__inner__wrap">
            {dataVar.map((item) => (
              <div
                className="indi_data"
                onClick={() => {
                  type === "student"
                    ? navigate(`/student/${item.student_id}`)
                    : navigate(`/faculty/${item.faculty_id}`);
                }}
              >
                  <div className="indi__info">
                        <p>
                        {item.first_name} {item.middle_name} {item.last_name}
                        </p>
                  </div>
                    <div className="indi__btn">
                        {
                            type === "student" ? 
                            <Button onClickHandler={() => {handleClick(item.student_id)}}>View</Button>
                            :
                            <Button onClickHandler={() => {handleClick(item.faculty_id)}}>View</Button>
                        }
                    </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterResults;

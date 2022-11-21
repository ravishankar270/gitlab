import React, { useEffect } from "react";
import SearchBar from "material-ui-search-bar";
import "./IssueComponent.css";
import { useNavigate } from "react-router-dom";
import LabelComponent from "../shared/Labels/LabelComponent";
import AvatarComponent from "../Avatar/AvatarComponent";
export default function IssueComponent({
  title,
  id,
  labels,
  createdat,
  author,
  assignees,
  updatedat,
  weight
}) {
  const navigate = useNavigate();
  const viewDetails = () => {
    navigate(`/issueDetails/${id}`);
  };
  // useEffect(() => {
  //   console.log(labels);
  // }, []);

  const calculate = (date) => {
    const date1 = new Date();
    const date2 = new Date(date);
    let total_seconds = Math.abs(date2 - date1) / 1000;
    let days_difference = Math.floor(total_seconds / (60 * 60 * 24));
    return days_difference;
  };
  return (
    <>
    <div className="h d-flex justify-content-between">
      <div className="holder" onClick={viewDetails}>
        <div style={{ display: "flex" }}>
          <h5>{title}</h5>
        </div>
        <div className="d-flex justify-content-between align-items-start">
          <p>icon</p>
          <p className="text-muted">
            #1310 - created {calculate(createdat)} day ago by {author}
          </p>
          <div className="d-flex justify-content-center align-items-start">
          <img  width='15px' height='15px' src="https://img.icons8.com/material-outlined/15/null/weight.png"/>
          <p className="text-muted" style={{fontSize:'12px'}}>{weight}</p>
          </div>
          {labels.map((label) => {
            return <LabelComponent key={label.id} type={label.title} color={label.color} />;
          })}
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-evenly">
        {assignees.map((a)=>{
       
        return <AvatarComponent img={a.avatarUrl} width={12} height={12} />})}
        </div>
        
        <p className="text-muted" style={{fontSize:'12px'}}>Updated {calculate(updatedat)} days ago </p>
      </div>
      </div>
      <hr />
    </>
  );
}

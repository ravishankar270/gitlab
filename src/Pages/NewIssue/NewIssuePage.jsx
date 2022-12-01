import { TextField } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import DropDownComponent from "../../components/DropDown/DropDownComponent";
import './NewIssuePage.scss'

function NewIssuePage() {
  const navigate=useNavigate()
  return (
    <>
      <div  className="newissue">
        <div>
          <DropDownComponent name={"assignees"} />
          <DropDownComponent name={"Epic"} />
          <DropDownComponent name={"Labels"} />
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Create Issue</button>
            <button className="btn btn-secondary" onClick={()=>navigate('/')}>Close</button>
          </div>
        </div>
        <div className="fields">
          <TextField
            id="outlined-weight-input"
            label="weight"
            type="text"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-duedate-input"
            label="Due Date"
            type="text"
            autoComplete="current-password"
          />
        </div>
      </div>
    </>
  );
}

export default NewIssuePage;

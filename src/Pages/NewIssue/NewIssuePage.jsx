import React from "react";
import DropDownComponent from "../../components/DropDown/DropDownComponent";

function NewIssuePage() {
  return (
    <>
      <div>
        
        <div>
          <DropDownComponent name={"assignees"} />
          <DropDownComponent name={"Epic"} />
          <DropDownComponent name={"Labels"} />
          <div className="d-flex">
            <button className="btn btn-primary">Create Issue</button>
            <button className="btn btn-secondary">Close Issue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewIssuePage;

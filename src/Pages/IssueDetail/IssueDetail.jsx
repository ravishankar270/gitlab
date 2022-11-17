import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import LogoComponent from "../../components/shared/Logo/LogoComponent";
import AvatarComponent from "../../components/Avatar/AvatarComponent";
import LabelComponent from "../../components/shared/Labels/LabelComponent";

function IssueDetail({ auth }) {
  const issues = useSelector((state) => state.issues.issues);
  const { id } = useParams();

  const calculate = (date) => {
    const date1 = new Date();
    const date2 = new Date(date);
    let total_seconds = Math.abs(date2 - date1) / 1000;
    let days_difference = Math.floor(total_seconds / (60 * 60 * 24));
    return days_difference;
  };

  return (
    <>
    <div className="d-flex ">
      <div style={{width:'80%'}}>
      <div >
        <h5>Content to be filled</h5>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <div
            className="d-flex justify-content-between"
            style={{ width: "50%" }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#b3ffc7",
                padding: "5px",
                borderRadius: "20%",
              }}
            >
              <img src="https://img.icons8.com/fluency-systems-regular/18/null/opened-folder.png" />
              <span>Open</span>
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "80%" }}
            >
              <img src="https://img.icons8.com/sf-ultralight/25/null/magazine.png" />
              <span>
                Issue created {calculate(issues[Number(id)].createdAt)} day ago
                by
              </span>
              <LogoComponent />
              <h5>{issues[Number(id)].author.name}</h5>
            </div>
          </div>
          <button className="btn btn-primary">Close issue</button>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-start align-items-start ">
        <h5>{issues[Number(id)].title}</h5>
        <h4>DESCRIPTION</h4>
        <p className="text-left">{issues[id].description}</p>
      </div>
      </div>
      <div style={{borderLeft:'.1px solid grey',marginLeft:'10px',width:'20%'}}>
              <div style={{marginLeft:'20px'}}>
                <h5>Assignee</h5>
                {issues[Number(id)].assignees.nodes.map(node=>{
                return (<><AvatarComponent img={node.avatarUrl} width={25} height={25}/><p>{node.name}</p></>)
                })}
              </div>
                <hr/>
                <div style={{marginLeft:'20px'}}>
                <h5>Labels</h5>
                {issues[Number(id)].labels.nodes.map(node=>{
                return (<LabelComponent type={node.title} color={node.color}/>)
                })}
              </div>
              <hr/>
              <div style={{marginLeft:'20px'}}>
                <h5>Weight</h5>
                <span>{issues[Number(id)].weight}</span>
              </div>
      </div>
      
      </div>
    </>
  );
}

export default IssueDetail;

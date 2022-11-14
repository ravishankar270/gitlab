import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IssueComponent from "../../components/Issue/IssueComponent";
import { getIssues } from "../../store/actions/issueAction";
import './IssuePage.css'
import SearchBar from "material-ui-search-bar";

const IssuePage=()=> {
  const issues=useSelector(state=>state.issues.issues)
  const [style,setStyle]=useState('cont')
  const [type,setType]=useState('open')
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getIssues())
    
  },[])

  useEffect(()=>{
    console.log(issues)
  },[issues])


  const viewIssues=(num)=>{
    setType(num)
  }
  
  return (
    <>
    <div>
      <h5>Content to be filled</h5>
      <hr />
      <div className="types">
        <div className="subtypes">
        <div className="ty" >
          <p id="n"  className={type==='open'?"cont":''} onClick={()=>viewIssues('open')}>Open</p>
          (305)
        </div>
        <div className="ty">
          <p id="n"  className={type==='closed'?"cont":''} onClick={()=>viewIssues('closed')}>Closed</p>
            (1002)
        </div>
        <div className="ty">
          <p id="n" className={type==='all'?"cont":''} onClick={()=>viewIssues('all')}>All</p>
          (1307)
        </div>
        </div>
        <button className="btn btn-primary">New issue</button>
      </div>
      <hr/>
    </div>
    <SearchBar
    value={''}
    onChange={(newValue) => this.setState({ value: newValue })}
    onRequestSearch={() =>{}}

  />
  <hr/>
    {issues.map((issue)=>{
      if(type==='all'){
        return <IssueComponent title={issue.title}  />
      }
      if(issue.state===type){
    return <IssueComponent title={issue.title}  />
      }
  }
    )}
    </>
  );
}

export default IssuePage;

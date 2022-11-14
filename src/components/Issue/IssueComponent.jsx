import React from 'react'
import SearchBar from "material-ui-search-bar";
import './IssueComponent.css'
export default function IssueComponent({title,type}) {
  return (
    <>
    
  <div className='holder'>
    <div style={{display:'flex'}}>
    <h5>{title}</h5>
    <span>0 of 3 checklist items completed</span>
    </div>
    <div style={{display:'flex'}}>
      <p>icon</p>
      <p>#1310 - created 1 day ago by Meg Powell</p>
      <i>Icon Backlog</i>
    </div> 
  </div>
  <hr/>
  </>
  )
}
 
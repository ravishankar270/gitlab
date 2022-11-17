import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IssueComponent from "../../components/Issue/IssueComponent";
import { getClosedIssues, getIssues } from "../../store/actions/issueAction";
import "./IssuePage.css";
import SearchBar from "material-ui-search-bar";
import { getOpenIssues } from "../../store/actions/issueAction";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import SortingComponent from "../../components/Sorting/SortingComponent";
import { Link } from "react-router-dom";

const IssuePage = (i) => {
  const data = useSelector((state) => state.issues.issues);
  const [issuesData,setIssuesData]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const [currentRecords1,setCurrentRecords1]=useState([])
  const [type, setType] = useState("open");
  // const [disPrev,setDisPrev]=useState('')
  // const [disNext,setDisNext]=useState('')
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords=issuesData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  )
  useEffect(()=>{
    setCurrentRecords1(issuesData.slice(
      indexOfFirstRecord,
      indexOfLastRecord
    ))
  },[currentRecords])
  
  
  const nPages = Math.ceil(issuesData.length / recordsPerPage);
  
  const updateIssues = (data) =>{
    setIssuesData(data)
    setCurrentRecords1(issuesData.slice(
      indexOfFirstRecord,
      indexOfLastRecord
    ))
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOpenIssues());
  }, []);

  useEffect(() => {
    setIssuesData(data)
  }, [data]);

  const viewIssues = (type) => {
    setType(type);
    if (type === "closed") {
      dispatch(getClosedIssues());
    } else if (type === "all") {
      dispatch(getIssues());
    } else {
      dispatch(getOpenIssues());
    }
  };

  const search=(val)=>{
    console.log(val)
    if(val===''){
      setCurrentRecords1(issuesData.slice(
        indexOfFirstRecord,
        indexOfLastRecord
      ))
    }else{
  
    const searchedArr=[]
    currentRecords1.map(data=>{
      if(data.title.includes(val)){
        searchedArr.push(data)
      }
    })
    console.log(searchedArr)
    setCurrentRecords1(searchedArr)
    console.log(currentRecords1)
  }

  }


  return (
    <>
      <div>
        <h5>Content to be filled</h5>
        <hr />
        <div className="types">
          <div className="subtypes">
            <div className="ty">
              <p
                id="n"
                className={type === "open" ? "cont" : ""}
                onClick={() => viewIssues("open")}
              >
                Open
              </p>
              (305)
            </div>
            <div className="ty">
              <p
                id="n"
                className={type === "closed" ? "cont" : ""}
                onClick={() => viewIssues("closed")}
              >
                Closed
              </p>
              (1002)
            </div>
            <div className="ty">
              <p
                id="n"
                className={type === "all" ? "cont" : ""}
                onClick={() => viewIssues("all")}
              >
                All
              </p>
              (1307)
            </div>
          </div>
          <button className="btn btn-primary"><Link to='/newIssue' style={{color:'white',textDecoration:'none'}}>New issue</Link></button>
        </div>
        <hr />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <SearchBar
          value={""}
          onChange={(val)=>search(val)}
          onRequestSearch={() => {}}
          style={{ width: "80%" }}
        />
        <SortingComponent issuesData={issuesData} setIssuesData={setIssuesData} updateIssues={updateIssues} />
      </div>
      <hr />
      {currentRecords1.map((issue, index) => {
        if (type === "open" && !issue.state) {
          return (
            <IssueComponent
              title={issue.title}
              id={index}
              labels={issue.labels.nodes}
              createdat={issue.createdAt}
              author={issue.author.name}
              assignees={issue.assignees.nodes}
              updatedat={issue.updatedAt}
              weight={issue.weight}
            />
          );
        }
        if (type === "all") {
          return (
            <IssueComponent
              title={issue.title}
              id={index}
              labels={issue.labels.nodes}
              createdat={issue.createdAt}
              author={issue.author.name}
              assignees={issue.assignees.nodes}
              updatedat={issue.updatedAt}
              weight={issue.weight}
            />
          );
        }
        if (issue.state === type) {
          return (
            <IssueComponent
              title={issue.title}
              id={index}
              labels={issue.labels.nodes}
              createdat={issue.createdAt}
              author={issue.author.name}
              assignees={issue.assignees.nodes}
              updatedat={issue.updatedAt}
              weight={issue.weight}
            />
          );
        }
      })}
      <PaginationComponent
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default IssuePage;

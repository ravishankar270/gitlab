import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IssueComponent from "../../components/Issue/IssueComponent";
import {
  getClosedIssues,
  getIssues,
  getIssuesInfo,
} from "../../store/actions/issueAction";
import "./IssuePage.scss";
import SearchBar from "material-ui-search-bar";
import { getOpenIssues } from "../../store/actions/issueAction";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import SortingComponent from "../../components/Sorting/SortingComponent";
import { Link } from "react-router-dom";

const IssuePage = (i) => {
  //counts of issues data
  const data = useSelector((state) => state.issues.issues);
  const open = useSelector((state) => state.issues.noOfOpenIssues);
  const closed = useSelector((state) => state.issues.noOfCloseIssues);
  const all = useSelector((state) => state.issues.noOfAllIssues);
  //data to display it in the ui
  const [dummy,setDummy]=useState([])
  const [issuesData, setIssuesData] = useState([]);

  //states to maintain pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const [isSearching, setIsSearch] = useState(false);
  const [type, setType] = useState("open");
  const [nPages, setnPages] = useState(0);
  const dispatch = useDispatch();


  const dispatchAction=()=>{
    const data={ page: currentPage, limit: recordsPerPage }
    if (type === "closed") {
      dispatch(getClosedIssues(data));
    } else if (type === "all") {
      dispatch(getIssues(data));
    } else {
      dispatch(getOpenIssues(data));
    }
  }
  
  useEffect(() => {
    dispatchAction()
  }, [currentPage]);

  useEffect(() => {
    dispatch(getOpenIssues({ page: currentPage, limit: recordsPerPage }));
    dispatch(getIssuesInfo());
  }, []);

  //initialization of issues data
  useEffect(() => {
    setIssuesData(data);
    setDummy(data)
  }, [data]);

  //initialization for npages based on type(open/closed/all)
  useEffect(() => {
    setnPages(Math.ceil(eval(type) / recordsPerPage));
  }, [type]);

  //function after the filtering
  const updateIssues = (data) => {
    setIssuesData(data);
  };


  const viewIssues = (type) => {
    const data={ page: currentPage, limit: recordsPerPage }
    setType(type);
    setCurrentPage(1);
    if (type === "closed") {
      dispatch(getClosedIssues(data));
    } else if (type === "all") {
      dispatch(getIssues(data));
    } else {
      dispatch(getOpenIssues(data));
    }
  };

  const issueComponent = (issue, index) => {
    return (
      <IssueComponent
        key={issue.id}
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
  };

  //function that implements search functionality
  const search = (val) => {
    
    if (val === "") {
      setIsSearch(false);
      setIssuesData(dummy)
      console.log(issuesData)
    } else {
      setIsSearch(true);
      const searchedArr = [];
      issuesData.map((data) => {
        if (data.title.includes(val)) {
          searchedArr.push(data);
        }
      });
      console.log(searchedArr);
      setIssuesData(searchedArr);
    }
  };

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
              ({open})
            </div>
            <div className="ty">
              <p
                id="n"
                className={type === "closed" ? "cont" : ""}
                onClick={() => viewIssues("closed")}
              >
                Closed
              </p>
              ({closed})
            </div>
            <div className="ty">
              <p
                id="n"
                className={type === "all" ? "cont" : ""}
                onClick={() => viewIssues("all")}
              >
                All
              </p>
              ({all})
            </div>
          </div>
          <button className="btn btn-primary">
            <Link
              to="/newIssue"
              style={{ color: "white", textDecoration: "none" }}
            >
              New issue
            </Link>
          </button>
        </div>
        <hr />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <SearchBar
          value={""}
          onChange={(val) => search(val)}
          onRequestSearch={() => {}}
          style={{ width: "80%" }}
        />
        <SortingComponent
          issuesData={data}
          // setIssuesData={setIssuesData}
          updateIssues={updateIssues}
        />
      </div>
      <hr />
      {issuesData.map((issue, index) => {
        if (type === "open" && !issue.state) {
          return issueComponent(issue, index);
        }
        if (type === "all") {
          return issueComponent(issue, index);
        }
        if (issue.state === type) {
          return issueComponent(issue, index);
        }
      })}
      {isSearching?<></>:
      <PaginationComponent
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    }
    </>
  );
};

export default IssuePage;

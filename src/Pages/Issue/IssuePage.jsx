import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import IssueComponent from "../../components/Issue/IssueComponent";
import {
  getClosedIssues,
  getIssues,
  getIssuesInfo,
  getSortedData,
} from "../../store/actions/issueAction";
import "./IssuePage.scss";
import SearchBar from "material-ui-search-bar";
import { getOpenIssues } from "../../store/actions/issueAction";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import SortingComponent from "../../components/Sorting/SortingComponent";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Discuss } from "react-loader-spinner";
import { useRef } from "react";

const IssuePage = (i) => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const contentRef=useRef()
  //counts of issues data
  const data = useSelector((state) => state.issues.issues);
  const open = useSelector((state) => state.issues.noOfOpenIssues);
  const closed = useSelector((state) => state.issues.noOfCloseIssues);
  const all = useSelector((state) => state.issues.noOfAllIssues);
  //data to display it in the ui
  const [dummy, setDummy] = useState([]);
  const [issuesData, setIssuesData] = useState([]);

  //states to maintain pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const [isSearching, setIsSearch] = useState(false);
  const [type, setType] = useState("open");
  const [nPages, setnPages] = useState(0);

  const prevTypeRef=useRef()
  const dispatch = useDispatch();

  const dispatchAction = () => {
    const data = { page: currentPage, limit: recordsPerPage };
    setLoading(true);
    if (selected) {
      dispatch(
        getSortedData({
          ...selected,
          ...data,
        })
      );
    } else if (type === "closed") {
      dispatch(getClosedIssues(data));
    } else if (type === "all") {
      dispatch(getIssues(data));
    } else {
      dispatch(getOpenIssues(data));
    }
  };

  useEffect(() => {
    dispatchAction();
  }, [currentPage]);

  useEffect(()=>{
    prevTypeRef.current=type
  },[type])

  // useEffect(()=>{
  //   console.log(prevTypeRef.current!==type)
  //     if(prevTypeRef.current===type){
  //       // console.log('aa')
  //       console.log(prevTypeRef)
  //           contentRef.current.changeContent()
  //     }
    
  // },[type])

  useEffect(() => {
    dispatch(getOpenIssues({ page: currentPage, limit: recordsPerPage }));
    dispatch(getIssuesInfo());
  }, []);

  //initialization of issues data
  useEffect(() => {
    setIssuesData(data);
    setDummy(data);
    setLoading(false);
  }, [data]);

  //initialization for npages based on type(open/closed/all)
  useEffect(() => {
    setnPages(Math.ceil(eval(type) / recordsPerPage));
  }, [type, open]);

  //function after the filtering
  const updateIssues = (data) => {
    setSelected(data);
    setLoading(true);
  };

  const viewIssues = (type) => {
    const data = { page: currentPage, limit: recordsPerPage };
    setType(type);
    setCurrentPage(1);
    setSelected(null);
    if (type === "closed") {
      dispatch(getClosedIssues(data));
    } else if (type === "all") {
      dispatch(getIssues(data));
    } else {
      dispatch(getOpenIssues(data));
    }
  };

  //function that implements search functionality
  const search = (val) => {
    if (val === "") {
      setIsSearch(false);
      setIssuesData(dummy);
      console.log(issuesData);
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
            <div className="type">
              <p
                className={type === "open" ? "cont" : "normal"}
                onClick={() => viewIssues("open")}
              >
                Open
              </p>
              ({open})
            </div>
            <div className="type">
              <p
                className={type === "closed" ? "cont" : "normal"}
                onClick={() => viewIssues("closed")}
              >
                Closed
              </p>
              ({closed})
            </div>
            <div className="type">
              <p
                id="n"
                className={type === "all" ? "cont" : "normal"}
                onClick={() => viewIssues("all")}
              >
                All
              </p>
              ({all})
            </div>
          </div>
          <Button variant="contained">
            <Link
              to="/newIssue"
              style={{ color: "white", textDecoration: "none" }}
            >
              New issue
            </Link>
          </Button>
        </div>
        <hr />
      </div>
      <div className="searchandsort">
        <SearchBar
          value={""}
          onChange={(val) => search(val)}
          onRequestSearch={() => {}}
          style={{ width: "80%" }}
        />
        <SortingComponent
          issuesData={data}
          updateIssues={updateIssues}
          change={false}
          currentPage={currentPage}
          type={type}
          ref={contentRef}
        />
      </div>
      <hr />
      {loading ? (
        <Discuss
          visible={true}
          height="100"
          width="100"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#black"
          backgroundColor="black"
        />
      ) : (
        issuesData.map((issue, index) => {
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
        })
      )}
      {isSearching || loading ? (
        <></>
      ) : (
        <PaginationComponent
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default IssuePage;

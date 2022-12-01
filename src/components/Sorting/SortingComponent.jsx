import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./SortingComponent.scss";
import { useDispatch } from "react-redux";
import { getSortedData } from "../../store/actions/issueAction";

export default function SortingComponent({ issuesData, updateIssues,currentPage,type }) {
  const [content, setContent] =useState('');
  const [order, setOrder] = useState("asc");
  // const [currentType,setCurrentType]=useState(type)
  const dispatch=useDispatch()

  const handleChange = (event) => {
    const val = event.target.value;
    setContent(event.target.value);
    // let sortedArr;
    // const data = [...issuesData];
    // if (order === "asc") {
    //   sortedArr = data.sort(
    //     (objA, objB) =>
    //       Number(new Date(objA[val])) - Number(new Date(objB[val]))
    //   );
    // } else {
    //   sortedArr = data.sort(
    //     (objA, objB) =>
    //       Number(new Date(objB[val])) - Number(new Date(objA[val]))
    //   );
    // }
    let data={
      type:val,
      order:order
    }
    dispatch(getSortedData({
      ...data,
      page:currentPage,
      limit:5,
      issueType:type
    }))
    updateIssues(data);

  };

  const changeContent=()=>{
    setContent('')
  }
  return (
    <div className="scomp">
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="demo-select-small">Sort</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={content}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="createdAt">Created Date</MenuItem>
          <MenuItem value="updatedAt">Updated Date</MenuItem>
          <MenuItem value="closedAt">Closed Date</MenuItem>
        </Select>
      </FormControl>
      {order === "asc" ? (
        <ArrowUpwardIcon onClick={() => setOrder("desc")} />
      ) : (
        <ArrowDownwardIcon onClick={() => setOrder("asc")} />
      )}
    </div>
  );
}

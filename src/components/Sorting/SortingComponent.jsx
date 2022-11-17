import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SortingComponent({issuesData,setIssuesData,updateIssues}) {
  const [date, setDate] = React.useState('');
  const [order,setOrder]=useState('asc')

  const handleChange = (event) => {
    const val=event.target.value
    let sortedArr;
    if(order==='asc'){
    sortedArr=issuesData.sort(
      (objA, objB) => Number(new Date(objA[val])) - Number(new Date(objB[val])),
    );
    }else{
      sortedArr=issuesData.sort(
        (objA, objB) => Number(new Date(objB[val])) - Number(new Date(objA[val])),
      );

    }
    console.log(sortedArr)
    // setIssuesData(sortedArr)
    updateIssues(sortedArr)
    setDate(event.target.value);
  };

  return (
    <div className='d-flex justify-content-around align-items-center'>
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small">Sort</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={date}
        label="Sort"
        onChange={handleChange}
      >
        
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value='createdAt'>Created Date</MenuItem>
        <MenuItem value='updatedAt'>Updated Date</MenuItem>
        <MenuItem value='closedAt'>Closed Date</MenuItem>
      </Select>
      
    </FormControl>
    {order==='asc'?
    <svg style={{cursor:'pointer'}} onClick={()=>setOrder('desc')} xmlns="http://www.w3.org/2000/svg" width="18" height="22" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16">
      <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
      </svg>:
      <img style={{cursor:'pointer'}} onClick={()=>setOrder('asc')}  src="https://img.icons8.com/ios/18/null/generic-sorting.png"/>
  }
    </div>
  );
}
      

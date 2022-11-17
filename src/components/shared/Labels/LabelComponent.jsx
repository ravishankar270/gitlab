import React, { useEffect } from 'react'

function LabelComponent({type,color}) {
    const label=type.split('::')
    
  return (
<div >
<span className='badge badge-pill badge-primary' style={{backgroundColor:color,marginLeft:'10px',color:'white',display:'inline'}}>{label[0]} | <span style={{backgroundColor:'white',color:'black'}}>{label[1]}</span></span>

</div>
  )
}

export default LabelComponent
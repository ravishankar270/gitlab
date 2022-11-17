import React, { useEffect } from 'react'

function AvatarComponent({img,width,height}) {
    useEffect(()=>{
        console.log(img)
    },[])
  return (
    <div>
        <img  className='rounded-circle'alt='image' width={width} height={height} src={img}></img>
    </div>
  )
}

export default AvatarComponent
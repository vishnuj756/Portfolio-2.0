import React from 'react'

export default function Button(props) {
    const {btnName,btnclass, onClick,style}=props
  return (
<button type='submit' onClick={onClick} className={`btn px-4 ${btnclass}`} style={{...style}}>
  {btnName}
</button>


  )
}

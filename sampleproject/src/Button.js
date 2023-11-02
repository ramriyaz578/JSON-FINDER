import React from 'react'

const button = ({Buttontext, reqType, setreqType }) => {
  return (
    
        <button
        className={Buttontext === reqType ? "selected" : null}
        type='button'
        onClick={()=>setreqType(Buttontext)}>
        {Buttontext}
        </button>
        
  )
}

export default button

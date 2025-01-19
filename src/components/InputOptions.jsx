import React from 'react'
import "../componentsCss/InputOptions.css"

function InputOptions({ Icon, title, color}) {
  return (
    <div className='input-options'>
      <Icon style={{ color : color }} className="icons" />
      <h4>{title}</h4>
    </div>
  )
}

export default InputOptions
